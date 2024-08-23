import React from 'react'

function Listkey(props) {
  let numbers=props.numbers;
  const listitems=numbers.map((numbers)=>
      <li key={numbers.toString()}>
        {numbers}
      </li>
  )
  return (
    <div>
      <h1>Numbers :{numbers}</h1>
      <ul>
        {listitems}
      </ul>
    </div>
  )
}

export default Listkey