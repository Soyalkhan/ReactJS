import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './assets/Layout.jsx'
import Home from './assets/Components/Home/Home.jsx'
import AboutUs from './assets/Components/AboutUS/About.jsx'
import Category from './assets/Components/Category/Category.jsx'
import Collection from './assets/Components/Collections/Collection.jsx'
import Contact from './assets/Components/ContactUs/Contact.jsx'

import { createBrowserRouter } from 'react-router-dom'
import User from './assets/Components/User/User.jsx'
import Github from './assets/Components/Github/Github.jsx'
//method 1st to creating routing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <AboutUs />
//       },
//       {
//         path: "Category",
//         element: <Category />
//       },
//       {
//         path: "Collection",
//         element: <Collection />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       }
     
//     ]
//   }
// ]);

//method 2nd  to creating routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='About' element={<AboutUs/>}/>
    <Route path='Category' element={<Category/>}/>
    <Route path='Collection' element={<Collection/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route path='GitHub' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
