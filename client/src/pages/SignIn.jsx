import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice'
import { PiFlowerLotusThin } from "react-icons/pi";
import OAuth from "../components/OAuth";



export default function SignIn() {
  const [formData, setFormData] = useState({})
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(false)

  const {loading, error: errorMessage} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()

function handleChange(e){
setFormData({...formData, [e.target.id]: e.target.value.trim()})
}

const handleSubmit = async(e) =>{
  e.preventDefault();
  if(!formData.password || !formData.email){
    return dispatch(signInFailure("Please fill out all fields."))
  }
  try {
    // setLoading(true)
    // setError(null)
    dispatch(signInStart())
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    
    if(data.success === false){
      // return setError(data.message)
      dispatch(signInFailure(data.message))
    }
    // setLoading(false)
    if(res.ok) {
      dispatch(signInSuccess(data))
      navigate('/')
    }
    
  } catch (error) {
    // setError(error.message)
    // setLoading(false)
    dispatch(signInFailure(error.message))
  }
}
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">

        <div className='flex-1'>
        <Link to='/' className="  font-bold text-4xl dark:text-white">
          < PiFlowerLotusThin className="text-7xl text-red-400"/>
          <span className="px-2 py-1">Hope's Blog</span> </Link>
        <p className="text-sm mt-5">Please sign in</p>
        </div>

        <div className='flex-1'>
        <h1 className="text-3xl font-semibold text-center pb-5">Sign in</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <div>
              <Label value="Your email"/>
              <TextInput 
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password"/>
              <TextInput 
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button 
            pill
            gradientDuoTone='purpleToBlue' type="submit" className="text-white" disabled={loading}>{loading? (<><Spinner size='sm' />
             <span className="pl-3">loading...</span> </>)  : 'Sign in'}</Button>
             <OAuth />
          </form>
          <div className="mt-3">
            <span>Dont have an account?</span> <Link to='/sign-up' className="text-blue-500 hover:text-blue-700">Sign up</Link>
          </div>
          {errorMessage && (<Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

