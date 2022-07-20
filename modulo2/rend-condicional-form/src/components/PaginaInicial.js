import React from "react";
import Mensagens from "./Mensagens";
import Posts from "./Posts";

export default class PaginaInicial extends React.Component {

    state = {
        conteudoAtual: "posts"
    }

    mostraPosts = () => {
        this.setState({ conteudoAtual: "posts" })
    }

    mostraMensagens = () => {
        this.setState({ conteudoAtual: "mensagens" })
    }

    renderizaConteudo = () => {
        switch (this.state.conteudoAtual) {
            case "posts":
                return <Posts />
            case "mensagens":
                return <Mensagens />
            default:
                return <h3>Seção não encontrada</h3>
        }
    }

    render() {
        return (
            <section>
                <h1>Essa é a Pagina Inicial</h1>
                
                <nav>
                    <button onClick={this.mostraPosts}>Posts</button>
                    <button onClick={this.mostraMensagens}>Mensagens</button>
                    <button onClick={this.props.vaParaLogin}>Deslogar</button>
                </nav>

                {this.renderizaConteudo()}
            </section>
        )
    }
}