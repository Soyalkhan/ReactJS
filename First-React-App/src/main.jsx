import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Layout from './assets/Layout.jsx'
import Home from './assets/Components/Home/Home.jsx'
import AboutUs from './assets/Components/AboutUS/About.jsx'
import Category from './assets/Components/Category/Category.jsx'
import Collection from './assets/Components/Collections/Collection.jsx'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "About",
        element: <AboutUs />
      },
      {
        path: "Category",
        element: <Category />
      },
      {
        path: "Collection",
        element: <Collection />
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
