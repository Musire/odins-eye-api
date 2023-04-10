import { useContext, useEffect, useState } from "react"
import { UserCard, StateCard } from "../components/user"
import { AuthContext } from "../context/authContext"
import withAuth from "../HOC/withAuth"
import { Navigate } from "react-router-dom"
import io from 'socket.io-client'

const LandingPage = ({user}) => {
  const {authenticated} = useContext(AuthContext)
  const [ test, setTest ] = useState(['waiting'])

  useEffect(() => {
    // Create a new instance of the io function with the URL of your Socket.io server
    const socket = io('https://attractive-three-hippopotamus.glitch.me/');

    socket.on('activeUsers', (activeUsers) => {
      setTest(activeUsers)
    })
    
    // Cleanup function to disconnect the socket when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const userList = test ? test.map((item, index) => <StateCard  key={index} username={item.username} isActive={item.isActive} />) : null

  return (
    <>
    {authenticated ? 
    <div className="flex flex-row">
      <div className="flex flex-col items-center p-8 text-center side-panel">
        <h1 className="pb-4 mb-24 text-4xl border-b-2 border-b-smoke">Agent States</h1>
        {userList}
      </div>
      <div className="flex flex-col block-container">
            <UserCard user={user}/>
      </div>
    </div> : <Navigate to='/login' />}
    </>
    
  )
}

export default withAuth(LandingPage)