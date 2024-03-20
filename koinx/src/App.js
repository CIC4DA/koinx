import React from 'react'
import Navbar from './components/Navbar';
import './input.css';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <div className="layout flex flex-col justify-between ">
      <Navbar />
      <div className="hidden sm:flex items-start min-h-screen">
        <div className="self-stretch">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-bold underline p-12">Hello world!</h1>
        </div>
      </div>
    </div>
  )
}

export default App;
