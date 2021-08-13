import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Styles from '../styles/styles.module.scss'
import { connectToDatabase } from '../lib/mongodb'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Fragment } from 'react'
import Banner from './Components/Banner'


export default function Home({ products }) {

  // Displaying products data in the console
  console.log(products)

  // Make the products image scale down a little
  useEffect(() => {
    const productsImages = document.querySelectorAll("img.styles_product_image__3m3QH");
    productsImages.forEach(productImage => {
      productImage.style.objectFit = "contain";
    });

  }, [])


  // FILTER 
  const [filter, setFilter] = useState('');

  let dataFiltered = products.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  })
  console.log(dataFiltered)



  return (
    <Fragment>
      <Head>
        <title>PetLabCo</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <Banner />

      <main className={Styles.main} id={Styles.productContainer}>
        {/* Dropdown for filter by category */}

        <select id="div-products" onChange={(e) => {
          const selectedCategory = e.target.value;
          setFilter(selectedCategory);
        }}>
          <option href="" value="" disabled selected >Select category</option>
          <option href="" value="probiotics">probiotics </option>
          <option href="" value="mobility" >mobility</option>
          <option href="" value="skin & coat">skin & coat </option>
          <option href="" value="health & wellness">health & wellness</option>
          <option href="" value="food">food </option>
        </select>

        {console.log(filter)}

        <div className={Styles._products}>


          {dataFiltered.map(product => {
            return (
              <div className={Styles.product} key={product._id}>

                <section className={Styles._image}>
                  <Image className={Styles.product_image} src={product.images[0].url} alt="Logo" width={308} height={205} />
                  <div className={Styles.product_category}>{product.category}</div>
                </section>

                <section className={Styles._productInfo}>
                  <div className={Styles._content}>
                    <h3>{product.name}</h3>
                    <p className={Styles.description}>{product.description}</p>
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
                      <span className={Styles.sell_price}>{product.sell_price}</span>
                      <div id={Styles.normalPrice}>{product.price}</div>
                      <span className={Styles.promo}>{product.promo}</span>
                    </div>
                  </div>

                  <a href="#" className={Styles._button}>
                    <button id={Styles.button}>shop now</button>
                  </a>
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
