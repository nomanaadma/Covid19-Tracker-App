import React, { useEffect, useContext, useRef, useState } from "react";
import { Context } from "../state/Provider";
import { mapToAxesEntries, createLineChart } from "../utils/ChartHelper";

const HistoryChart = () => {

	const historyChartRef = useRef(null);
	const [chart, setChart] = useState(null);

	const { state } = useContext(Context);

	useEffect(() => {

		const { selectedCountry, historicalData, countriesHistoricalData  } = state;
		const ctx = historyChartRef.current;

		if(selectedCountry?.country) {

			if (chart !== null) chart.destroy();

			let country = countriesHistoricalData.filter(c => c.country === selectedCountry.country)[0];
			const deaths = mapToAxesEntries(country.timeline["deaths"], historicalData);
			const cases = mapToAxesEntries(country.timeline["cases"], historicalData);
			const recovered = mapToAxesEntries(country.timeline["recovered"], historicalData);
	
			const createChart = createLineChart(ctx, [
				{
					label: "Deaths",
					entries: deaths,
					color: "rgb(255 0 0)",
					backgroundColor: 'rgba(255, 0, 0, 0.5)',
				},
				{
					label: "Recovered",
					entries: recovered,
					color: "rgb(0 208 35)",
					backgroundColor: 'rgb(0 255 0 / 13%)',
				},
				{
					label: "Cases",
					entries: cases,
					color: "rgb(254 189 31)",
					backgroundColor: 'rgba(255, 196, 0, 0.3)',
				},
			]);

			setChart(createChart);
		}
		
	}, [state]);

	return (
		<div>
			<canvas id="historyChart" ref={historyChartRef} height="35%" width="100%"></canvas>
		</div>
	);
};

export default HistoryChart;
