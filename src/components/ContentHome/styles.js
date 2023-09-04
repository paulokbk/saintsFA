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

	".title": {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "20px",
		color: "black",
		fontSize: "3rem",
		fontFamily: "Empera",

		"img":
		{
			width: "35px",
			height: "35px",
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


		".title": {
			fontSize: "2.1rem",

			"img":
			{
				width: "30px",
				height: "30px",
			},
		},


	},


})
