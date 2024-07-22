import React from 'react'
import logo from './logo.svg';
import Floowus from './Floowus'

const Contact = () => {
  return (
    <div>
        <h1 className='container'> Here, you can get our Contacts easily.</h1>
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
        <Floowus/>
    </div>
  )
}

export default Contact