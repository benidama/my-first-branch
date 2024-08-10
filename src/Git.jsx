import React from 'react'
import Bootsrap from './Bootsrap'

const Git = () => {
  return (
    <div className='container text-center'>
     
     <div className='row'>
     <div className='col-sm-5'>
      <img src="1612200918157.jpg" alt="My profile" />
      <h5>We are learning git and githup</h5>
    <p>Git is a version control system. <br />

       Git helps you keep track of code changes. <br />

       Git is used to collaborate on code.
    </p>
      </div>

      <div className='col-sm-7'>
      <strong className='m-3 p-3'>
      All about me. <br/> 

      1. Go to any branch (git checkout its name)<br/>
      2. To create a new branch(got checkout -b  its name)<br/>
      3. Renaming branch (git branch -m new name)<br/>
      4. Deleting branch ( first go to main branch by git checkout main then git pull in order to save all changes. Then delete the git branch -D name of branch you want to delete)
     </strong>
     <Bootsrap/>
      </div>
     </div>
    
      
  </div>
  )
}

export default Git