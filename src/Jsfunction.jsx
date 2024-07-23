import React from 'react'
 
const Fun = () =>{
  const a = 7;
  const b = 5;
  return (
    <>
      {/* <h3>C'est ne pas le normal</h3> */}
      <b> {a*b}</b>
    </>

  );
}

const Jsfunction = () => {
    let ames = ['Joni','Quintus','Aime'];
    const arr = ames.filter((ar) => ar.length > 4);

  return (
    <div className='container'>
        <h3>Learning how write Js functions.</h3> 
        
        <p>{ames[0]} is a good person in all sides. <br/>
         {ames[1]} is the best one in school.<br/>
          {ames[2]} has biggest number of clients in our company.
        </p>
          <h5>{arr} has {<Fun />} years old.</h5> 
     </div>
  );
}


export default Jsfunction