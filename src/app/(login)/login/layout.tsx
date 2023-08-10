"use client"

import '@/app/global.css'
import styles from './layout.module.css'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return(
        <html lang="pt-br">
            <body>
                <main className={styles.container}>
                    <div className={styles.layoutContent}>
                        <h1>Devsfood</h1>
                        <h2>Painel do estabelecimento</h2>

                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}

export default Layout