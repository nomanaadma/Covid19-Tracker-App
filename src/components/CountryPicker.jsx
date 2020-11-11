import React, { useContext } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/AutoComplete';
import { Context } from "../state/Provider";

function CountryPicker() {

	let { setCountry, state } = useContext(Context);
	
	return (
		<div className="alignCenter">
			<Autocomplete
				id="combo-box-demo"
				options={state.countriesData}
				onChange={(event, newValue) => {
					setCountry((newValue?.country === undefined) ? null : newValue.country);
				}}
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
