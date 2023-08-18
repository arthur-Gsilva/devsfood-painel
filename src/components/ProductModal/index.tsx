import { Product } from '@/types/product'
import styles from './styles.module.css'
import { FormEvent } from 'react'
import { api } from '@/libs/api'


type Props = {
    setClose: (a: boolean) => void,
    isEdit: boolean,
    setIsEdit: (a: boolean) => void,
    item: Product | undefined,
    setItem: (a: Product | undefined) => void
}

export const ProductModal = ({ setClose, isEdit, setIsEdit, item, setItem }: Props) => {

    const closeModal = () => {
        setClose(false)
        setIsEdit(false)
        setItem(undefined)
    }

    const saveProduct = async (e: FormEvent<HTMLFormElement>) => {
        let form = new FormData(e.currentTarget)

        if(item){
            form.append('id', item.id.toString())
            await api.updateProduct(form)
        } else{
            await api.createProduct(form)
        }

        closeModal()
    }

    return(
        <div className={styles.container}>
            <div className={styles.modalContent}>

                <h2>
                    {isEdit &&
                        <>
                            Edite o produto
                        </>
                    }
                    {!isEdit &&
                        <>
                            Adicione um produto
                        </>
                    }
                </h2>

                <form className={styles.form} id='form' onSubmit={saveProduct}>

                    <div>
                        <label htmlFor="image">Imagem</label>
                        <input type='file' id='image' accept='image/*' placeholder='escolher imagem'/>
                    </div>

                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" defaultValue={item?.name} required/>
                    </div>

                    <div>
                        <label htmlFor="price">Preço</label>
                        <input type="number" id='price' defaultValue={item?.price} required/>
                    </div>

                    <div>
                        <label htmlFor="description">Descrição</label>
                        <textarea name="description" id="description" cols={30} rows={10} className={styles.textArea} defaultValue={item?.description} required>
                            
                        </textarea>
                    </div>

                    
                </form>

                <div className={styles.actions} style={{display: 'flex'}}>
                        <button 
                            style={{backgroundColor: 'red'}}
                            onClick={closeModal}
                        >
                            Cancelar
                        </button>
                        <button type='submit' form='form'>Salvar</button>
                    </div>

                

                
            </div>
        </div>
    )
}
