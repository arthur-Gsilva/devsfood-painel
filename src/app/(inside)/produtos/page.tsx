'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { Product } from '@/types/product'
import { categorie } from '@/types/categories'
import { api } from '@/libs/api'
import { ProductTableItem } from '@/components/ProductTableItem'
import { DeleteArea } from '@/components/DeleteArea'
import { SkeletonTable } from '@/components/Skeletons/skeletonTable'
import { ProductModal } from '@/components/ProductModal'

export default function Produtos () {

    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<categorie[]>([])
    const [loading, setLoading] = useState(false)

    const [showDelete, setShowDelete] = useState<boolean>(false)
    const [productToDelete, setProductToDelete] = useState<Product>()
    const [modal, setModal] = useState(false)

    const getProducts = async () => {
        setLoading(true)
        setProducts(await api.getProducts())
        setCategories(await api.getCategories())
        setLoading(false)
    }

    const editProduct = () => {
        setModal(true)
    }

    const deleteProduct = (product: Product) => {
        setProductToDelete(product)
        setShowDelete(true)
    }

    const confirmDelete = async () => {
        if(productToDelete){
            await api.deleteProduct(productToDelete.id)
            setShowDelete(false)
            getProducts()
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.productHeader}>
                <h2>Produtos</h2>

                <button>Novo produto</button>
            </div>

            <div className={styles.productsContent}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.notInSmall}>ID</th>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th className={styles.notInSmall}>Preço</th>
                            <th className={styles.notInSmall}>Categorias</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading &&
                            products.map((item) => (
                                <ProductTableItem 
                                    key={item.id}
                                    item={item}
                                    onEdit={editProduct}
                                    onDelete={deleteProduct}
                                />
                        ))}

                    </tbody>
                </table>

                {loading &&
                    <SkeletonTable />
                }
                
            </div>

            <DeleteArea 
                show={showDelete}
                setShow={setShowDelete}
                confirmDelete={confirmDelete}
            />

            {modal &&
                <ProductModal />
            }
            
        </div>
    )
}