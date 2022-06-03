import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className="flex flex-grow max-w-7xl mx-auto justify-between items-center bg-[#2a2a2a] pt-8 pb-10 lg:py-0">
        
        <div className="text-white px-10 space-y-7">
          <h1 className="text-6xl max-w-xl font-serif">
            Personalized education for <span className="underline decoration-[#ff8a00] text-[#ff8a00] decoration-4">everyone.</span>
          </h1>
          <h2 className="max-w-xl">Discover high-quality educational courses using machine learning to transform the learning experience.</h2>
          <Link href="https://beta.tackedu.com">
            <h2 className="cursor-pointer hover:bg-opacity-80 text-center bg-[#ff8a00] rounded-md py-[8px] font-semibold w-52">Start learning for free →</h2>
          </Link>
        </div>
        
        <img
          className="hidden mt-5 lg:py-20 lg:pl-20 lg:pr-10 lg:inline-flex lg:max-w-[800px] lg:h-full"
          src="https://user-images.githubusercontent.com/84104582/171801936-fa9e5bb9-1aaa-4576-9014-213ccd22b15b.png"
          alt=""
        />

      </div>
  )
}

export default Banner