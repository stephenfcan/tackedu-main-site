import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-[#2a2a2a] max-w-7xl mx-auto">
        <Head>
          <title>Contact - TackEdu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="mt-[50px] md:mt-[100px]">
            <div className="text-center space-y-5 text-white">
                <h1 className="font-serif leading-tight font-medium text-4xl md:text-5xl max-w-5xl mx-auto">Contact Us</h1>
                <p className="px-4 font-medium text-sm lg:text-md text-center mx-auto max-w-2xl">Whatever your comments, questions, or feedback are, we want to hear from you. Just fill out the form below and we&apos;ll respond as soon as possible.</p>
            </div>

            <form className="max-w-3xl mx-auto flex flex-col px-8 py-8">

              <label htmlFor="fullname" className="text-gray-500 font-light mt-8 mb-3 dark:text-gray-50">Full name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="fullname"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                className="bg-black bg-opacity-20 py-2 pl-4 focus:outline-none font-light text-gray-500"
              />

              <label htmlFor="email" className="text-gray-500 font-light mt-4 mb-3 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-black bg-opacity-20 py-2 pl-4 focus:outline-none font-light text-gray-500"
              />

              <label htmlFor="subject" className="text-gray-500 font-light mt-4 mb-3 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="bg-black bg-opacity-20 py-2 pl-4 focus:outline-none font-light text-gray-500"
              />

              <label htmlFor="message" className="text-gray-500 font-light mt-4 mb-3 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
              <textarea
                rows={8}
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="bg-black bg-opacity-20 py-2 pl-4 focus:outline-none font-light text-gray-500"
              >
              </textarea>
              
              <div className="flex flex-row items-center justify-start">
                <button
                  type="submit"
                  className="mt-9 mx-auto md:mx-0 text-white cursor-pointer hover:bg-opacity-80 text-center bg-[#ff8a00] rounded-md py-[8px] font-semibold w-52"
                >
                  Submit Form →
                </button>
              </div>
            </form>
        </main>

        <Footer />
        
    </div>
  )
}

export default Contact