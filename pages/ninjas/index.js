import React from 'react'
//the route for this is localhost/3000/ninjas NOT /index . index is the 'home' page
import styles from '../../styles/Ninjas.module.css'
//we can use the data from getStaticProps destructured
import Link from 'next/link'

const index = ({ninjas}) => {
  return (
    <div>
        <h1>All Ninjas</h1>
        {/* map through users */}
        {ninjas.map(ninja =>(
          <Link href={'/ninjas/'+ninja.id} key={ninja.id}>
            {/* this will link to each user */}
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
    </div>
  )
}

export default index

//this function runs at buildtime as our app is built and a component is rendered
//this doesn't run in the browser, only at build time
export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  //we make values we want accessible in our component as a prop
  return {
    props: {ninjas: data}
  }
}