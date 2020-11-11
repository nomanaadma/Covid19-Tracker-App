import http from './http';

export function getWorldData() {
	return http.get(`/all`);
}

export function getCountriesData() {
	return http.get(`/countries`);
}

export function getHistoricalData() {
	return http.get(`/historical/all?lastdays=all`);
}

export function getCountriesHistoricalData() {
	return http.get(`/historical?lastdays=all`);
}