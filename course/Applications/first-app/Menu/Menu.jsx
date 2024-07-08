import React from 'react'
import Link from 'next/link'
import "./Menu.css"
export const Menu = () => {
  return (
      <div>
      <ul className="menu">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
              </li>
        <li>
          <Link href="/contact">Contact</Link>
              </li>
          </ul>
    </div>
  )
}


