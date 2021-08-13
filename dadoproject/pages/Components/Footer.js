import React from 'react'
import Styles from '../../styles/styles.module.scss'
import Image from 'next/image'


export default function Header() {
    return (
        <footer className={Styles.footer}>
            <div id={Styles.footer_image}>
                <Image src="/logo/secondary.png" alt="footer logo" width={156} height={160} />
            </div>
            <div className={Styles.preFooter}>
                <span>&copy; 2021 Petlab Co.</span>
            </div>
        </footer>
    )
}
