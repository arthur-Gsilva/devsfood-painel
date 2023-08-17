
import styles from './style.module.css'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonBox = () => {
    return(
        <div className={styles.container}>
            <div className={styles.skeletonHeader}>
                
                <div style={{flex: '1'}}>
                    <Skeleton  count={3} width={'60%'}/>
                </div>

                <div>
                    <Skeleton circle style={{width: '50px', height: '50px'}}/>
                </div>
            </div>

            <div className={styles.skeletonBody}>
                <Skeleton count={3} height={'30px'}/>
            </div>
        </div>
    )
}