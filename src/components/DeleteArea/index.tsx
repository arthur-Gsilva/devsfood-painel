import styles from './styles.module.css'

type Props = {
    show: boolean,
    setShow: (a: boolean) => void,
    confirmDelete: () => void
}

export const DeleteArea = ({ show, setShow,  confirmDelete }: Props) => {

    return(
        <div className={styles.container} style={{display: show ? 'flex' : 'none'}}>
            <div className={styles.modal}>
                <div className={styles.deleteText}>
                    <h2>Deseja remover este produto?</h2>
                    <p>Depois de concluída essa ação não pode ser desfeita.</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={confirmDelete}>Sim</button>
                    <button onClick={() => setShow(false)}>Não</button>
                </div>
            </div>
        </div>
    )
}