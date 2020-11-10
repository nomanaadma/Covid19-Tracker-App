import React from "react";
import Logo from "./components/Logo.jsx";
import CountrySelect from "./components/CountrySelect.jsx";
import { makeStyles, Container, Paper, Grid } from '@material-ui/core';

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

	const classes = useStyles();

	return (
		<div className="App">
			<header className="App-header">
				<Logo />
				<CountrySelect />
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
