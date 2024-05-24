import React from 'react'
import ProntTypes from 'prop-types'

export const ThirdComponent = ({name, lastName,card}) => {

  return (
    <div>
      <h2>Comunicación entre componentes</h2>
      <ul>
        <li>{ name }</li>
        <li>{ lastName }</li>
        <li>{ card.height }</li>

      </ul>
    </div>
  )
}

ThirdComponent.prontTypes = {
  name: ProntTypes.string,
  lastName: ProntTypes.string,
  card: ProntTypes.object
}
export default ThirdComponent
