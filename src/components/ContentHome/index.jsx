import React from "react"
import { StyledContentHome } from "./styles"
import CardHome from "../CardsHome"

export default function ContentHome(props) {

    return (
        <StyledContentHome>
            <div className="long-line" />
                <div className="title">
                    <img src={`assets/${props.icon}`} alt="football" />
                    <p>{props.title}</p>
                </div>
                <div className="cards">
                    {
                        props.images.map((item, index) => {
                            return (
                                props.square ?
                                    <img className="square" key={index} src={`assets/${item}`} alt="football" />
                                    :
                                    <img key={index} src={`assets/${item}`} alt="football" />

                            )
                        })
                    }
                </div>
                {
                    props.description === "" ? "" : <p className="more_info_text">{props.description}</p>
                }
                <button className="button-about">{props.button}</button>
        </StyledContentHome>
    )
}
