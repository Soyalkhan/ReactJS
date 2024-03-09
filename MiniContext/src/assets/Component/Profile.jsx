import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

    if (!user) return <div>(if username is empty)<br/>please login</div>

    return(
    <>
    <p>here we are getting username from the global context file from the ContxtProvider  </p>
   <h5>welcome {user.username}</h5> 
    </>
    ) 

}

export default Profile