import logo from './logo.svg';
import './App.css';
import Coneccion from './components/coneccion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Coneccion></Coneccion>
      </header>
    </div>
  );
}

export default App;
