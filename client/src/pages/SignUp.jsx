import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth";
import { PiFlowerLotusThin } from "react-icons/pi";



export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

function handleChange(e){
setFormData({...formData, [e.target.id]: e.target.value.trim()})
}

const handleSubmit = async(e) =>{
  e.preventDefault();
  if(!formData.username || !formData.password || !formData.email){
    return setError("Please fill out all fields.")
  }
  try {
    setLoading(true)
    setError(null)
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    
    if(data.success === false){
      return setError(data.message)
    }
    setLoading(false)
    navigate('/sign-in')
  } catch (error) {
    setError(error.message)
    setLoading(false)
  }
}
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">

        <div className='flex-1'>
        <Link to='/' className="  font-bold text-4xl dark:text-white">
          < PiFlowerLotusThin className="text-7xl text-red-400"/>
          <span className="px-2 py-1">Hope's Blog</span> </Link>
        <p className="text-sm mt-5">Please sign up</p>
        </div>

        <div className='flex-1'>
           <h1 className="text-3xl font-semibold text-center pb-5">Sign up</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username"/>
              <TextInput 
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
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
             <span className="pl-3">loading...</span> </>)  : 'Sign up'}</Button>
             <OAuth />
          </form>
          <div className="mt-3">
            <span>Have an account?</span> <Link to='/sign-in' className="text-blue-500 hover:text-blue-700">Sign in</Link>
          </div>
          {error && (<Alert className='mt-5' color='failure'>
            {error}
          </Alert>)}
        </div>
      </div>
    </div>
  )
}
