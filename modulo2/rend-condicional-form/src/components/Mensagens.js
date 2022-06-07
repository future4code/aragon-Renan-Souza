import React from "react";

export default class Mensagens extends React.Component {

    state = {
        mensagens: [
            "Mensagem 1",
            "Mensagem 2",
            "Mensagem 3"
        ]
    }

    render() {
        return (
            <section>
                <h3>Essa é a Mensagens</h3>
                {
                    this.state.mensagens.length > 0
                        ? <p>Você tem {this.state.mensagens.length} novas mensagens</p>
                        : <p>Você não tem novas mensagens</p>
                }

                {
                    this.state.mensagens.length
                        && this.state.mensagens.map((mensagem) => {
                            return <p>{mensagem}</p>
                        })
                }

            </section>
        )
    }
}