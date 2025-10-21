import { useState } from 'react'
import AsciiTyping from './typing'
import art1 from './assets/ascii1.txt?raw'
import art2 from './assets/ascii2.txt?raw'
import './App.css'

function App() {
  return (
    <>
      <AsciiTyping arts={[art1, art2]}/>

      <div className="container">

        <div className="main">

          <div className="card">

            <h1 className="name">kenzo</h1>

          </div>

          <div className="socials">
            <a className="socialText" href="https://github.com/Bleach1918">github</a>
            <a className="socialText" href="https://www.linkedin.com/in/kenzoinsolite">linkedin</a>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
