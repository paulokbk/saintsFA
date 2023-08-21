import React from "react"
import { StyledFooter } from "./styles"

export default function Footer() {
	return (
		<StyledFooter>
			<div className="footer_superior">
				<div className="logo">
					<h1>Logo</h1>
				</div>
				<div className="modalidades">
					<div>
						fullpad masculino
					</div>
					<div>
						flag feminino
					</div>
					<div>
						chearleader
					</div>
				</div>
				<div className="mais_info">
					<div className="localizaçao">
						goiania - go
					</div>
					<div className="instagram">
						@saintsfa
					</div>
				</div>
			</div>
			<div className="footer_inferior">

			</div>
		</StyledFooter>
	)
}
