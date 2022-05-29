import Link from 'next/link'
import React from 'react'

function HeaderOptions({ name, link }) {
  return (
    <div>
        <Link href={link}>
            <h3 className="cursor-pointer hover:border-b-[3px] hover:border-[#ff8a00] text-white font-semibold">{name}</h3>
        </Link>
    </div>
  )
}

export default HeaderOptions