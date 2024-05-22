import React from 'react'

export const ThirdComponent = (props) => {

    console.log(props)

  return (
    <div>
        <h2>Comunicación entre Componentes</h2>
        <ul>
            <li>{ props.name }</li>
            <li>{ props.lastName }</li>
            <li>{ props.card.allergies }</li>
        </ul>
    </div>
  )
}

// Hooks - eventos