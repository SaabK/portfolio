module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			padding: {
				'5px': '5px',
				'6px': '6px',
				'15px': '15px',
			},
			lineHeight: {
				5.5: '1.3125rem',
			},
			height: {
				5.5: '1.3125rem',
			},
		},
		screens: {
			xsm: '319px',
			// => @media (min-width: 319px) { ... }

			sm: '446px',
			// => @media (min-width: 446px) { ... }

			md: '630px',
			// => @media (min-width: 630px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		fontFamily: {
			poppins: '"Poppins", sans-serif',
			poppinsbold: '"poppinsbold", sans-serif',
			poppinsregular: '"poppinsregular", sans-serif',
			poppinssemibold: '"poppinssemibold", sans-serif',
			montserratthin: '"montserratthin", sans-serif',
			montserratbold: '"montserratbold", sans-serif',
			montserratmedium: '"montserratmedium", sans-serif',
			montserratregular: '"montserratregular", sans-serif',
			montserratsemibold: '"montserratsemibold", sans-serif',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			darkBlue: '#141C3A',
			offWhite: '#ECECEC',
		},
		fontSize: {
			heading: '1.75rem',
			body: '.875rem',
		},
	},
	plugins: [],
};
