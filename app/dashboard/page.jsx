import React from 'react'
import SideNav from './_components/SideNav'
import SearchSection from './_components/SearchSection'

function Dashboard() {
  return (
    <div className='flex h-screen'>
        <SideNav/>
        <div className='flex-grow'>
            <SearchSection/>
        </div>
        
    </div>
  )
}

export default Dashboard