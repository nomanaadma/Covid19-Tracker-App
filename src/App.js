import React, { useContext, useEffect } from "react";
import { Logo, CountryPicker, HistoryChart, PieChart, JVectorMap } from './components';
import { makeStyles, Container, Paper, Grid, CircularProgress, Typography } from '@material-ui/core';
import { Context } from "./state/Provider";
import { getWorldData, getCountriesData, getHistoricalData, getCountriesHistoricalData } from "./services/virusData";
import world from "./world.png";


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));


function App() {

	let { state, setCountry, setWorldData, setCountriesData, setHistoricalData, setCountriesHistoricalData } = useContext(Context);

	useEffect(() => {

		Promise.all([
			getWorldData(),
			getCountriesData(),
			getHistoricalData(),
			getCountriesHistoricalData()
		]).then(function(responses) {
			
			let worldDataObj = {...responses[0].data, country: 'World', countryInfo: { flag: world } };
			setWorldData(responses[0].data);
			setCountriesData([worldDataObj, ...responses[1].data]);
			setHistoricalData(responses[2].data);
			setCountriesHistoricalData([{country: 'World', timeline: {...responses[2].data} }, ...responses[3].data]);
			setCountry(worldDataObj);
			
		});

	}, []);

	const classes = useStyles();

	if (
		Object.keys(state.worldData).length === 0 ||
		state.countriesData.length === 0 ||
		Object.keys(state.historicalData).length === 0 ||
		Object.keys(state.countriesHistoricalData).length === 0
	  ) {
		return (
		  <div
			style={{
			  height: "100vh",
			  display: "flex",
			  flexDirection: "column",
			  justifyContent: "center",
			  alignItems: "center",
			}}
		  >
			<CircularProgress color="secondary" />
			<br />
			<Typography variant="subtitle1">Fetching data...</Typography>
		  </div>
		);
	  }

	return (
		<div className="App">
			<header className="App-header">
				<Logo />
				<CountryPicker />
			</header>
			<Container maxWidth="xl">
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Paper className={classes.paper}>xs=6</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper}><JVectorMap /></Paper>
					</Grid>
					<Grid item xs={9}>
						<Paper className={classes.paper}><HistoryChart /></Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}><PieChart /></Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
