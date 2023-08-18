import styles from './styles.module.css'

export const ProductModal = () => {
    return(
        <div className={styles.container}>
            <div className={styles.modalContent}>

                <h2>Edite o Produto</h2>
                <form>

                    <label htmlFor="image">Adicione uma imagem</label>
                    <input type='name' id='image'/>

                    <label htmlFor="number">Adicione um número</label>
                    <input type="number" id="number" />
                </form>
            </div>
        </div>
    )
}