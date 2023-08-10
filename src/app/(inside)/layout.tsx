"use client"

import '@/app/global.css'
import styles from './layout.module.css'
import { Header } from '@/components/Header'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return(
        <html lang="pt-br">
            <body className={styles.body}>

                <Header />
                <section className={styles.container}>
                    {children}
                </section>
            </body>
        </html>
    )
}

export default Layout