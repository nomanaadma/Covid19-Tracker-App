import React, { useEffect, useContext, useRef, useState } from "react";
import { Context } from "../state/Provider";
import { mapToAxesEntries, createLineChart } from "../utils/ChartHelper";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../services/theme';


const HistoryChart = () => {

	const isMd = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
	const isSm = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
	const isXs = useMediaQuery(theme.breakpoints.down("xs"), { noSsr: true });

	let canvasHeight;
	if(isXs)
		canvasHeight = '100%';
	else if(isSm)
		canvasHeight = '60%';
	else if(isMd)
		canvasHeight = '54.5%';
	else
		canvasHeight = '35%';

	const historyChartRef = useRef(null);
	const [chart, setChart] = useState(null);
	
	const { state } = useContext(Context);

	function componentDidMount() {

		const { selectedCountry, historicalData, countriesHistoricalData  } = state;
		let ctx = historyChartRef.current;

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
		
	}

	const useMountEffect = (fun) => useEffect(fun, [state]);
	useMountEffect(componentDidMount);

	return (
		<canvas id="historyChart" ref={historyChartRef} height={canvasHeight} width="100%"></canvas>
	)
};

export default HistoryChart;
