import { useContext, useRef } from "react"
import useAuth from "../../hooks/useAuth"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"


const LoginForm = () => {
  const api = "https://attractive-three-hippopotamus.glitch.me/api/Users/login"
  const { loginUser } = useAuth()
  const { login } = useContext(AuthContext)

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await loginUser(api, {
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
    login(response)
  }

  return (
    <div className='gap-8 centered-col'>
        <h1 className="text-4xl capitalize">login page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col bg-[whitesmoke] p-8 rounded-lg text-deep space-y-4">
            <label htmlFor="email" className="capitalize" >email address</label>
            <input ref={emailRef} id='email' type="text" className="form-input" placeholder='email@domain.com'/>
            <label htmlFor="password" className="capitalize">password</label>
            <input ref={passwordRef} id='password' type="password" className="form-input" placeholder='enter password'/>
            <button className="bg-gradient-to-br from-blue-500 to-blue-900 text-[whitesmoke] px-4 py-1 rounded-xl text-lg hover:cursor-pointer" type='submit'>Submit</button>
        </form>
        <Link className="text-2xl hover:cursor-pointer" to='/signup' >Register</Link>
    </div>
  )
}

export default LoginForm