import React from 'react'
import Sidebar from '../components/Sidebar'

const BuyerDashboard = () => {
  return (
    <div className="hidden sm:flex items-start min-h-screen">
        <div className="self-stretch">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-bold underline p-12">BuyerDashboard screen</h1>
        </div>
      </div>
  )
}

export default BuyerDashboard