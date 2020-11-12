import React, { useContext } from "react";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import { Context } from "../state/Provider";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
});

function StatsBox({ className, cardTitle, value }) {

	const classes = useStyles();

	return (
		<React.Fragment>
			<Card className={className}>
				<CardContent>
					<Typography variant="h5">
						<CountUp
							start={0}
							end={value}
							duration={1.5}
							separator=","
						/>
					</Typography>
				</CardContent>
				<Typography
						className="stats-title"
						color="textSecondary"
						gutterBottom
						variant="h3"
						component="h1"
					>
						{cardTitle}
				</Typography>
			</Card>
		</React.Fragment>
	);
}

export default StatsBox;
