import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import CourseIcon from '../components/CourseIcon'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-w-fit">
      <Head>
        <title>TackEdu</title>
        <meta name="description" content="Personalized education for everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="py-[25px] px-5 space-y-4">
        <h1 className="font-semibold text-sm">TRENDING COURSES ON TACKEDU 🚀</h1>
        <div className="space-y-5 md:space-y-0 md:space-x-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <CourseIcon
            link="/courses"
            img="https://i.stack.imgur.com/A135U.png"
            courseName="HTML MASTERY"
            instImg="https://stephenan.net/images/profilepic.png"
            instName="Stephen An"
            instLink="https://linkedin.com/in/stephen-an"
          />
          <CourseIcon
            link="/courses"
            img="https://www.jotform.com/blog/wp-content/uploads/2008/07/photo-1505685296765-3a2736de412f.jpeg"
            courseName="CSS PROFICIENCY"
            instImg="https://stephenan.net/images/profilepic.png"
            instName="Stephen An"
            instLink="https://linkedin.com/in/stephen-an"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
