'use client'
import { useState } from 'react'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex flex-col h-screen">
      {/* Header - thin section at the top */}
      <div className="h-16 bg-gray-800 text-white flex items-center justify-between px-2 border-2 border-gray-300">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
          <h1 className="text-xl font-bold">Abyssinia Music</h1>
        </div>
        <div className="flex space-x-4">
          <button className="w-[92px] px-4 py-2 bg-gray-600 hover:bg-red-900">
            Sign Up
          </button>
          <button className="w-[92px] px-4 py-2 bg-gray-600 hover:bg-red-900 border-black">
            Login
          </button>
        </div>
      </div>

      {/* Main content area with sidebar and content */}
      <div className="flex flex-1">
        {/* Collapsible Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-gray-200 border-2 border-green-500 transition-all duration-300 ease-in-out`}>
          {sidebarOpen ? (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-4">Sidebar Menu</h3>
              <ul className="space-y-2">
                <li className="p-2 bg-blue-100 rounded hover:bg-blue-200 cursor-pointer">
                  Dashboard
                </li>
                <li className="p-2 bg-green-100 rounded hover:bg-green-200 cursor-pointer">
                  Playlists
                </li>
                <li className="p-2 bg-purple-100 rounded hover:bg-purple-200 cursor-pointer">
                  Artists
                </li>
                <li className="p-2 bg-yellow-100 rounded hover:bg-yellow-200 cursor-pointer">
                  Settings
                </li>
              </ul>
            </div>
          ) : (
            <div className="p-2 flex flex-col items-center space-y-4">
              <div className="w-8 h-8 bg-blue-100 rounded"></div>
              <div className="w-8 h-8 bg-green-100 rounded"></div>
              <div className="w-8 h-8 bg-purple-100 rounded"></div>
              <div className="w-8 h-8 bg-yellow-100 rounded"></div>
            </div>
          )}
        </div>

        {/* Main content - takes up the rest of the screen */}
        <div className="flex-1 bg-gray-100 flex items-center justify-center border-2 border-blue-500">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Abyssinia Music
            </h2>
            <p className="text-lg text-gray-600">
              Music
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 