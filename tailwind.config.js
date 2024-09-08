/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				fadeout: {
					'0%': {
						opacity: 0,
						transform: 'translate3d(0, 10px, 0)',
					},
					'100%': {
						opacity: 1,
						transform: 'translate3d(0, 0, 0)',
					},
				},
			},
			animation: {
				fadeout: 'fadeout 1s',
			},
		},
		fontFamily: {
			sktBold: ['SKTSansTTFBold'],
			sktMedium: ['SKTSansTTFMedium'],
			sktRegular: ['SKTSansTTFRegular'],
		},
		fontSize: {
			lg: [
				'24px',
				{
					lineHeight: '36px',
					fontWeight: '700',
				},
			],
			sm: [
				'14px',
				{
					lineHeight: '21px',
					fontWeight: '400',
				},
			],
		},
	},
	plugins: [],
};
