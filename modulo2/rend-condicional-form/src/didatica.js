import React from 'react'

class App extends React.Component {
  render() {

    let estaLogado = 0

    // if (estaLogado) {
    //   console.log("Pode ir para o site")
    // } else {
    //   console.log("Vá fazer seu login")
    // }

    // Ternário
    // estaLogado
    //   ? console.log("Pode ir para o site")
    //   : console.log("Vá fazer seu login")

    // Curto-circuito com E (&&)
    estaLogado && console.log("Pode ir para o site")
    !estaLogado && console.log("Vá fazer seu login")

    // Curto-circuito com OU (||)
    estaLogado || console.log("Vá fazer seu login")
    !estaLogado || console.log("Pode ir para o site")

    return (
      <main>
        <p>Aula de Renderização Condicional</p>
      </main>
    )
  }
}

export default App;
