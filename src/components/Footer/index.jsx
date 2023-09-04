import React from "react"
import { StyledFooter } from "./styles"

export default function Footer() {
	return (
		<StyledFooter>
			<div className="footer_superior">
				<div className="logo">
					<img src="./assets/logo.svg" alt="logo" />
				</div>
				<div className="line"></div>
				<div className="modalidades">
					<div className="categories">
						<img className="category_icon" src="./assets/football.svg" alt="football" />
						<span className="category_name">Fullpad Masculino</span>
					</div>
					<div className="categories">
						<img className="category_icon" src="./assets/flag.svg" alt="football" />
						<span className="category_name">Flag Masculino</span>
					</div>
					<div className="categories">
						<img className="category_icon" src="./assets/ballet_dancer.png" alt="football" />
						<span className="category_name">Cheerleaders</span>
					</div>
				</div>
				<div className="mais_info modalidades">
					<div className="categories">
						<img className="category_icon" src="./assets/map_pin.svg" alt="football" />
						<span className="category_name">Goiânia - GO</span>
					</div>
					<div className="categories">
						<img className="category_icon" src="./assets/instagram.svg" alt="football" />
						<span className="category_name">@saintsfa</span>
					</div>
				</div>
			</div>
			<div className="long_line"></div>
			<div className="footer_inferior">
				© Goiânia Saints Futebol Americano - Todos os direitos reservados.
			</div>
		</StyledFooter>
	)
}
