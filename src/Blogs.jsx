import React from 'react'
import logo from './logo.svg';
import Jsfunction from './Jsfunction'

const Blogs = () => {
  return (
    <div>
        <h1 className='container'> This section of Blogs helps us to get supports </h1>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Jsfunction/>
    </div>
  )
}

export default Blogs