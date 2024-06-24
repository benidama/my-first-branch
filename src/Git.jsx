import React from 'react'

const Git = () => {
  return (
    <div className='container text-center'>
    <h1>We are learning git and githup</h1>
    <p>Git is a version control system. <br />

       Git helps you keep track of code changes. <br />

       Git is used to collaborate on code.
    </p>
    <pre>
      <strong>
      All about GitHub & git 

1. To go to any branch (git checkout its name)
2. To create a new branch(got checkout -b  its name)
3. Renaming branch (git branch -m new name)
4. Deleting branch ( first go to main branch by git checkout main then git pull in order to save all changes. Then delete the git branch -D name of branch you want to delete)
</strong>
</pre>
    </div>
  )
}

export default Git