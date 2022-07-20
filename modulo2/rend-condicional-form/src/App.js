import React from 'react'
import Login from './components/Login';
import PaginaInicial from './components/PaginaInicial';

class App extends React.Component {

  state = {
    paginaAtual: "login"
  }

  vaParaPaginaInicial = () => {
    this.setState({ paginaAtual: "paginaInicial" })
  }

  vaParaLogin = () => {
    this.setState({ paginaAtual: "login" })
  }

  renderizaTela = () => {
    if (this.state.paginaAtual === "paginaInicial") {
      return <PaginaInicial vaParaLogin={this.vaParaLogin} />
    } else if(this.state.paginaAtual === "login") {
      return <Login vaParaPaginaInicial={this.vaParaPaginaInicial} />
    }
  }

  render() {
    return (
      <main>
        {this.renderizaTela()}
      </main>
    )
  }
}

export default App;
