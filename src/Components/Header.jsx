import React from 'react';
import logo from "./Imagens/globo.com.png";
import menu from "./Imagens/menu-button.svg"
import people from "./Imagens/pessoua.png"
import glass1 from "./Imagens/Vectorlupa-1.png"
import glass2 from "./Imagens/Vectorlupa.png"
import "./Header.css"

import Links from "./links"


export default (props) => {
    return (
        <div>
            <header>
                <h1>
                    <a href="https://www.globo.com" className="globograd">
                        <img src={logo} alt="Logo da Globo" />
                    </a>
                </h1>
                <div className='info'>
                    <div className="menu-assine">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="menubuttom">
                            <img src={menu} alt="menubutton" />
                        </a>
                        <a href="https://www.instagram.com/jmatheus_study/" className="menutext">
                            Menu
                        </a>
                        <div> | </div>
                        <a href="https://www.clonacartao.com/" className="assinetext">
                            Assine
                        </a>
                    </div>
                    <div className="ContaGlobo-buscar">
                        <a href="https://www.instagram.com/jmatheus_study/" className="contaglobo">
                            Conta Globo
                        </a>
                        <a href="https://www.instagram.com/jmatheus_study/" className="people">
                            <img src={people} />
                        </a>
                        <div> | </div>
                        <a href="https://www.instagram.com/jmatheus_study/" className='buscartext'>
                            Buscar
                        </a>
                        <a href="https://www.instagram.com/jmatheus_study/" className='glass'>
                            <img src={glass1} />
                            <img src={glass2} />
                        </a>
                    </div>
                </div>
            </header>
            <div className="line_hor"></div>
            <nav>
                <div className="navBar">
                    <Links color="#C4170C" text="g1"></Links>
                    <Links color="#1E4C9A" text="o Globo"></Links>
                    <Links color="#006767" text="valor"></Links>
                    <Links color="#06AA48" text="ge"></Links>
                    <Links color="#FF7400" text="cartola"></Links>
                    <Links color="#FB0234" text="globoplay"></Links>
                    <Links color="#FF6700" text="gshow"></Links>
                    <Links color="#333333" text="quem"></Links>
                    <Links color="#A5147D" text="receita"></Links>
                    <Links color="#FF7400" text="cartola express"></Links>
                </div>
            </nav>
            <div className="line_hor"></div>
        </div>

    )
}