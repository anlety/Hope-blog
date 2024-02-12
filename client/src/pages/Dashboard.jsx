import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSidebar"
import DashProfile from "../components/DashProfile"


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
    </div>
  )
}
