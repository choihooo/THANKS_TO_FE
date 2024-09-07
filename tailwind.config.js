/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
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
