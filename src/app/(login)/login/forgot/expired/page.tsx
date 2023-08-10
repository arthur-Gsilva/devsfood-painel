import Link from 'next/link'
import styles from './page.module.css'

import { FiAlertOctagon } from 'react-icons/fi'

const Page = () => {
    return(
        
        <div className={styles.container}>
            <div className={styles.alert}>
                <FiAlertOctagon />
                Este link espirou, refaça o procedimento
            </div>

            <Link href={'/login/forgot'}>ESQUECI MINHA SENHA</Link>
        </div>
    )
}

export default Page