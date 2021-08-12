import Head from 'next/head'
import Image from 'next/image'
import Styles from '../styles/styles.module.scss'
import { connectToDatabase } from '../lib/mongodb'
import Header from './Components/Header'
// import Main from './Components/Main'
import Footer from './Components/Footer'
import { Fragment } from 'react'
import Banner from './Components/Banner'

export default function Home({ products }) {

  // displaying products data in the console
  console.log(products)

  return (
    <Fragment>
      <Head>
        <title>PetLabCo</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <Banner />

      <main className={Styles.main} id={Styles.productContainer}>
        <div className={Styles._products}>

          {products.map(product => {
            return (
              <div className={Styles.product}>

                <section className={Styles._image}>
                  <Image src={product.images[0].url} alt="Logo" width={308} height={205} />
                </section>

                <section className={Styles._content}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <aside className={Styles.benefitWrapper}>
                    <div className={Styles._container}>
                      <span><Image src="/Frame.svg" alt="tick benefit" width={16} height={16} /></span>
                      <p>{product.benefit[0].benefit_1}</p>
                    </div>
                    <div className={Styles._container}>
                      <span><Image src="/Frame.svg" alt="tick benefit" width={16} height={16} /></span>
                      <p>{product.benefit[0].benefit_2}</p>
                    </div>
                    <div className={Styles._container}>
                      <span><Image src="/Frame.svg" alt="tick benefit" width={16} height={16} /></span>
                      <p>{product.benefit[0].benefit_3}</p>
                    </div>
                  </aside>

                  <div className={Styles.price}>
                    <span>{product.sell_price}</span>
                    <div id={Styles}>{product.price}</div>
                    <span>{product.promo}</span>
                  </div>
                </section>

                <section className={Styles._button}>
                  <button id={Styles.button}>SHOP NOW</button>
                </section>
              </div>
            )
          })}

        </div>
      </main>

      <Footer />
    </Fragment>
  )
}

// GETTING THE PRODUCTS DATA
export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection("products").find({}).limit(10).toArray();

  const products = JSON.parse(JSON.stringify(data))



  console.log(products);

  return {
    props: { products: products },
  }
}
