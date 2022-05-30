import Link from 'next/link'
import React from 'react'

function AboutTeam({ link, img, role, name, description }) {
  return (
    <div className="">
        <Link href={link}>
          <img className="cursor-pointer h-40 w-40 mb-4 rounded-full" src={img} alt="" />
        </Link>
        <h3 className="font-semibold text-[#ff8a00] text-xl">{role}</h3>
        <h1 className="font-extralight text-white text-3xl">{name}</h1>
        <p className="text-white mt-4">{description}</p>
    </div>
  )
}

export default AboutTeam