import React from 'react'
import './fashion.css'
function fashion(props) {
  return (
    <div id= "card">
        <img src ={props.image} alt = "" height={100} width={100}></img>
        <h4>Title:{props.title}</h4>
        <h4>Price{props.price}</h4>
    </div>
  )
}

export default fashion