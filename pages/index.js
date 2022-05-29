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
    <div className="max-w-7xl min-w-fit">
      <Head>
        <title>TackEdu</title>
        <meta name="description" content="Personalized education for everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="py-[25px] px-5 space-y-4">
        <h1 className="font-semibold text-xs">TRENDING COURSES ON TACKEDU</h1>
        <div className="space-y-5 md:space-y-0 md:space-x-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <CourseIcon img="http://www.johncbarentine.com/uploads/7/8/0/8/78081652/811008334.jpg" courseName="HTML MASTERY" instImg="https://stephenan.net/images/profilepic.png" instName="Stephen An" />
          <CourseIcon img="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=" courseName="CSS ESSENTIALS" instImg="https://stephenan.net/images/profilepic.png" instName="Stephen An" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
