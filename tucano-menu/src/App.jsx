import React from 'react';
import menu from './data/Data.js'
import  './Layout/Menu.css'
import { Header } from './Componentes/Header.jsx';
import coffee from './img/coffee.png'
import salad from './img/salad.png'


function Teste () {
  return(
    
  <div className={"card-container"}>

    <Header/>
    {menu.map((item, index) => (
      <div key={index} className={"card-item"}>
        <h2>{item.name}</h2>
        <img   src={coffee} alt="" width={50}/>
        <p>{item.description}</p>
        <h3>{item.price}</h3>

      </div>
    )
     
    )}
  </div>
  )
  

}

export default Teste;
