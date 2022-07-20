import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <section>
                <h1>Essa é a Login</h1>
                <button onClick={this.props.vaParaPaginaInicial}>Logar</button>
            </section>
        )
    }
}