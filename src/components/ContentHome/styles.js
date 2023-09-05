import { styled } from "@stitches/react"

export const StyledContentHome = styled("div", {

	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	flexDirection: "column",
	color: "black",
	gap: "30px",
	marginBottom: "50px",
	height: "90vh",

	".styled-triangle-up": {
		backgroundColor: "black",
		width: "50px",
		height: "50px",
		position: "relative",
		left: "0",
	},


	".long-line": {
		width: "100vw",
		height: "1px",
		backgroundColor: "black",
	},

	".title-content-home": {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "10px",
		color: "black",
		fontSize: "2.7rem",
		fontFamily: "Empera",

		"img":
		{
			width: "40px",
			height: "40px",
		},

		"p": {
			marginBottom: "0",
		},

	},

	".cards": {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "40px",
		flexWrap: "wrap",

		"img": {
			height: "300px",
			cursor: "pointer",
		}

	},

	".square": {
		width: "300px",
		height: "300px",
	},

	".more_info_text": {
		textAlign: "center",
		width: "50%",
		fontSize: "1.2rem"
	},

	"@media (max-width: 780px)": {

		height: "auto",


		".title-content-home": {
			fontSize: "2.2rem",
			gap: "10px",

			"img":
			{
				width: "30px",
				height: "30px",
			},

		},

		".more_info_text": {
			width: "100%",
		},


	},


})
