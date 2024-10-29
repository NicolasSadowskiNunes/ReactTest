import hand from './waving-hand.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hand} className="App-logo" alt="logo" />
        <p>
          Olá mundo, o que é esse link abaixo?
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          target="_blank"
          rel="noopener noreferrer"
        >
          clique para ganhar um prêmio
        </a>
      </header>
    </div>
  );
}

export default App;
