import React from 'react'
import Bootsrap from './Bootsrap'

const Git = () => {
  return (
    <div className='container text-left'>
     
     <div className='row'>
     <div className='col-sm-5'>
      <img src="1612200918157.jpg" alt="My profile" />
      <h5>I am a Front-end web developer</h5>
    <p style={{fontSize:"14px"}}>I am able to buid website and web applicatins. <br />

       By using different technologies such as:<br />

       HTML, CSS, JS, Bootstrap, Figma and React.
    </p>
      </div>

      <div className='col-sm-7'>
        <h4 className='text-success text-center'>All about me.</h4>
      <p className='mt-3' style={{fontSize:"14px"}}>  
      I am a web developer.<br/>
      I focus on building website's using JavaScript language, 
      and its technologies like React. I like coding and I am very passionate about it. 
      Whenever I have free time I dance modern and old musics, watching videos mostly those talking about technology, and business.
      I am passionate about what I do and a big fun of delivering quality work and learning more skills.
    </p>
     <Bootsrap/>
      </div>
     </div>  
  </div>
  )
}

export default Git