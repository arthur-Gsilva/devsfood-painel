import styles from './styles.module.css'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonTable = () => {
    return(
        <div style={{minHeight: '100vh'}}>
            <Skeleton height={'100vh'}/>
        </div>
    )
}