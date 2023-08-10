import { OrderType } from '@/types/order'
import styles from './styles.module.css'

type Props = {
    item: OrderType
}

export const OrderItem = ({ item }: Props) => {
    return(
        <div className={styles.container}>
            <h1>{item.username}</h1>
        </div>
    )
}
    