import React from 'react'

export const FourthComponent = () => {

  const handleClicked = (e) => {
    alert("Has hecho click al botón!!");
  }

  const handleDoubleClicked = (e) => {
    alert("Has hecho doble click al botón");
  }

  const handleMouseEnter = (e) => {
    console.log("Has entrado a mi caja con el Mouse!! ")
  }

  const handleMouseLeave = (e) => {
    console.log("Has salido de mi caja!! ")
  }

  return (
    <div>
        <h2>Eventos en React</h2>
        {/* Evento Click */}
        <div>
          <button onClick={ () => {
              console.log("Hola, soy un evento Click!!");
          } }>Haz Click!!</button>
        </div>
        <div>
          <button onClick={ handleClicked }>Aquí también haz Click!!</button>
        </div>

        {/* Evento Doble Click */}
        <div>
          <button onDoubleClick={ handleDoubleClicked }>Haz doble click!!</button>
        </div>

        {/* Evento Mouse Enter y Mouse Leave */}
        <hr />
        <div id="box"
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <p>Pasa el Mouse por encima!!!</p>
        </div>
        {/* Evento Focus y Blur */}

    </div>
  )
}
