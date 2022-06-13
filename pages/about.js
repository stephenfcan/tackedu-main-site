import Head from 'next/head'
import React from 'react'
import AboutTeam from '../components/AboutTeam'
import Footer from '../components/Footer'
import Header from '../components/Header'

function About() {
  return (
    <div className="min-w-fit">
      <Head>
        <title>About - TackEdu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mt-[50px] lg:mt-[100px]">
          <div className="space-y-9 text-center">
              <h1 className="font-serif px-3 leading-tight font-medium text-3xl lg:text-7xl max-w-5xl mx-auto">Unlocking human potential by personalizing education.</h1>
              <p className="px-7 font-medium text-sm lg:text-md max-w-3xl mx-auto">At TackEdu, we believe education is the key to unlocking human potential. Unfortunately, over the last 35 years, we’ve seen marquee colleges and universities transform from public servants to luxury goods. Founded in 2020, TackEdu was built on the idea of transforming education to make it more accessible and more personal.</p>
          </div>

          <div className="bg-[#2a2a2a] mt-[50px] lg:mt-[100px] pb-[100px] max-w-7xl mx-auto">
            <h1 className="py-7 pt-14 font-serif text-center font-regular text-3xl lg:text-5xl text-white mb-[30px] lg:mb-[60px] mt-[20px]">Founding Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 lg:space-y-0 md:space-x-5 px-10">
                <AboutTeam
                  link="https://linkedin.com/in/stephen-an"
                  img="https://stephenan.net/images/profilepic.png"
                  role="CEO" name="Stephen An"
                  description="Stephen is a senior at the University of Georgia studying Management Information Systems. He has interned for multiple companies including ServiceNow, Boehringer Ingelheim, and Gartner leading digital transformation and edtech efforts. He is also the instructor for TackEdu's Front-end track."
                />
                <AboutTeam
                  link="https://www.linkedin.com/in/baig-faisal/"
                  img="https://media-exp1.licdn.com/dms/image/C5603AQFTTmCy7y2pNA/profile-displayphoto-shrink_800_800/0/1653831031834?e=1659571200&v=beta&t=wouc9TMkFCCfQMmNS2nrYiX8XAQNOaeUEcXvOsO2krE"
                  role="CTO" name="Faisal Baig"
                  description="Faisal is a masters student at Georgia Tech studying Artificial Intelligence. He holds an undergrad in computer science from Georgia Tech and has experience working with multiple startups and enterprises. He is also the instructor for TackEdu's Python Mastery course."
                />
            </div>
          </div>
      </main>

      <Footer />

    </div>
  )
}

export default About