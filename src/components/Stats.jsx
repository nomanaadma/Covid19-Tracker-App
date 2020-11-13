import React, { useContext } from "react";
import StatsBox from "./StatsBox";
import { Context } from "../state/Provider";
import { Grid } from '@material-ui/core';

function Stats() {
	const {
		state: { selectedCountry },
	} = useContext(Context);

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={6} sm={4} md={2}>
					<StatsBox
						className="state-box confirmed"
						cardTitle="Cases"
						value={selectedCountry.cases}
					/>
				</Grid>
				<Grid item xs={6} sm={4} md={2}>
					<StatsBox
						className="state-box deaths"
						cardTitle="Deaths"
						value={selectedCountry.deaths}
					/>
				</Grid>
				<Grid item xs={6} sm={4} md={2}>
					<StatsBox
						className="state-box recovered"
						cardTitle="Recovered"
						value={selectedCountry.recovered}
					/>
				</Grid>
				<Grid item xs={6} sm={4} md={2}>
					<StatsBox
						className="state-box confirmed"
						cardTitle="Today's Cases"
						value={selectedCountry.todayCases}
					/>
				</Grid>
				<Grid item xs={6} sm={4} md={2}>
					<StatsBox
						className="state-box deaths"
						cardTitle="Today's Deaths"
						value={selectedCountry.todayDeaths}
					/>
				</Grid>
				<Grid item xs={6} sm={4} md={2}>
					<StatsBox
						className="state-box recovered"
						cardTitle="Today's Recovered"
						value={selectedCountry.todayRecovered}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Stats;
