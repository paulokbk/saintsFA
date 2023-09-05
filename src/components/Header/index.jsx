import React from "react"
import { StyledHeader } from "./styles"
import { Link } from "react-router-dom"

export default function Header() {
	return (
		<StyledHeader>
			
			<div className="headerContent">
				<img src="./assets/logo.svg" alt="logo" width={"300px"}/>
				<nav className="links">
					<Link to="/">HOME</Link>
					<Link to="/sobre">SOBRE</Link>
					<Link to="/agenda">AGENDA</Link>
					<Link to="/noticias">NOTICIAS</Link>
					<Link to="/contato">CONTATO</Link>
				</nav>
			</div>
		</StyledHeader>
	)
}
