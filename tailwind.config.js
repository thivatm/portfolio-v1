module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: "#010B14",
				"brand-800": "#05223B",
				magnolia: "#E2E7F3",
				turquo: "#6FFFE9",
				yelo: "#FFD166",
				pinky: "#EF476F",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				heebo: ["Heebo", "serif"],
				fira: ["Fira Code", "serif"],
			},
			boxShadow: {
				brand: "0.8rem 0.8rem #6FFFE9",
				button: "0.25rem 0.25rem #6FFFE9",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
			boxShadow: ["active"],
			inset: ["active"],
		},
	},
	plugins: [],
};