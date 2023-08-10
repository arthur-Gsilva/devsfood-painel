"use client"
import { OrderType } from '@/types/order'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { api } from '@/libs/api'
import { OrderItem } from '@/components/OrderItem'

export default function Page() {

    const [focused, setFocused] = useState(false)
    const [inputSearch, setInputSearch] = useState('')

    const [orders, setOrders] = useState<OrderType[]>([])

    const getOrders = async () => {
        setInputSearch('')
        setOrders([])

        const orderList: OrderType[] = await api.getOrders()
        setOrders(orderList)
    }

    useEffect(() => {
        getOrders()
    }, [])

    return(

        <div className={styles.container}>
            <div className={styles.ordersHeader}>
                <h2>Pedidos</h2>

                <div 
                    className={styles.inputArea}
                    style={{borderBottom: focused ? '1px solid lawngreen' : '1px solid var(--main-color)'}}
                >
                    <input 
                        type="text" 
                        placeholder='Procure um pedido'
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onChange={(e) => setInputSearch(e.target.value)}
                        value={inputSearch}
                        
                    />
                    <AiOutlineSearch />
                </div>
            </div>

            <div className={styles.orders}>
                {orders.map((item) => (
                    <OrderItem item={item}/>
                ))}
            </div>
        </div>
    )
}
