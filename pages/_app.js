import Layout from '../comps/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* this is all the children inside layout */}
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
