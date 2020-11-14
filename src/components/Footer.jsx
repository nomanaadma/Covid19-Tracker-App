import React from 'react';
import heart from "../heart.png";

function Footer() {
	return (
		<p style={{ margin: '40px 0', textAlign: 'center' }}>Made with <img src={heart} style={{ width: '19px', verticalAlign: 'text-bottom', color: 'grey' }} /> by <a href="https://github.com/nomanaadma" target="_blank" style={{ color: 'grey', textDecoration: 'none', fontWeight: 600 }}>Noman Shoukat</a></p>
	);
}

export default Footer;