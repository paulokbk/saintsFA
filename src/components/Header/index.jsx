import React from "react"
import { StyledHeader } from "./styles"

export default function Header() {
	return (
		<StyledHeader>
			
			<div className="headerContent">
				<img src="./assets/logo.svg" alt="logo" width={"300px"}/>
				<nav className="links">
					<a href="/">HOME</a>
					<a href="/sobre">SOBRE NOS</a>
					<a href="/agenda">AGENDA</a>
					<a href="/noticias">NOTICIAS</a>
					<a href="/contato">CONTATO</a>
				</nav>
			</div>
		</StyledHeader>
	)
}
