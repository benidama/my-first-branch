import React from 'react'
import logo from './logo.svg';
import Git from './Git'
import Bootsrap from './Bootsrap'

const Home = () => {
  return (
    <div>
      <h1 className='container'>Here, you will everything you need to know about React JS</h1>
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
        <Git/>
        <Bootsrap/>
    </div>
  )
}

export default Home