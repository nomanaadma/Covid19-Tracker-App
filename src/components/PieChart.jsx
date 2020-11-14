import React, { useContext, useState, useEffect, useRef } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import { Context } from "../state/Provider";
import { createChart } from "../utils/ChartHelper";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../services/theme';

const PieChart = () => {

	const pieChartRef = useRef(null);
	const [chart, setChart] = useState(null);
	const [dataset, setDataset] = useState([]);
	const [checked, setChecked] = useState(false);
	const { state } = useContext(Context);
	
	const isXs = useMediaQuery(theme.breakpoints.down("xs"), { noSsr: true });
	const isSm = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

	let canvasHeight;
	if(isXs)
		canvasHeight = '100';
	else if(isSm)
		canvasHeight = '40';
	else
		canvasHeight = '106';

	function componentDidMount() {
		let country = state.selectedCountry;

		const data = [];
		data.push(country.deaths);
		data.push(country.cases);
		data.push(country.recovered);
		setDataset(data);

		if (chart !== null) chart.destroy();
		const ctx = pieChartRef.current;
		setChart(createChart(ctx, checked ? "pie" : "bar", data));
	}

	const useMountEffect = (fun) => useEffect(fun, [state]);
	useMountEffect(componentDidMount);

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
			<canvas id="pieChart" ref={pieChartRef} width="100%" height={canvasHeight}></canvas>
		</div>
	);
};

export default PieChart;
