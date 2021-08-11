import Head from 'next/head'
import styles from '../styles/styles.module.scss'
import { connectToDatabase } from '../lib/mongodb'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { Fragment } from 'react'
import Banner from './Components/Banner'

export default function Home({ isConnected }) {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <Main />

      <Footer />
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
