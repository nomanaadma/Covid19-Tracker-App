import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import {  ThemeProvider } from '@material-ui/core';
import theme from '../services/theme';

const initialState = {
	selectedCountry: {},
	worldData: {},
	countriesData: [],
	historicalData: {},
	countriesHistoricalData: [],
}

export const Context = createContext(initialState);

export const Provider = ({ children, className }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	function setCountry(country) {
		dispatch({
			type: "SET_COUNTRY",
			payload: country,
		});
	}

	function setWorldData(data) {
		dispatch({
			type: "SET_WORLD_DATA",
			payload: data,
		});
	}

	function setCountriesData(data) {
		dispatch({
			type: "SET_COUNTRIES_DATA",
			payload: data,
		});
	}

	function setHistoricalData(data) {
		dispatch({
			type: "SET_HISTORICAL_DATA",
			payload: data,
		});
	}

	function setCountriesHistoricalData(data) {
		dispatch({
			type: "SET_COUNTRIES_HISTORICAL_DATA",
			payload: data,
		});
	}

	return (
		<Context.Provider
			value={{ state, setCountry, setWorldData, setCountriesData, setHistoricalData, setCountriesHistoricalData }}
		>
			<ThemeProvider theme={theme}>
				<div className={className}>{children}</div>
			</ThemeProvider>
		</Context.Provider>
	);
};
