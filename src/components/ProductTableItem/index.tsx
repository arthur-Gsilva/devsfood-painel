import { Product } from '@/types/product'
import styles from './style.module.css'

import { HiOutlinePencil } from 'react-icons/hi'
import { BsTrash } from 'react-icons/bs'

type Props = {
    item: Product,
    onEdit: (item: Product) => void,
    onDelete: (item: Product) => void
}

export const ProductTableItem = ({item, onEdit, onDelete}: Props) => {
    return(
        <tr className={styles.container}>
            <th>{item.id}</th>
            <th>
                <img src={item.image} alt={item.name} />
            </th>
            <th>{item.name}</th>
            <th>{item.price}</th>
            <th>{item.category.name}</th>
            <th>
                <button>
                    <HiOutlinePencil />
                </button>
                <button>
                    <BsTrash onClick={() => onDelete(item)}/>
                </button>
            </th>
        </tr>
    )
}