import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
          {/* this is optimized for screen sizes and loading speed */}
            <Image width={128} height={77} src='/ninjalogo.png'/>
        </div>
        {/* links  */}
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Ninja Listing</a></Link>
    </nav>
  )
}

export default Navbar