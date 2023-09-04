import { styled } from "@stitches/react"

export const StyledCardHome = styled("div", {

	width: "15vw",
	height: "15vw",
	backgroundImage: "url('/assets/post-1.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",


	"@media (max-width: 780px)": {
		width: "280px",
		height: "280px",
	},
	
})
