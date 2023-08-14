import { Product } from '@/types/product'
import styles from './style.module.css'

import { HiOutlinePencil } from 'react-icons/hi'
import { BsTrash } from 'react-icons/bs'
import { formmatter } from '@/libs/formmatter'

type Props = {
    item: Product,
    onEdit: (item: Product) => void,
    onDelete: (item: Product) => void
}

export const ProductTableItem = ({item, onEdit, onDelete}: Props) => {
    return(
        <tr className={styles.container}>
            <td className={styles.notInSmall}>{item.id}</td>
            <td>
                <img src={item.image} alt={item.name} />
            </td>
            <td>
                <p>
                    {item.name} <br />
                    <span className={styles.smallPrice}>{
                        formmatter.formatPrice(item.price)
                    }</span>
                </p>
            </td>
            <td className={styles.notInSmall}>{formmatter.formatPrice(item.price)}</td>
            <td className={styles.notInSmall}>
                {item.category.name}
            </td>
            <td className={styles.buttons}>
                <button className={styles.editBtn}>
                    <HiOutlinePencil />
                </button>
                <button className={styles.deleteBtn}>
                    <BsTrash onClick={() => onDelete(item)}/>
                </button>
            </td>
        </tr>
    )
}