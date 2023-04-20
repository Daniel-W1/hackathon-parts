import React from 'react'
import styles from './Avatar.module.css'

const Useravatar = ({name, img}) => {

    return (
        <div className={styles.avatar}>
            <div className={styles.circle}>
                <img src={img} alt="" />
            </div>
            <div className={styles.username}>{name}</div>
        </div>
    )
}

export default Useravatar