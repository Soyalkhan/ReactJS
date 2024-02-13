import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function MyApp(){
  return(
    <h1>hello this my app function</h1>
  )
}

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  "Click here to visit google"
)
ReactDOM.createRoot(document.getElementById('root')).render(
<App/>
)
