import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"



export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">

        <div className='flex-1'>
        <Link to='/' className="  font-bold text-4xl dark:text-white"><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Hope's</span> Blog</Link>
        <p className="text-sm mt-5">Write whatever you like</p>
        </div>

        <div className='flex-1'>
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username"/>
              <TextInput 
                type="text"
                placeholder="Username"
                id="username"
              />
            </div>
            <div>
              <Label value="Your email"/>
              <TextInput 
                type="email"
                placeholder="Email"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password"/>
              <TextInput 
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>

            <Button gradientDuoTone='purpleToBlue' type="submit" className="text-white">Sign up</Button>
          </form>
          <div className="mt-3">
            <span>Have an account</span> <Link to='/sign-in' className="text-blue-500 hover:text-blue-700">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
