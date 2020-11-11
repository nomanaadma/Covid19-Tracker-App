const Reducer = (state, action) => {
	switch (action.type) {
		case "SET_COUNTRY":
			return {...state, selectedCountry: action.payload}
		case "SET_WORLD_DATA":
			return {...state, worldData: action.payload}
		case "SET_COUNTRIES_DATA":
				return {...state, countriesData: action.payload}
		case "SET_HISTORICAL_DATA":
			return {...state, historicalData: action.payload}
		case "SET_COUNTRIES_HISTORICAL_DATA":
			return {...state, countriesHistoricalData: action.payload}
		default:
			return state;
	}
};

export default Reducer;