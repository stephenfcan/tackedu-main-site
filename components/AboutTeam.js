import React from 'react'

function AboutTeam({ img, role, name, description }) {
  return (
    <div className="">
        <img className="h-40 w-40 mb-4 rounded-full" src={img} alt="" />
        <h3 className="font-semibold text-[#ff8a00] text-xl">{role}</h3>
        <h1 className="font-extralight text-white text-3xl">{name}</h1>
        <p className="text-white mt-4">{description}</p>
    </div>
  )
}

export default AboutTeam