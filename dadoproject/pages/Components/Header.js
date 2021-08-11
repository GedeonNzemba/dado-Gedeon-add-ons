import React from 'react'
import Styles from '../../styles/styles.module.scss'
import Image from 'next/image'


export default function Header() {
    return (
        <header>
            <div className={Styles.header}>
                <section className={Styles.logo}>
                    <div className={Styles._container}>
                        <Image src="/logo.svg" alt="Logo" width={192} height={40} />
                    </div>
                </section>
                <section className={Styles.navigation}>
                    <div className={Styles._container}>
                        <ul>
                            <li>
                                <a href="#">
                                    <span><Image className="header-icon" src="/Header/Dashboard-Icon.svg" width="15" height="15" alt="dashboard icon" /></span>
                                    <p>dashboard</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><Image className="header-icon" src="/Header/My-Pets-Icon.svg" width="15" height="15" alt="pets icon" /></span>
                                    <p>my pets</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><Image className="header-icon" src="/Header/My-Subscriptions-Icon.svg" width="15" height="15" alt="subscription icon" /></span>
                                    <p>my subscription</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><Image className="header-icon" src="/Header/My-Subscriptions-Icon.svg" width="15" height="15" alt="orders icon" /></span>
                                    <p>orders</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><Image className="header-icon" src="/Header/My-Account-Icon.svg" width="15" height="15" alt="account icon" /></span>
                                    <p>my account</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><Image className="header-icon" src="/Header/Extra-Add-Ons-Icon.svg" width="15" height="15" alt="extra add-on icon" /></span>
                                    <p>extra add-ons</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><Image className="header-icon" src="/Header/Sign-Out Icon.svg" width="15" height="15" alt="sign out icon" /></span>
                                    <p>sign out</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </header>
    )
}
