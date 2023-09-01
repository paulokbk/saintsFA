import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { StyledHome } from "./styles"

export default function Home() {
	return (
		<StyledHome>
			<Header />
			<div className="home_image">
				<div className="content_image">
					<h1 className="text_empera">SAINTS FUTEBOL AMERICANO</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad labore vel nobis consequatur fugiat similique, repudiandae quis eligendi qui laborum quisquam placeat perferendis explicabo asperiores quasi! Dolorum harum quidem corrupti.</p>
				</div>
			</div>
			<main>

				<div className="sobre">
					<div className="content_text">
						<h1 className="text_empera">O SAINTS</h1>
						<p>
							Breve descrição sobre o time, de onde é, existe desde quando, resumão da história para apresentar o time. Não prolongar demais, pois os detalhes estarão na página Nossa História, que poderá ser acessada clicando no botão abaixo, ou pelo menu no header. Etc etc etc etc.

							Lorem ipsum amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Saiba mais sobre nossa tragetória:
						</p>
						<button className="button-about">Nossa História</button>
					</div>
					<div className="content_image_sobre">
						<img src="assets/bandeira.png" alt="runner" />
					</div>
				</div>

			</main>
			<Footer />
		</StyledHome>
	)
}
