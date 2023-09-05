import { styled } from "@stitches/react"


export const StyledHeader = styled("header", {
	top: 0,
	left: 0,
	right: 0,
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#000",
	padding: "20px 0",


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
			display: "flex",
			alignItems: "center",
			justifyContent: "center",

			"&:hover": {
				color: "white"
			}
		}
	},

	".dropdown-header":{
		color: "rgba(248, 204, 4, 1)",
		fontFamily: "Empera",
		fontWeight: "bold",
		fontSize: "22px",
		cursor: "pointer",
		backgroundColor: "transparent",
		border: "none",
		transition: "all 0.3s ease-out",
		padding: "0 !important",
		display: "flex",


		"&:hover": {
			color: "white",
			backgroundColor: "transparent",
			
		},	
		
	},

	".dropdown-text":{
		borderBottom: "2px solid #000",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "50px",


		"&:hover": {
			backgroundColor: "#000 !important",
			color: "#fff !important",
		},
	},


	".dropdown-link":{
		width: "100%",
		height: "100%",
		textAlign: "center",
		color: "#000 !important",

		"&:hover": {
			color: "#fff !important",
		},

	},

	".dropdown-body":{
		borderRadius: "0",
		border: "2px solid #000",
		padding: "0 !important",
		
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
		},

	}



})
