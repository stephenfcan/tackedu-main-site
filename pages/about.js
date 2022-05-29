import Head from 'next/head'
import React from 'react'
import AboutTeam from '../components/AboutTeam'
import Footer from '../components/Footer'
import Header from '../components/Header'

function About() {
  return (
    <div>
      <Head>
        <title>About - TackEdu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mt-[100px]">
          <div className="space-y-9 text-center">
              <h1 className="font-serif leading-tight font-medium text-3xl lg:text-7xl max-w-5xl mx-auto">Unlocking human potential by personalizing education.</h1>
              <p className="px-4 font-medium text-sm lg:text-md max-w-3xl mx-auto">Founded in 2020, TackEdu was built on the idea that higher-level education needed to be disrupted. Unlike the 300 year-old college insitutions of the 20th Century, TackEdu harnesses digital transformation and machine learning to make education more accessible and more personal.</p>
          </div>

          <div className="bg-[#2a2a2a] mt-[100px]">
            <h1 className="py-7 pt-14 font-serif text-center font-regular text-3xl lg:text-5xl text-white mb-[60px] mt-[20px]">Founding Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 lg:space-y-0 md:space-x-5 px-10">
                <AboutTeam img="https://stephenan.net/images/profilepic.png" role="CEO" name="Stephen An" description="Stephen is a senior at the University of Georgia studying Management Information Systems. He has interned for multiple companies including ServiceNow, Boehringer Ingelheim, and Gartner leading digital transformation and edtech efforts. He is also the instructor for TackEdu's JavaScript Course." />
                <AboutTeam img="https://media-exp1.licdn.com/dms/image/C4E03AQEpF-hbLfIwjQ/profile-displayphoto-shrink_400_400/0/1618107264663?e=1659571200&v=beta&t=ItKSpcZ0F68Dv0VvBPIaVbsx_KfdXcMFBsatsCFWTos" role="CLO" name="Anvith Reddy" description="Anvith is a MD/PhD student at Vanderbilt University. He holds a undergrad in genetics from the University of Georgia and has performed research with the University of California and Baylor College of Medicine." />
                <AboutTeam img="https://media-exp1.licdn.com/dms/image/C5603AQFTTmCy7y2pNA/profile-displayphoto-shrink_800_800/0/1653831031834?e=1659571200&v=beta&t=wouc9TMkFCCfQMmNS2nrYiX8XAQNOaeUEcXvOsO2krE" role="CTO" name="Faisal Baig" description="Faisal is a masters student at Georgia Tech studying Artificial Intelligence. He holds an undergrad in computer science from Georgia Tech and has experience working with multiple startups and enterprises." />
            </div>
          </div>
      </main>

      <Footer />
    </div>
  )
}

export default About