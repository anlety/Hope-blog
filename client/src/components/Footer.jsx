import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'


export default function FooterCom() {
  return (
    <Footer container className="border border-t-6 border-blue-400">
      <div className="w-full max-w-7xl mx-auto">
      <div className="grid w-full justify-between sm:flex md:grid-cols-1">
      <div className="mt-5">
      <Link to='/' className="whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Hope's</span> Blog</Link>
        </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link 
              href='https://www.youtube.com'
              target="_blank"
              rel="noopener noreferrer">
                100 JS Projects
              </Footer.Link>
              <Footer.Link 
              href='https://www.youtube.com'
              target="_blank"
              rel="noopener noreferrer">
                100 react Projects
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link 
              href='https://www.youtube.com'
              target="_blank"
              rel="noopener noreferrer">
                100 JS Projects
              </Footer.Link>
              <Footer.Link 
              href='https://www.youtube.com'
              target="_blank"
              rel="noopener noreferrer">
                100 react Projects
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact us" />
            <Footer.LinkGroup col>
              <Footer.Link 
              href='https://www.youtube.com'
              target="_blank"
              rel="noopener noreferrer">
                100 JS Projects
              </Footer.Link>
              <Footer.Link 
              href='https://www.youtube.com'
              target="_blank"
              rel="noopener noreferrer">
                100 react Projects
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link 
              href='https://www.youtube.com'
              target="#"
              rel="noopener noreferrer">
                Privacy Policy
              </Footer.Link>
              <Footer.Link 
              href='https://www.youtube.com'
              target="#"
              rel="noopener noreferrer">
                Terms & conditions
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href='#' by="hope's blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 mt-4 sm:mt-8 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsTwitter}/>
                <Footer.Icon href="#" icon={BsFacebook}/>
            </div>
        </div>
      </div>
    </Footer>
  )
}
