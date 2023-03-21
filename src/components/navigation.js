import React from 'react'
import { Link } from 'gatsby'

export default function Navigation({ children }) {
  return (
    <main className="grid grid-cols-6 lg:grid-cols-12">
      <div className="lg:col-span-8 col-span-2"></div>
      <div className="flex justify-between col-span-4 rounded-bl-[30px] bg-white py-[20px] lg:px-[80px] px-[50px] text-black text-[12px] font-bold monospace uppercase">
        <Link to="/">Home</Link>
        <Link to="/home#portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
      </div>
    </main>
  )
}
