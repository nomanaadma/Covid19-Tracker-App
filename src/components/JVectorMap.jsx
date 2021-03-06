import React, { useContext, useRef } from "react";
import { VectorMap } from "react-jvectormap";
import { Context } from "../state/Provider";
import Humanize from "humanize-plus";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: "100%",
		height: "600px",
		[theme.breakpoints.down("md")]: {
			height: "450px",
		},
		[theme.breakpoints.down("sm")]: {
			height: "350px",
		}
	},
}));

const JVectorMap = () => {

	const classes = useStyles();
	const jVectorRef = useRef(null);
	const { state, setCountry } = useContext(Context);

	const handleClick = (e, countryCode) => {
		e.preventDefault();
		jVectorRef.current.$mapObject.tip.hide();
		
		const country = state.countriesData.find(({ countryInfo }) => countryInfo.iso2 === countryCode);
		if (country !== undefined && state.countriesHistoricalData.filter(c => c.country === country.country).length)
			setCountry(country);
	};

	const handleHover = (e, el, code) => {

		const country = state.countriesData.find(({ countryInfo }) => countryInfo.iso2 === code);
		if (country === undefined) return;
		const { cases, deaths, recovered } = country;

		el.html(
			`<strong style='font-size: 1rem;'>${el.html()}</strong>` +
				`<br>Cases: ${Humanize.compactInteger(
					cases
				)}<br>Deaths: ${Humanize.compactInteger(
					deaths
				)}<br>Recovered: ${Humanize.compactInteger(recovered)}`
		);
	};

	const mapData = {};
	for (const country of state.countriesData) {
		mapData[country.countryInfo.iso2] = country.cases;
	}
	
	return (
		<VectorMap
			ref={jVectorRef}
			map="world_mill"
			backgroundColor="transparent"
			zoomOnScroll={true}
			zoomAnimate={true}
			onRegionClick={(e, countryCode) => handleClick(e, countryCode)}
			containerClassName={classes.root}
			regionStyle={{
				initial: {
					fill: "#e4e4e4",
					"fill-opacity": 0.9,
					stroke: "#000000",
					"stroke-width": 0.2,
					"stroke-opacity": 0.2,
				},
				hover: {
					"fill-opacity": 1,
					cursor: "pointer",
					stroke: "#000",
					"stroke-width": 1,
					"stroke-opacity": 1,
				},
			}}
			onRegionTipShow={handleHover}
			series={{
				regions: [
					{
						values: mapData,
						scale: ["#ffeda0", "#ffc06b", "#ff9c00", "#ff7701", "#e24800", "#cc2200", "#840203"],
						normalizeFunction: "polynomial",
						legend: {
							vertical: false,
							title: "Cases",
							labelRender: a => Humanize.compactInteger(a),
						},
					},
				],
			}}
		/>
	);
};
export default JVectorMap;
