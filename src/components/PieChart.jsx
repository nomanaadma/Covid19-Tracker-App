import React, { useContext, useState, useEffect, useRef } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import { Context } from "../state/Provider";
import { createChart } from "../utils/ChartHelper";


const PieChart = () => {

	const pieChartRef = useRef(null);
	const [chart, setChart] = useState(null);
	const [dataset, setDataset] = useState([]);
	const [checked, setChecked] = useState(false);
	const { state } = useContext(Context);

	useEffect(() => {
		let country = state.selectedCountry;

		const data = [];
		data.push(country.deaths);
		data.push(country.cases);
		data.push(country.recovered);
		setDataset(data);

		if (chart !== null) chart.destroy();
		const ctx = pieChartRef.current;
		setChart(createChart(ctx, checked ? "pie" : "bar", data));

	}, [state]);

	const toggleChecked = e => {
		setChecked(e.target.checked);
		if (chart !== null) chart.destroy();
		const ctx = pieChartRef.current;
		setChart(createChart(ctx, e.target.checked ? "pie" : "bar", dataset));
	};

	return (
		<div style={{ padding: 10 }}>
			<FormControlLabel
				control={<Switch checked={checked} onChange={toggleChecked} />}
				label="Pie Chart"
			/>
			<canvas id="pieChart" ref={pieChartRef} width="100%" height="106"></canvas>
		</div>
	);
};

export default PieChart;
