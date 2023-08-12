import { OrderType } from '@/types/order'
import styles from './styles.module.css'
import { orderStatusType } from '@/types/orderStatus'
import { ChangeEvent } from 'react'
import { formmatter } from '@/libs/formmatter'

type Props = {
    item: OrderType,
    onChangeStatus: (id: number, newStatus: orderStatusType) => void
}

export const OrderItem = ({ item, onChangeStatus }: Props) => {

    const getBackgroundColor = (status: orderStatusType) => {
        const statuses = {
            preparing: '#2787ba',
            sent: '#27ba3a',
            delivered: '#999'
        }
        return statuses[status]
    }

    const changeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeStatus(item.id, e.target.value as orderStatusType)
    }

    return(
        <div className={styles.container}>
            <div className={styles.orderHeader}
                style={{backgroundColor: getBackgroundColor(item.status)}}
            >
                <div className={styles.orderHeaderInfo}>
                    <p>{formmatter.dateFormmatter(item.orderDate)}</p>
                    <p>{item.username}</p>
                    <button>Imprimir</button>
                    <p></p>
                </div>
                <div className={styles.orderID}>
                    #{item.id}
                </div>
            </div>

            <div className={styles.select}>
                <select value={item.status} onChange={changeStatus}>
                    <option value="preparing">preparando</option>
                    <option value="sent">enviado</option>
                    <option value="delivered">entregue</option>
                </select>
            </div>
            
            <div className={styles.orderItems}>
                {item.product.map((item) => (
                    <p key={item.product.id}>
                        <strong>{item.qt}x {item.product.name}</strong>
                    </p>
                ))}
            </div>
        </div>
    )
}
    