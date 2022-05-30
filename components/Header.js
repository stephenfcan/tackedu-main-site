import Link from 'next/link'
import React from 'react'
import HeaderOptions from './HeaderOptions'

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto bg-[#2a2a2a]">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img
                    className="w-44 object-contain cursor-pointer"
                    src="https://tackedu.netlify.app/TackEdu%20Logo.png"
                    alt=""
                />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <HeaderOptions name="Courses" link="/courses" />
                <HeaderOptions name="About" link="/about" />
                <HeaderOptions name="Contact" link="/contact" />
            </div>
        </div>

        <div className="flex items-center font-semibold">
            <Link href="https://beta.tackedu.com">
                <h3 className="cursor-pointer border-2 px-4 py-1 rounded-md text-white border-[#ff8a00] hover:text-white hover:bg-[#ff8a00]">Log In</h3>
            </Link>
        </div>
    </header>
  )
}

export default Header