import { styled } from "@stitches/react"

export const StyledHome = styled("div", {
	width: "100vw",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	color: "#fff",

	"main": {
		maxWidth: "80vw",
		width: "100%",
	},

	".home_image": {
		width: "100vw",
		height: "90vh",
		backgroundImage: "url('/assets/image-1.png')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		alignItems: "flex-end",
		boxShadow: " inset -4px 6px 271px 129px rgba(0,0,0,0.75)",

		"h1": {
			marginBottom: "20px",
		},
		"p": {
			fontSize: "1.3rem",
		},
	},

	".container": {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",

		"img": {
			width: "100vw",
		},
	},

	".sobre": {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "85vh",
		gap: "2rem",
	},

	".content_text": {
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		flexDirection: "column",
		color: "#000000",
		"h1": {
			marginBottom: "10px",
		},
		"p": {
			fontSize: "1.3rem",
		},
	},

	".content_image": {
		width: "50%",
		padding: "50px",
	},

	".button-about": {
		width: "30%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		backgroundColor: "#000",
		border: "none",
		borderRadius: "5px",
		fontFamily: "Empera",
		fontSize: "1.2rem",
		padding: "10px",
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",
		boxSizing: "border-box",
		border: "1px solid #fff",
		marginTop: "20px",

		"&:hover": {
			backgroundColor: "#fff",
			color: "#000",
			border: "1px solid #000",
		}
	},


	"@media (max-width: 780px)": {

		".sobre": {
			flexDirection: "column",
			gap: "0",
			height: "auto",
		},
		".home_image": {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			height: "auto",
		},
		".button-about": {
			width: "100%",
		},
	}

})
