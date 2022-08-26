const plugin = require('tailwindcss/plugin');

const primary = '#E30B13';

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary,
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({});
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
			});
		}),
	],
};
