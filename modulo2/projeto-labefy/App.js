import React from 'react;'
import logo from './logo.svg';
import './/App.css';

function App() {
    return (
        <div calssName="App">
            <button> <a href="http://localhost:8888">logar com spotufy</a></button>
        </div>
    );
}

function App() {
    return (
        <div calssName="App">
            <Headers calssName= "App-header">
                <imag src={logo}calssName="App-logo" alt="loho" />
                <p>
                edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                calssName="App-link"
                href="htpps://reactjs.org"     
                target= "black"
                rel= "noopener noreferrer"   
                >
                    Learn React
                    </a>
                    </Headers>
        </div>
    );
}

export default App; 

fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${userAccessToken}`
  }
})
.then(response => response.json())
.then(({beats}) => {
  beats.forEach((beat, index) => {
    console.log(`Beat ${index} starts at ${beat.start}`);
  })
})
