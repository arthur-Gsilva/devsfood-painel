"use client"

import { OrderType } from '@/types/order'
import styles from './page.module.css'
import { ChangeEvent, useEffect, useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { api } from '@/libs/api'
import { OrderItem } from '@/components/OrderItem'
import { orderStatusType } from '@/types/orderStatus'


import { SkeletonBox } from '@/components/skeletonBox'

export default function Page() {

    const [focused, setFocused] = useState(false)
    const [inputSearch, setInputSearch] = useState<string>('')

    const [orders, setOrders] = useState<OrderType[]>([])
    const [filteredOrders, setFilteredOrders] = useState<OrderType[]>([])
    const [loading, setLoading] = useState(false)

    const getOrders = async () => {
        setLoading(true)
        setInputSearch('')
        setOrders([])

        const orderList: OrderType[] = await api.getOrders()
        setOrders(orderList)
        setLoading(false)
    }

    const changeStatus = async (id: number, newStatus: orderStatusType) => {
        await api.changeOrderStatus(id, newStatus)
        getOrders()
    }

    const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setInputSearch(e.target.value)

        if(e.target.value !== ''){

            const newOrders: OrderType[] = orders.filter((order) =>
                order.id.toString().includes(e.target.value)
            )

            setFilteredOrders(newOrders)
        } else{
            setFilteredOrders(orders)
        }
    }

    useEffect(() => {
        getOrders()
    }, [])

    useEffect(() => {
        setFilteredOrders(orders)
    }, [orders])

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
                        onChange={changeEvent}
                        value={inputSearch}
                        
                    />
                    <AiOutlineSearch />
                </div>
            </div>

            <div className={styles.orders}>
                {!loading &&
                    filteredOrders.map((item) => (
                        <OrderItem key={item.id} item={item} onChangeStatus={changeStatus}/>
                    ))
                }
            </div>

            {loading &&
                    <div className={styles.skeletonArea}>
                        <SkeletonBox />
                        <SkeletonBox />
                        <SkeletonBox />
                        <SkeletonBox />
                        <SkeletonBox />
                        <SkeletonBox />
                    </div>
                    
                }


        </div>
    )
}
