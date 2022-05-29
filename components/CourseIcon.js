import React from 'react'

function CourseIcon({ img, courseName, instImg, instName }) {
  return (
    <div className="rounded-md max-w-[300px] shadow-md">
        <img className="rounded-md" src={img} alt="" />
        <h1 className="font-semibold pt-3 px-3">{courseName}</h1>
        <div className="flex p-3 items-center space-x-2">
            <img className="h-10 rounded-full"src={instImg} alt="" />
            <p>{instName}</p>
        </div>
    </div>
  )
}

export default CourseIcon