/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				fadeInDown: {
					'0%': {
						opacity: '0',
						transform: 'translate3d(0, -100%, 0)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateZ(0)',
					},
				},
			},
			animation: {
				fadeInDown: 'fadeInDown 1s ease-out forwards',
			},
		},
	},
	plugins: [],
};
