import React from 'react'

const Bootsrap = () => {
  return (
    <div className='bg-secondary text-white container'>
  
   <p style={{fontSize:"14px"}}>If you have any question or suggestion text me here,
     I always appreciate your support!
  </p>
  
  <div>
  <form action="/action_page.php">

    <div className="form-group">
      <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email"/>
    </div> <br/>

    <div className="form-group">
      <textarea type="message" className="form-control" id="sms" placeholder="Enter message" name="pwd"/>
    </div> 

    <button type="submit" className="btn btn-default btn-primary m-3">Submit</button>
  </form>
  </div>
  
  
</div>
  )
}

export default Bootsrap