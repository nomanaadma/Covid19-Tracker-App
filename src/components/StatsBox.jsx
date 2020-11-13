import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

function StatsBox({ className, cardTitle, value }) {

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
