import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Myhead from './assets/Components/Header.jsx'
import AnnoucementBar from './assets/Components/Annoucement-bar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnnoucementBar/>
    <Myhead/>
  </React.StrictMode>,
)
