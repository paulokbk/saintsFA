import React from "react"
import { StyledHeader } from "./styles"
import { Link } from "react-router-dom"
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"

export default function Header() {
	return (
		<StyledHeader>

			<div className="headerContent">
				<img src="./assets/logo.svg" alt="logo" width={"300px"} />
				<nav className="links">
					<Link to="/">HOME</Link>
					<UncontrolledDropdown >
						<DropdownToggle className="dropdown-header">
							SOBRE NÓS
						</DropdownToggle>
						<DropdownMenu className="dropdown-body">
							<DropdownItem className="dropdown-text">
								<Link className="dropdown-link" to="/historia">NOSSA HISTORIA</Link>
							</DropdownItem>
							<DropdownItem className="dropdown-text">
								<Link className="dropdown-link" to="/equipe">EQUIPE</Link>
							</DropdownItem>
							<DropdownItem className="dropdown-text">
								<Link className="dropdown-link" to="/produtos">PRODUTOS</Link>
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<Link to="/agenda">AGENDA</Link>
					<Link to="/noticias">NOTICIAS</Link>
					<Link to="/contato">CONTATO</Link>
				</nav>
			</div>
		</StyledHeader>
	)
}
