import React from 'react'

export const Chaild = ({ name, setname, addMessage}) => {

const sendMessage = () => {
    addMessage("Este es el mensaje del hijo");
}

const changeName = () => {
    setname("Nuevo Nombre Hijo");
}
return (
    <div>
      {name}
      <div>
        <button
          onClick={ sendMessage }
          >
          Enviar Mensaje
        </button>
        <button onClick={ changeName }>Cambiar Nombre</button>
      </div>
    </div>
  )
}

export default Chaild
