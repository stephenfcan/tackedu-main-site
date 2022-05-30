import Link from 'next/link'
import React from 'react'

function CourseIcon({ link, img, courseName, instImg, instName, instLink }) {
  return (
    <div className="rounded-md max-w-[300px] shadow-md">
      <Link href={link}>
        <div>
          <img className="cursor-pointer rounded-md h-[200px] w-full object-cover" src={img} alt="" />
          <h1 className="cursor-pointer text-sm font-semibold pt-3 px-3">{courseName}</h1>
        </div>
      </Link>
      <Link href={instLink}>
        <div className="flex p-3 items-center space-x-2">
          <img className="cursor-pointer h-7 rounded-full"src={instImg} alt="" />
          <p className="cursor-pointer font-light text-xs">{instName}</p>
        </div>
      </Link>
    </div>
  )
}

export default CourseIcon