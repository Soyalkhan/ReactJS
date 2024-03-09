import './App.css'
import UserContextProvider from './assets/Context/UserContextProvider'
import Login from './assets/Component/Login'
import Profile from './assets/Component/Profile'

function App() {


  return (
    <UserContextProvider>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
