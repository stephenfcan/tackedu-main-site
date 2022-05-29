import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className="flex max-w-7xl justify-between items-center bg-opacity-90 bg-[#2a2a2a] border-y border-black py-10 lg:py-0">
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
          className="hidden p-20 lg:inline-flex w-[800px] lg:h-full"
          src="https://user-images.githubusercontent.com/84104582/167009991-17258aab-b164-423f-9463-d7eaad443fa8.png"
          alt=""
        />
      </div>
  )
}

export default Banner