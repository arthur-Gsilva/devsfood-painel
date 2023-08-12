'use client'

import { useState } from 'react'
import styles from './page.module.css'
import { Product } from '@/types/product'
import { categorie } from '@/types/categories'
import { api } from '@/libs/api'

export default function Produtos () {

    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<categorie[]>([])

    const getProducts = async () => {
        setProducts(await api.getProducts())
        setCategories(await api.getCategories())
    }

    return(
        <div className={styles.container}>
            <div className={styles.productHeader}>
                <h2>Produtos</h2>

                <button>Novo produto</button>
            </div>

            <div className={styles.productsContent}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Categorias</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}