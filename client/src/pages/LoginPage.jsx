import { useContext } from "react"
import { LoginForm } from "../components/login"
import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom"

const LoginPage = () => {
  const { authenticated } = useContext(AuthContext)

  return (
    <>
      {!authenticated ? 
      <div className='page-container centered bg-gradient-to-br from-blue-500 to-blue-900'>
          <LoginForm />
      </div> : <Navigate to='/' /> }
         
    </>

  )
}

export default LoginPage