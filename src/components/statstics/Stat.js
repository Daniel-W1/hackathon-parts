import React from 'react'
import star from '../../assets/star.png'
import heart from '../../assets/heart.png'
import styles from './Stat.module.css'

const Stat = () => {
    return (
        <div className={styles.container}>

            <div className={styles.downloads}>
                <p className={styles.big}>10K</p>
                <div className={styles.line}></div>
                <div className={styles.hearts}>
                    <div className={styles.heartdiv}>
                        <img src={heart}></img>
                    </div>
                    <div className={styles.heartdiv}>
                        <img src={heart}></img>
                    </div>
                    <div className={styles.heartdiv}>
                        <img src={heart}></img>
                    </div>
                    <div className={styles.heartdiv}>
                        <img src={heart}></img>
                    </div>
                    <div className={styles.heartdiv}>
                        <img src={heart}></img>
                    </div>

                </div>
                <p className={styles.caption}>Active downloads on Websites</p>
            </div>
            <div className={styles.rating}>
                <p className={styles.big}>4.9</p>
                <div className={styles.line}></div>
                <div className={styles.stars}>
                    <div className={styles.stardiv}>
                        <img src={star}></img>
                    </div>
                    <div className={styles.stardiv}>
                        <img src={star}></img>
                    </div>
                    <div className={styles.stardiv}>
                        <img src={star}></img>
                    </div>
                    <div className={styles.stardiv}>
                        <img src={star}></img>
                    </div>
                    <div className={styles.stardiv}>
                        <img src={star}></img>
                    </div>
                </div>
                <p className={styles.caption}>2,000 african talent community</p>
            </div>

        </div>
    )
}

export default Stat