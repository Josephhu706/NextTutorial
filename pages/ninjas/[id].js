// this page is specific to the dynamic route based on id
import React from 'react'

//destructure data from getStaticProps
const Details = ({ninja}) => {
  return (
    <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
    </div>
  )
}

export default Details

//Next does not know what HTML pages to generate because it's based on external data
//it only knows how many ids we have after the data has been fetched
//we need to explicitly tell Next what routes to create at build time
//we do this using getStaticPaths that runs at build time which gets all the necessary data for our routes (the id)
//that was Nextjs knows to generate html pages for all the routes when rendering

//we fetch all the data so we get all the ids so we can return the ids to next so it can create the routes and paths for us
//this lets next know how many paths to generate
export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    //for each user we create an object that has key params and value an object with id
    const paths = data.map(ninja=>{
        return {
            //the id needs to be a string not an integer
            params: {id: ninja.id.toString()}
        }
    })
    return{
    //this is an array of objects where each object is a route and the id specified.
    //like [{params: {id: 20}}]
    //when next is bulding our app for production it looks at paths and builds a page and a route for each one using id, in this case 10 pages.
    //it uses the details component to template.
    paths: paths,
    //when a user tries to visit a page where the route does not exist, show a 404
    fallback: false
    }

}

//So we've created the paths for nextjs to build the routes but now we need the actual information to display for each individual ninja
//we will put this data into the Details component
//this function will run as many times as the length of paths
//we access which path the render using context
export const getStaticProps = async (context) =>{
    const id = context.params.id;
    //fetch for the specific id.
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()
    return{
        //return a props object which is the single ninja
        props: {ninja: data}
    }

}   