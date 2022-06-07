class App extends React.Component {
    state = {
      etapa: 1,
    }
  
    renderizaEtapa = () => {
      switch (this.state.evento) {
        case 1: 
          return <Etapa1 />;
        case 2: 
          return <Etapa2 />;
      // de acordo com o que já foi feito, 
      // crie o case dos componentes etapa 3 e Final
      }
    }
  