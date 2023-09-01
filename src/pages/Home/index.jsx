import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { StyledHome } from "./styles"
import Example from "../../components/Carrosel"

export default function Home() {
	return (
		<StyledHome>
			<Header />
			<Example />
			<Footer />
		</StyledHome>
	)
}
