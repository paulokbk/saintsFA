import { keyframes, styled } from "@stitches/react"

const Animation = keyframes({
	"0%": { backgroundPositionX: "-100%" },
	"100%": { backgroundPositionX: "100%" }
})

export const StyledFooter = styled("footer", {
	position: "relative",
	bottom: 0,
	left: 0,
	width: "100vw",
	height: "fit-content",
	padding: "20px 0",
	backgroundColor: "#000",
	color: "#fff",
	fontSize: "0.8rem",
	textAlign: "center",


	"& #copy": {
		textAlign: "center",

		a: {
			position: "relative",
			zIndex: 1,
			display: "inline-block",
			width: "fit-content",
			color: "#5aeb73",
			transition: "all 300ms ease-out",

			"&:after": {
				content: "",
				position: "absolute",
				zIndex: -1,
				left: 0,
				bottom: "-1px",
				width: "100%",
				height: "1px",
				background: "linear-gradient(90deg, #5aeb73,#0000, #5aeb73)",
				backgroundSize: "200% 100%",
				animation: `${Animation} 1s ease-in-out infinite reverse`
			},

			"&:before": {
				content: "",
				position: "absolute",
				zIndex: -1,
				left: 0,
				bottom: "-1px",
				width: "100%",
				height: "1px",
				backgroundColor: "#5aeb73",
				opacity: 0,
				transition: "all 300ms ease-out"
			},

			"&:hover": {
				color: "white",
				fontWeight: "bold",
				padding: "0 5px",

				"&:after": {
					animationPlayState: "paused"
				},
				"&:before": {
					bottom: "0",
					opacity: 1,
					height: "100%"
				}
			}
		}
	},

	".line": {
		width: "400px",
		height: "2px",
		backgroundColor: "rgba(255, 255, 255, 0.19)",
		margin: "0 auto",
		marginBottom: "20px",
	},
	".long_line": {
		width: "100%",
		height: "1px",
		backgroundColor: "rgba(255, 255, 255, 0.19)",
		margin: "10px",
	},
	".modalidades": {
		display: "flex",
		gap: "40px",
		alignItems: "center",
		justifyContent: "center",
		margin: "0 auto",
		width: "100%",
		marginBottom: "20px",
		flexWrap: "wrap",
	},

	".categories": {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "5px",
	},

	".category_icon": {
		width: "18px",
		height: "18px",
	},

	".category_name": {
		fontSize: "18px",
		fontWeight: "bold",
		color: "rgba(255, 255, 255, 0.7)",
	},

	".footer_inferior": {
		color: "rgba(255, 255, 255, 0.5)",
		fontSize: "14px",
		fontWeight: "bold",
		margin: "0 auto",
	},

})
