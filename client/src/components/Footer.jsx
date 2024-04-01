import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import { PiFlowerLotusThin } from "react-icons/pi";


export default function FooterCom() {
  return (
    <Footer container className="border border-t-6 border-gray-400 dark:bg-black mt-1">
      <div className="w-full max-w-7xl mx-auto">
      <div className="grid w-full justify-between sm:flex md:grid-cols-1">
      <div className="mt-2">
      <Link
        to='/'
        className=' whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex gap-1 items-center'
      >
        
          <PiFlowerLotusThin className='text-4xl text-red-400 hover:text-red-600' /><span className='italic font-semibold'>Hope</span>
        
        
      </Link>
      <div className="flex gap-6 mt-4 sm:mt-2 sm:justify-center mb-1">
                <Footer.Icon href="https://www.facebook.com" target="_blank" icon={BsFacebook}/>
                <Footer.Icon href="https://www.instagram.com" target="_blank" icon={BsInstagram}/>
                <Footer.Icon href="https://www.twitter.com" target="_blank" icon={BsTwitter}/>
                
            </div>
        </div>
          <div className="mt-4">
          
          
            <div><span>Contact number:</span> <span>03 1234 5678</span></div>
            <div><span>Address:</span> <span>15 Bourke street, Dockland 3421</span></div>
          
            
           
            
          </div>
        </div>
        <Footer.Divider />
        {/* <div className="w-full sm:flex sm:items-center text-center"> */}
        <div className=" text-center">
            <Footer.Copyright href='#' by="hope's blog" year={new Date().getFullYear()}/>
           
        </div>
      </div>
    </Footer>
  )
}
