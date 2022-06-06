import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

//each page has it's own javascript bundle that is only served to us when we navigate to it for the first time
//this is called code splitting. We are only served code for a page when we need it
//next also prefetches all the code for navigation Links before the page is rendered

export default function Home() {
  return (
    <>
    {/* this head tag lets us modify metadata */}
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      {/* //using module and styles. classname, scopes the style to a specific stylesheet and class */}
      <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nesciunt eaque repudiandae perspiciatis quibusdam accusantium quos corrupti, debitis ullam tenetur.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum quis recusandae dolorem. Libero ad quasi, vero suscipit ducimus cupiditate.</p>
      <Link href='/ninjas'><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
