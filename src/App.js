import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://galeart.github.io/GaleArtWeb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Huec
        </a>
        <div class="scene">
      	  <div class="space">
      		  <span></span><span></span><span></span>
      		  <div class="comet"><div class="comet-inner"></div></div>
      	  </div>
        </div>
      </header>
    </div>
  );
}

export default App;
