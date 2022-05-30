import React from 'react'

function CourseBanner({ img, name, instructor, releaseDate }) {
  return (
    <div className="backdrop-opacity-40 mb-4 mr-4 hover:mix-blend-hard-light bg-gradient-to-b from-transparent to-black cursor-pointer rounded-xl w-[275px] h-[450px]">
        <img className="relative mix-blend-overlay rounded-xl h-[400px]" src={img} alt="" />
        <p className="absolute -mt-[383px] mx-5 mb-3 text-center w-[100px] font-light text-xs bg-white rounded-full shadow-lg p-1">{releaseDate}</p>
        <h1 className="absolute -mt-[35px] mx-5 font-semibold text-2xl text-white">{name}</h1>
        <h2 className="absolute mx-5 mb-3 font-semibold text-lg text-white">{instructor}</h2>
    </div>
  )
}

export default CourseBanner