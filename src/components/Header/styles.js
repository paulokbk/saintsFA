import { styled } from "@stitches/react"

export const StyledHeader = styled("header", {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#000",
	paddingTop: "10px",

	".headerContent": {
		width: "90%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	"nav.links": {
		display: "flex",
		gap: 20,

		a: {
			color: "rgba(248, 204, 4, 1)",
			transition: "all 0.3s ease-out",
			textDecoration: "none",
			fontFamily: "Empera",
			fontWeight: "bold",
			fontSize: "22px",

			"&:hover": {
				color: "white"
			}
		}
	},

	"@media (max-width: 780px)": {

		".headerContent": {
			justifyContent: "center",
			flexDirection: "column",
			gap: 20,
			paddingBottom: "20px",
		},

		"nav.links" : {
			gap: 40,
			flexDirection: "column",
			alignItems: "center",
		}
	}



})
