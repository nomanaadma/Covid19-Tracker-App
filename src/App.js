import React, { useContext, useEffect } from "react";
import { Logo, CountryPicker } from './components';
import { makeStyles, Container, Paper, Grid } from '@material-ui/core';
import { Context } from "./state/Provider";
import { getWorldData, getCountriesData, getHistoricalData, getCountriesHistoricalData } from "./services/virusData";


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

	let { setWorldData } = useContext(Context);
	console.log(setWorldData);

	useEffect(() => {

		Promise.all([
			getWorldData(),
			getCountriesData(),
			getHistoricalData(),
			getCountriesHistoricalData()
		]).then(function(responses) {
			// console.log(responses[1].data);
			// setCountriesData(responses[1].data);
		});

	}, []);

	const classes = useStyles();

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
						<Paper className={classes.paper}>xs=6</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper}>xs=6</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.paper}>xs=6</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
