import { useRef } from "react"
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom"

const SignupForm = () => {
  const api = "https://attractive-three-hippopotamus.glitch.me/api/Users/register"
  const {createUser} = useAuth()
  
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordTwoRef = useRef();
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await createUser(api, {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: passwordTwoRef.current.value
    })
    console.log(response.data)
  }

  return (
    <div className='gap-8 centered-col'>
        <h1 className="text-4xl capitalize">signup page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col bg-[whitesmoke] p-8 rounded-lg text-deep space-y-4">
            <label htmlFor="username" className="capitalize" >username</label>
            <input ref={usernameRef} id='username' type="text" className="form-input" placeholder='@thugMeister'/>
            <label htmlFor="email" className="capitalize" >email address</label>
            <input ref={emailRef} id='email' type="text" className="form-input" placeholder='email@domain.com'/>
            <label htmlFor="password" className="capitalize">password</label>
            <input ref={passwordRef} id='password' type="password" className="form-input" placeholder='enter password'/>
            <label htmlFor="password2" className="capitalize">confirm password</label>
            <input ref={passwordTwoRef} id='password2' type="password" className="form-input" placeholder='confirm password'/>
            <button className="bg-gradient-to-br from-blue-500 to-blue-900 text-[whitesmoke] px-4 py-1 rounded-xl text-lg hover:cursor-pointer" type='submit'>Submit</button>
        </form>
        <Link className="text-2xl hover:cursor-pointer" to='/login' >Login</Link>
    </div>
  )
}

export default SignupForm