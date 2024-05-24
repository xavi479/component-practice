import logo from './logo.svg';
import './App.css';
import MyComponents from './components/MyComponents';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import Chaild from './components/Chaild';
import { useState } from 'react';
import { FourthComponent } from './components/FourthComponent' ;

function App() {

  const [name, setName] = useState("viviana");
  const  [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

  const medicalRecord = {
    height: "160",
    bloodGroup: "RhO+",
    allergies: "None"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
          <dir>
          <hr />
          <FourthComponent />
          <hr />
          </dir>
        </p>
        <h2>Mensaje del hijo</h2>
        <p> { message } </p>
        <Chaild name={name} setName={setName} addMessage={addMessage}/>

        <SecondComponent />
        <ThirdComponent 
          name="Oscar"
          lastName="López"
          card={medicalRecord}
        />
        <MyComponents />
      </header>
    </div>
  );
}

export default App;
