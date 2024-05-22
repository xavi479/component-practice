import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <SecondComponent />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
