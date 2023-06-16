import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import "/ANAIS.pdf"
import "/Antoine.pdf"
import "/Arthur.pdf"
import "/Corentin.pdf"
import "/Edouard.pdf"
import "/Quentin.pdf"
import "/Samir.pdf"
import "/Soren.pdf"
import "/Thibault.pdf"
import "/Youssef.pdf"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="${viteLogo}" alt="Vite Logo" width="120" />
    </a>

    <h1>Hello Vite!</h1>
    <a href="./ANAIS.pdf" target="_blank">ANAIS</a>
    <a href="./Antoine.pdf" target="_blank">Antoine</a>
    <a href="./Arthur.pdf" target="_blank">Arthur</a>
    <a href="./Corentin.pdf" target="_blank">Corentin</a>
    <a href="./Edouard.pdf" target="_blank">Edouard</a>
    <a href="./Quentin.pdf" target="_blank">Quentin</a>
    <a href="./Samir.pdf" target="_blank">Samir</a>
    <a href="./Soren.pdf" target="_blank">Soren</a>
    <a href="./Thibault.pdf" target="_blank">Thibault</a>
    <a href="./Youssef.pdf" target="_blank">Youssef</a>
    
  </div>
`

setupCounter(document.querySelector('#counter'))
