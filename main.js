import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import "./pdf/ANAIS.pdf"
import "./pdf/Antoine.pdf"
import "./pdf/Arthur.pdf"
import "./pdf/Corentin.pdf"
import "./pdf/Edouard.pdf"
import "./pdf/Quentin.pdf"
import "./pdf/Samir.pdf"
import "./pdf/Soren.pdf"
import "./pdf/Thibault.pdf"
import "./pdf/Youssef.pdf"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="./pdf/ANAIS.pdf">a</a>
  </div>
`

setupCounter(document.querySelector('#counter'))
