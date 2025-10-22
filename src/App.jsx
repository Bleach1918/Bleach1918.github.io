import { useState } from 'react'
import AsciiTyping from './typing'
import art1 from './assets/ascii1.txt?raw'
import art2 from './assets/ascii2.txt?raw'
import video from './assets/video.mov'
import './App.css'

function App() {
  return (
    <>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={video} type="video/mp4"/>
      </video>

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

      <div className='container2'>

        <AsciiTyping arts={[art1, art2]}/>

        <div className="main2">

          <div className="card2">

            <h1 className="about">About me</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Cras lorem tellus, varius et varius sit amet, convallis id lacus. Integer eget ex viverra, pulvinar elit nec, tempor justo. Mauris blandit lorem vel elit interdum, nec rhoncus nisi maximus. Sed at mauris sit amet urna consectetur maximus viverra ut urna. Nunc leo diam, faucibus a egestas eget, congue in ipsum. Cras tincidunt laoreet dui. Fusce faucibus auctor ipsum. Fusce auctor tellus tortor, et volutpat lorem fringilla quis. Quisque nibh ex, pharetra ac rutrum in, maximus et sem.</p>

            <p>Proin finibus tincidunt ipsum ut rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur semper congue facilisis. Cras molestie porta sapien, vel sollicitudin leo ultrices quis. Nunc rhoncus neque eu tortor vulputate, non volutpat diam dapibus. Cras commodo elit ut condimentum blandit. Nullam non bibendum felis. Maecenas rhoncus tristique elementum. Curabitur condimentum elementum dui in tincidunt.</p>

            <p>Proin maximus lectus a dui accumsan ultrices. Curabitur fringilla fringilla tincidunt. Proin rutrum, libero non mollis maximus, orci libero elementum sapien, et mollis libero orci blandit massa. Vestibulum nisi ante, pharetra hendrerit pulvinar quis, luctus ut nisl. Aenean sapien quam, tempor et vestibulum sed, efficitur eu elit. Fusce suscipit in ipsum at aliquet. Ut elementum ex at velit auctor, ut pharetra erat sollicitudin. Nulla tortor sapien, rutrum eget ipsum a, euismod imperdiet magna. Maecenas semper urna quis tellus iaculis, non pharetra mauris ultrices. Cras nec quam in lectus mattis viverra. Curabitur nibh orci, commodo eu ex eget, vehicula commodo risus. Ut ultrices magna vitae molestie fringilla. Sed sed odio semper, pretium quam a, malesuada felis. Cras molestie est non volutpat semper.</p>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
