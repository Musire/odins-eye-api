import { useContext } from 'react'
import { AuthContext } from "../../context/authContext"
import useAuth from '../../hooks/useAuth'

const UserCard = ({ user }) => {
  const api = 'https://attractive-three-hippopotamus.glitch.me/api/Users/status'
  const {logout} = useContext(AuthContext)

  const { updateStatus } = useAuth()

  const handleIncall = async () => {
    await updateStatus(api, {userId: user.id, isActive: 'inCall'})
  }

  const handleOnline = async () => {
    await updateStatus(api, {userId: user.id, isActive: 'online'})
  }
  
  const handleLunch = async () => {
    await updateStatus(api, {userId: user.id, isActive: 'lunch'})
  }
  
  const handleBreak = async () => {
    await updateStatus(api, {userId: user.id, isActive: 'break'})
  }

  const handleOffline = async () => {
    await updateStatus(api, {userId: user.id, isActive: 'offline'})
  }
 
  return (
    <div className="flex flex-col items-center gap-4 p-8 text-2xl text-center space-y-36 wrapper-container">
        <h1 className="text-4xl capitalize ">Welcome Back - {user.name}</h1>
        <span className='gap-4 centered'>
            <button className="form-button hover:bg-green-900" onClick={handleIncall}>In Call</button>
            <button className="form-button hover:bg-red-900" onClick={handleOnline}>Off Call</button>
            <button className="form-button hover:bg-blue-900" onClick={handleLunch}>Lunch</button>
            <button className="form-button hover:bg-blue-900" onClick={handleBreak}>Break</button>
            <button className="form-button hover:bg-gray-500" onClick={handleOffline}>offline</button>
        </span>
        <button className="w-40 form-button hover:bg-neutral-800" onClick={logout}>Logout</button>
    </div>
  )
}

export default UserCard