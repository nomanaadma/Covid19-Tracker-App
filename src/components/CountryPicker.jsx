import React, { useContext } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Context } from "../state/Provider";

function CountryPicker() {
	
	let { setCountry, state } = useContext(Context);

	const countriesWhichHasHistory = () => {
		return state.countriesData.filter(({ country }) => {
			if(country === "World") {
				return true;
			} else {
				return state.countriesHistoricalData.map((c) => c.country).includes(country);
			}
		});
	};

	return (
		<div className="alignCenter">
			<Autocomplete
				id="combo-box-demo"
				options={countriesWhichHasHistory()}
				onChange={(event, newValue) => {
					setCountry(newValue || {});
				}}
				value={ (state.selectedCountry?.country) ? state.selectedCountry : null}
				disableClearable={true}
				renderOption={(option) => (
					<React.Fragment>
						<span className="country-flag"><img src={option.countryInfo.flag} alt={option.country} /></span>
						{option.country}
					</React.Fragment>
				)}
				getOptionLabel={option => option.country}
				style={{ width: 280, margin: '40px auto' }}
				renderInput={params => (
					<TextField
						{...params}
						label="Select Country"
						variant="outlined"
					/>
				)}
			/>
		</div>
	);
}

export default CountryPicker;
