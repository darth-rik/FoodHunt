module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: "Josefin Sans",
		},
		extend: {
			backgroundImage: (theme) => ({
				"mobile-bg": "url('images/mobile-bg.jpg')",
				"mobile-header": "url('images/mobile-header.jpg')",
				"desktop-bg": "url('images/desktop-bg.jpg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
