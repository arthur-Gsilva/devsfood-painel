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
                            <Link href={'/pedidos'} onClick={() => setOpenMenu(false)}>Pedidos</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={'/produtos'} onClick={() => setOpenMenu(false)}>Produtos</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={'/categoria'} onClick={() => setOpenMenu(false)}>Categorias</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={'/login'} onClick={() => setOpenMenu(false)}>Sair</Link>
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
