import React from 'react'

const Jsfunction = () => {
    let ames = ['Joni','Quintus','Aime'];
    document.getElementById('try').innerHTML = 'Somehow good!'
  return (
    <div>
        <h1>Learning how write Js functions.</h1> 
        <p id='try'>Ok</p>
        <nav><li>{ames}</li></nav>
     </div>
  )
}

export default Jsfunction