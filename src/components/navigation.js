import React from 'react'
import { Link } from 'gatsby'

export default function Navigation({ children }) {
  return (
    <main className="grid grid-cols-12">
      <div className="col-span-8"></div>
      <div className="flex justify-between col-span-4 rounded-bl-[30px] bg-white py-[20px] px-[80px] text-black text-[12px] font-bold monospace uppercase">
        <Link to="/home">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
      </div>
    </main>
  )
}
