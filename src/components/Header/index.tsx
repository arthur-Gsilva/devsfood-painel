import Link from 'next/link'
import styles from './styles.module.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return(
        <header className={styles.container}>

            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="logo devsfood" />
                </div>

                <nav className={styles.nav} style={{left: openMenu ? '30%' : '100%'}}>
                    <ul className={styles.menuList}>
                        <li className={styles.listItem}>
                            <Link href={'/pedidos'}>Pedidos</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={'/produtos'}>Produtos</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={'/categoria'}>Categorias</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={'/login'}>Sair</Link>
                        </li>
                    </ul>

                    <div 
                        className={styles.closeMenu} 
                        onClick={() => setOpenMenu(false)}
                        style={{display: openMenu ? 'block' : 'none'}}
                    >
                        X
                    </div>
                </nav>

                <div className={styles.menuMobile} onClick={() => setOpenMenu(true)}>
                    <AiOutlineMenu />
                </div>
            </div>
            
        </header>
    )
}
