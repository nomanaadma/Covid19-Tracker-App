import Chart from "chart.js";
import moment from "moment";

export const createLineChart = (ctx, data) => {
	return new Chart(ctx, {
		type: "line",
		responsive: true,
		maintainAspectRatio: false,
		data: {
			datasets: data.map(d => ({
				label: d.label,
				data: d.entries,
				pointRadius: 0,
				fill: true,
				backgroundColor: d.backgroundColor,
				borderColor: d.color,
				borderWidth: 2,
			})),
		},
		options: {
			legend: {
				labels: {
					fontColor: "black",
				},
			},

			tooltips: {
				yPadding: 10,
				xPadding: 10,
				caretSize: 8,
				intersect: false,
				mode: "index",
				axis: "x",
				titleAlign: "center",
				bodySpacing: 6,
				titleFontSize: 15,
				bodyFontSize: 12,
				position: "nearest",
			},

			scales: {
				xAxes: [
					{
						type: "time",
						distribution: "linear",
						time: {
							unit: "month",
							displayFormats: {
								week: "D MMM",
							},
							isoWeekday: true,
							parser: "DD MMM, YYYY",
						},
						ticks: {
							fontColor: "black",
						},
						gridLines: {
							lineWidth: 0.75,
							drawBorder: false,
						},
					},
				],
				yAxes: [
					{
						ticks: {
							callback: function(value) {
								let formatter = new Intl.NumberFormat('en');
								return formatter.format(value);
							},
							fontColor: "black",
						},
						gridLines: {
							lineWidth: 0.75,
							drawBorder: false,
						},
					},
				],
			},
		},
	});
};

export const createChart = (ctx, type, dataset) => {
	return new Chart(ctx, {
		type: type,
		responsive: true,
		maintainAspectRatio: false,
		data: {
			labels: ["Deaths", "Cases", "Recovered"],
			datasets: [
				{
					backgroundColor: ["rgb(255 0 0)", "#ffc400ad", "#00d023a6"],
					fill: true,
					data: dataset,
				},
			],
		},
		options: {
			legend: {
				display: type !== "bar",
				position: "top",
				align: "start",
				labels: {},
			},
		},
	});
};

export function mapToAxesEntries(data, historicalData) {
	const axesEntries = [];
	if (data && historicalData.length !== 0) {
		for (let [key, value] of Object.entries(data)) {
			axesEntries.push({
				t: moment(key,'MM-DD-YY').format('DD MMM, YYYY'),
				y: value,
			});
		}
		return axesEntries;
	}
	return [];
}
