import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="max-w-7xl">
      <Head>
        <title>TackEdu</title>
        <meta name="description" content="Personalized education for everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Footer />
    </div>
  )
}
