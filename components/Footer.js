import Link from 'next/link'
import React from 'react'
import HeaderOptions from './HeaderOptions'

function Footer() {
  return (
    <div className="bg-[#2a2a2a] flex pt-20 pb-10 px-10 max-w-7xl mx-auto">
        <div className="space-y-2">
            <Link href="/support"><h1 className="font-semibold text-white cursor-pointer opacity-60 hover:opacity-100">Help Center</h1></Link>
            <Link href="/intern"><h1 className="font-semibold text-white cursor-pointer opacity-60 hover:opacity-100">Intern @ TackEdu</h1></Link>
            <Link href="/about"><h1 className="font-semibold text-white cursor-pointer opacity-60 hover:opacity-100">About Us</h1></Link>
        </div>
        <div className="space-y-2 ml-[25px]">
          <Link href="/contact"><h1 className="font-semibold text-white cursor-pointer opacity-60 hover:opacity-100">Contact</h1></Link>
          <Link href="https://www.linkedin.com/company/tackedu/"><h1 className="font-semibold text-white cursor-pointer opacity-60 hover:opacity-100">LinkedIn</h1></Link>
        </div>
    </div>
  )
}

export default Footer