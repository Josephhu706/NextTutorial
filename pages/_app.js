import '../styles/globals.css'
import Layout from '../comps/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* this is all the children inside layout */}
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
