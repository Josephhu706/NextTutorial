import {React, useEffect} from 'react'
//lets you do redirects
import { useRouter } from 'next/router'
import Link from 'next/link'


const NotFound = () => {
  const router = useRouter()

  useEffect(() => {    
    setTimeout(()=>{
      //router.go(-1) means take the user back one route in history
      //like clicking the back button
      // router.go(-1)
      router.push('/')
    }, 3000)
  },[]) // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className='not-found'>
        <h1>Oooops...</h1>
        <h2>That page cannot be found</h2>
        <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
    </div>
  )
}

export default NotFound