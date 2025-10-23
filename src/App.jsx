import { useState } from 'react'
import AsciiTyping from './components/Typing'
import video from './assets/short.mov'
import content from './data/content.json'
import art1 from './assets/ascii1.txt?raw'
import art2 from './assets/ascii2.txt?raw'
import './App.css'

function App() {
  const [lang, setLang] = useState('en')

  const t = content[lang]

  return (
    <>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={video} type="video/mp4"/>
      </video>

      <div className='language-select'>
        <select className="lang-dropdown" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">🇺🇸 en</option>
          <option value="pt">🇧🇷 pt</option>
        </select>
      </div>

      <div className="container">

        <div className="main">

          <div className="card">

            <h1 className="name">kenzo</h1>

            <h2>alea iacta est</h2>

          </div>

          <div className="socials">
            <a className="socialText" href="https://github.com/Bleach1918">github</a>
            <a className="socialText" href="https://www.linkedin.com/in/kenzoinsolite">linkedin</a>
          </div>

        </div>

      </div>

      <div className='container2'>

        <AsciiTyping arts={[art1, art2]}/>

        <div className="main2">

          <div className="card2">

            <h1 className="about">{t.about.title}</h1>

            <p>{t.about.text[0]}</p>
            <p>{t.about.text[1]}</p>
            <p>{t.about.text[2]}</p>

          </div>

        </div>

      </div>
    </>
  )
}

export default App