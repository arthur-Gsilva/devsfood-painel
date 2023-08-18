import styles from './styles.module.css'


type Props = {
    setClose: (a: boolean) => void
}

export const ProductModal = ({ setClose }: Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.modalContent}>

                <h2>Edite o Produto</h2>

                <form className={styles.form}>

                    <div>
                        <label htmlFor="image">Imagem</label>
                        <input type='file' id='image' accept='image/*' placeholder='escolher imagem'/>
                    </div>

                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" />
                    </div>

                    <div>
                        <label htmlFor="price">Preço</label>
                        <input type="number" id='price'/>
                    </div>

                    <div>
                        <label htmlFor="description">Descrição</label>
                        <textarea name="description" id="description" cols={30} rows={10} className={styles.textArea}></textarea>
                    </div>
                </form>

                <div className={styles.actions}>
                    <button 
                        style={{backgroundColor: 'red'}}
                        onClick={() => setClose(false)}
                    >
                        Cancelar
                    </button>
                    <button>Salvar</button>
                </div>
            </div>
        </div>
    )
}