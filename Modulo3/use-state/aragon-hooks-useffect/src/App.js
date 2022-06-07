import { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState("")
  const [lista, setLista] = useState([])

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  const addTexto = () => {
    const novaLista = [...lista, inputValue]
    setLista(novaLista)
    setInputValue("")
  }

  const renderizarLista = lista.map(item => {
    return <ul>
      <li>{item}</li>
    </ul>
  })


  return (
    <div className="App">
      <label htmlFor="texto">Texto:</label>
      <input 
        type="text" 
        id="texto" 
        value={inputValue}
        onChange={onChangeInput}
        />
      <button onClick={addTexto}>Adicionar</button>

      {renderizarLista}
     

    </div>
  );
}

export default App;


//Exemplo contador

// function App() {

//   const [contador, setContador] = useState(0)
 
//   const incrementar = () => {
//     setContador(contador + 1)
//   }


//   return (
//     <div className="App">
//     <h1>{contador}</h1>
//     <button onClick={incrementar}>incrementar</button>
//     </div>
//   );
// }

// export default App;
