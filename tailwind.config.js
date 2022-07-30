module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./sections/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '.25rem',
				xsm: '.25rem',
				sm: '1rem',
				lg: '2rem',
				xl: '4rem',
				'2xl': '6rem',
			},
		},
		extend: {
			height: {
				5.5: '1.3125rem',
			},
			lineHeight: {
				5.5: '1.3125rem',
			},
			padding: {
				'5px': '5px',
				'6px': '6px',
				'15px': '15px',
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
			ubuntumedium: '"ubuntumedium", sans-serif',
			ubunturegular: '"ubunturegular", sans-serif',
			ubuntubold: '"ubuntubold", sans-serif',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			darkBlue: '#141C3A',
			middleBlue: '#202744',
			lightBlue: '#5F7AFB',
			lighterBlue: '#D7DEF8',
			offWhite: '#EDEDED',
			prettyWhite: '#F9F9F9',
			darkGrey: '#333',
		},
		fontSize: {
			heading: '1.75rem',
			subheading: '1.375rem',
			body: '.875rem',
		},
	},
	plugins: [],
};
