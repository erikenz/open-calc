/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#121f51",
				secondary: "#1dcbdb",
				buttonPrimary: "90CAF9",
				buttonSecondary: "CE93D8",
				success: "66BB6A",
				error: "F44336",
				info: "29B6F6",
				warning: "FFA726",
				link: "#eeeeff",
				g_blue: "#1a73e8",
				g_blue_dark: "#1b66c9",
				g_white: "#dadce0",
				g_grey: "#5f6368",
				g_black: "#202124",
			},
			minWidth: {
				xs: "360px",
			},
			minHeight: {
				px: "1px",
			},
			height: {
				header: "56px",
			},
			letterSpacing: {
				g_xxs: "0.00625em",
				g_xs: "0.0107142857em",
				g_sm: "0.01428571em",
				g_lg: "0.07272727em",
			},
			width: {
				450: "450px",
				600: "600px",
			},
			screens: {
				xs: "450px",
				sm: "600px",
				s720: "720px",
				s743: "743px",
				s1024: "1024px",
			},
			spacing: {
				g_sm: "156px",
				g_smd: "200px",
				g_md: "328px",
			},
			fontSize: {
				xxs: ["0.6875rem", "1rem"],
			},
			transitionProperty: {
				height: "height",
				visibility: "visibility",
			},
			transitionTimingFunction: {
				nav: "cubic-bezier(0.52, 0.16, 0.24, 1)",
			},
			transitionDuration: {
				560: "560ms",
			},
			animation: {
				"burger-open": "top-in 3s linear",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				"top-in": {
					"0%, 50%": {
						top: 0,
						transform: "translateY(0%) rotate(0)",
					},
					"50%, 100%": {
						top: "50%",
						transform: "translateY(-50%) rotate(0)",
					},
					"100%": {
						top: "50%",
						transform: "translateY(-50%) rotate(45deg)",
					},
				},
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
			addVariant("child-hover-all", "&:hover *");
		},
		({ addUtilities }) => {
			addUtilities({
				".col-center": {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				},
				".no-link": {
					underline: "none",
					color: "inherit",
				},
				"no-decoration": {
					textDecoration: "none",
				},
				// "no-tap-highlight": {
				// 	"-webkit-tap-highlight-color": "transparent",
				// },
			});
		},
		// plugin(function ({ addUtilities, addComponents, e, config }) {
		// 	// Add your custom styles here
		// 	addUtilities({
		// 		".col-center": {
		// 			display: "flex",
		// 			flexDirection: "column",
		// 			alignItems: "center",
		// 			justifyContent: "center",
		// 		},
		// 		".no-link": {
		// 			underline: "none",
		// 			color: "inherit",
		// 		},
		// 		"no-tap-highlight": {
		// 			// "-webkit-tap-highlight-color": "transparent",
		// 		},
		// 	});
		// }),

		//TODO: create plugin to simplify media queries -> md:flex md:items-center to md:(flex items-center)
		// plugin(function ({ addVariant, e }) {
		// 	addVariant("all:", ({ modifySelectors, separator }) => {
		// 		modifySelectors(({ className }) => {
		// 			return `.${e(`test${separator}${className}`)}:test`;
		// 		});
		// 	});
		// }),
	],
};
