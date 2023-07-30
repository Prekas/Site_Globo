import React from "react"
import "./Notícias.css"

import silveirinha from "./Imagens/Silveirinha S2 de cabelo.jpg"
import surto from "./Imagens/Surto.jpeg"
import diario from "./Imagens/diario.png"
import minecraft from "./Imagens/Minecraft.jpeg"
import bortinho from "./Imagens/FATD.jpeg"
import broderagi from "./Imagens/O amor é lindo.jpeg"
import estatua from "./Imagens/Estátua.jpeg"
import crianca from "./Imagens/Criança.jpeg"
import turmas from "./Imagens/Turmas.jpeg"

export default props => {
    return(
        <div className="noticias">
            <div className="g1">
                <img src={silveirinha} width={200} height={100}></img>
                <h2>Cientista descobre a cura da calvice</h2>
                <ul className="list">
                    <li><div className="sub">"Para os ingredientes, usei as lágrimas dos membros da ITAJr", diz Silveirinha</div></li>
                </ul>
                <img src={surto} width={200} height={100}></img>
                <h2>Precoce não tankou o Bostil e foi de câncer pra caga-pau</h2>
                <ul className="list">
                    <li><div className="sub">Quase pegou 2a época no JJ</div></li>
                    <li><div className="sub">Será que vai conseguir comp?</div></li>
                </ul>
                <img src={diario} width={200} height={100}></img>
                <h2>Usuário anônimo cria perfil de desabafo no Instagram</h2>
                <ul className="list">
                    <li><div className="sub">O cara tá depressivo kkkkkkkkk</div></li>
                    <li><div className="sub">Perfil "anônimo", porém que todos sabem quem é</div></li>
                </ul>
            </div>
            <div className="esportes">
                <img src={minecraft} width={200} height={100}></img>
                <h2>Campeonato de Minecraft na sala de MEC</h2>
                <ul className="list">
                    <li><div className="sub">Quem encontrava obsidian primeiro, ganhava</div></li>
                    <li><div className="sub">Quem perdia, ganhava FATD</div></li>
                </ul>
                <img src={bortinho} width={200} height={100}></img>
                <h2>27 caga-pau?</h2>
                <ul className="list">
                    <li><div className="sub">27 após desafiar o sistema, teve q ir pro rancho obrigatório todo dia às 6:50</div></li>
                </ul>
                <img src={crianca} width={200} height={100}></img>
                <h2>Criança é jovem prodígio no LOL</h2>
                <ul className="list">
                    <li><div className="sub">Cara é brabo</div></li>
                    <li><div className="sub">N sei o q escrever aq</div></li>
                </ul>
            </div>
            <div className="gshow">
                <img src={broderagi} width={200} height={100}></img>
                <h2>Como o Dormitório Lacaz Neto pode gerar broderagem</h2>
                <ul className="list">
                    <li><div className="sub">Militão e Maju foram flagrados trocando carícias no Dormitório</div></li>
                </ul>
                <img src={estatua} width={200} height={100}></img>
                <h2>É assim que vou ficar depois que terminar o treinamento da ITAJr</h2>
                <ul className="list">
                    <li><div className="sub">Sugou</div></li>
                    <li><div className="sub">Vou ser demitido da JR aaaaaaaa</div></li>
                </ul>
                <img src={turmas} width={200} height={100}></img>
                <h2>N dá nem pra ver a foto kkkkkkkkkk</h2>
                <ul className="list">
                    <li><div className="sub">Foco de um espelho plano</div></li>
                    <li><div className="sub">Quero uma namorada</div></li>
                </ul>
            </div>
        </div>
    )
}