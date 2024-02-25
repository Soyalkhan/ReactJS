import { useEffect, useState } from "react";
import {createConnection} from '../assets/CreateConnection'

function Chatroom({roomId}){
const [serverUrl,setserverUrl] = useState('https://localhost:1234');

useEffect(()=>{
    const connection = createConnection(serverUrl,roomId)
    connection.connect();

    return ()=>{
        connection.disconnect();
    };
}),[serverUrl,roomId]

return(
    <>
    <label>
        server URL:{''}
        <input type="text" 
        value={serverUrl}
        disabled={true}
        onChange={e => setserverUrl(e.target.value)}
        /> 

    </label>

    <h1>Welcome to the {roomId} room!</h1>
    </>
)
}

export default function Chat() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return (
      <>
        <label>
          Choose the chat room:{' '}
          <select
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
          >
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>
        <button onClick={() => setShow(!show)}>
          {show ? 'Close chat' : 'Open chat'}
        </button>
        {show && <hr />}
        {show && <Chatroom roomId={roomId} />}
      </>
    );
  }