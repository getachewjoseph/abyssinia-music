'use client'
import { useState } from 'react'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState('Ethiopian Jazz - Mulatu Astatke')

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleStop = () => {
    setIsPlaying(false)
  }

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
        
        {/* Navigation Buttons */}
        <div className="flex space-x-2">
          <button className="px-3 py-2 bg-blue-600 rounded hover:bg-blue-700 text-sm">
            Home
          </button>
          <button className="px-3 py-2 bg-green-600 rounded hover:bg-green-700 text-sm">
            Music
          </button>
          <button className="px-3 py-2 bg-purple-600 rounded hover:bg-purple-700 text-sm">
            About
          </button>
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
        <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center border-2 border-blue-500">
          {/* Simple Music Player */}
          <div className="w-full max-w-2xl px-8">
            {/* Current Track Display */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {currentTrack}
              </h2>
              <p className="text-gray-600">
                {isPlaying ? 'Now Playing' : 'Paused'}
              </p>
            </div>

            {/* Progress Line */}
            <div className="relative mb-8">
              {/* Background Line */}
              <div className={`w-full h-1 rounded-full transition-colors duration-300 ${
                isPlaying ? 'bg-blue-500' : 'bg-gray-400'
              }`}></div>
              
              {/* Progress Fill */}
              <div className={`absolute top-0 left-0 h-1 rounded-full transition-all duration-300 ${
                isPlaying ? 'bg-green-500' : 'bg-gray-300'
              }`} style={{ width: isPlaying ? '45%' : '0%' }}></div>
              
              {/* Control Button in Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button 
                  onClick={handlePlayPause}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 ${
                    isPlaying 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
              </div>
            </div>

            {/* Time Display */}
            <div className="flex justify-between text-sm text-gray-600">
              <span>1:23</span>
              <span>3:45</span>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mt-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Abyssinia Music
            </h2>
            <p className="text-lg text-gray-600">
              Your gateway to Ethiopian music and culture
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 