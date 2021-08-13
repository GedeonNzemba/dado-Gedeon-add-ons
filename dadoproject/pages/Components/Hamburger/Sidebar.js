import React, { Fragment } from 'react'
import Styles from '../../../styles/styles.module.scss'
import Image from 'next/image'

export default function Sidebar() {
    return (
        <Fragment>
            <div className={Styles.sidebar}>
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
        </Fragment>
    )
}
