import React from 'react'
import Styles from '../../styles/styles.module.scss'
import Image from 'next/image'


export default function Banner() {
    return (
        <article className={Styles.banner}>
            <div className={Styles._innerContainer}>
                <section className={Styles.dog}>
                    <Image src="/Header/Foryou-dog.png" alt="dog" width={122} height={150} />
                </section>
                <section className={Styles.welcome}>
                    <div className={Styles._title}>
                        <h1>
                            Welcome to Extra Add-Ons!
                        </h1>
                    </div>
                    <div className={Styles._text}>
                        <p>
                            Here you will find great deals to boost your pet’s health.
                            Same products at a very attractive price exclusively to subscribers!
                        </p>
                    </div>
                </section>
            </div>
        </article>
    )
}
