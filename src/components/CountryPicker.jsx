import React, { useContext, useEffect } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/AutoComplete';
import { Context } from "../state/Provider";
import Axios from "axios";

function CountryPicker() {

	const [allCountries, setAllCountries] = React.useState([]);
	let { setCountry } = useContext(Context);

	useEffect(() => {
		
		Axios.get('https://disease.sh/v2/countries').then(function({ data }) {
			setAllCountries(data);
		});
		
	}, []);
	
	return (
		<div className="alignCenter">
			<Autocomplete
				id="combo-box-demo"
				options={allCountries}
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
