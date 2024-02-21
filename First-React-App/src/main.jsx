import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Myhead from './assets/Components/Header.jsx'
import AnnoucementBar from './assets/Components/Annoucement-Bar.jsx'
import Banner from './assets/Components/Banner.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnnoucementBar/>
    <Myhead/>
    <Banner/>
  </React.StrictMode>,
)
