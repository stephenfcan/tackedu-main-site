import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import CourseBanner from '../components/CourseBanner'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Courses() {
  return (
    <div className="bg-[#2a2a2a] max-w-7xl mx-auto">
        <Head>
          <title>Courses - TackEdu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className="hidden lg:flex z-10 mt-12 items-center justify-between px-10 py-5 w-10/12 mx-auto rounded-sm bg-[#3a3a3a] text-white">
          <h1 className="text-lg font-semibold">Learn HTML, CSS, and JavaScript</h1>
          <div className="flex space-x-5 items-center">
            <h2 className="font-light"><span className="font-semibold">Free</span> - no credit card required</h2>
            <Link href="https://beta.tackedu.com"><h2 className="cursor-pointer hover:bg-opacity-80 px-10 py-4 bg-[#ff8a00] rounded-xl text-xs font-semibold">GET STARTED</h2></Link>
          </div>
        </div>

        <div className="pt-8">
          <h1 className="text-4xl md:text-5xl font-serif font-base pl-10 md:pl-[110px] pr-10 py-7 text-white">Browse Classes</h1>
        </div>

        <main className="flex flex-col md:flex-row pt-5">
            <div className="pl-10 md:pl-[110px] text-white font-semibold space-y-3">
              <h3 className="cursor-pointer opacity-60 hover:opacity-100">All Classes</h3>
              <h3 className="cursor-pointer opacity-60 hover:opacity-100">Trending</h3>
              <h3 className="cursor-pointer opacity-60 hover:opacity-100">Just Added</h3>
              <h3 className="cursor-pointer opacity-60 hover:opacity-100">Coming Soon</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pl-10 md:ml-[80px] md:pl-14 pt-10 md:pt-0">
              <CourseBanner
                img="https://i.stack.imgur.com/A135U.png"
                name="HTML Mastery"
                instructor="Stephen An"
                releaseDate="October 2022"
              />
              <CourseBanner
                img="https://www.jotform.com/blog/wp-content/uploads/2008/07/photo-1505685296765-3a2736de412f.jpeg"
                name="CSS Proficiency"
                instructor="Stephen An"
                releaseDate="January 2023"
              />
              <CourseBanner
                img="https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png"
                name="JavaScript Essentials"
                instructor="Stephen An"
                releaseDate="January 2023"
              />
              <CourseBanner
                img="https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png"
                name="Python Mastery"
                instructor="Faisal Baig"
                releaseDate="March 2023"
              />
              <CourseBanner
                img="https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png"
                name="React.js Mastery"
                instructor="Stephen An"
                releaseDate="March 2023"
              />
            </div>
        </main>

        <Footer />
    </div>
  )
}

export default Courses