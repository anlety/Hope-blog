import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSidebar"
import DashProfile from "../components/DashProfile"
import DashPosts from "../components/DashPost"
import DashUsers from "../components/DashUser.jsx"
import DashComments from "../components/DashComment.jsx"
import DashboardComp from "../components/DashboardComp.jsx"

import CreatePost from "./CreatePost.jsx"



export default function Dashboard() {
  const [tab, setTab] = useState('')
  const location = useLocation()

  useEffect(()=> {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  }, [location.search])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
        <div className="w-full md:w-56">
          <DashSidebar />
        </div>

        {/* Main */}
        {tab === 'profile' && <DashProfile />}

        {tab === 'posts' && <DashPosts />}
        {tab === 'users' && <DashUsers />}
        {tab === 'create' && <CreatePost />}
        {tab === 'comments' && <DashComments />}
        {tab === 'dash' && <DashboardComp/>}
    </div>
  )
}
