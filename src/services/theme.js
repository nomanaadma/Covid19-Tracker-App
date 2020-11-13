import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();

theme.typography.h3 = {
	fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color emoji',
	margin: '0 !important',
	fontWeight: '600',
	padding: '7px',
	fontSize: '1rem',
	'@media (max-width:1092px) and (min-width:960px)': {
		fontSize: '0.8rem',
	},
};

theme.typography.h5 = {
	fontSize: '1.5rem',
	'@media (max-width:1092px) and (min-width:960px)': {
		fontSize: '1.3rem',
	},
};

export default theme;
