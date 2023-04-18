import React from 'react'
import styles from './Trusted.module.css'
import googlesrc from '../../assets/google.png'
import a2svsrc from '../../assets/a2sv.jfif'
import metasrc from '../../assets/meta.png'

const Trusted = () => {
  return (
    <div className={styles.container}>
      <p className={styles.trusted}>Trusted by 25,000+ happy Marketers and talented users since 2023</p>

      <div className={styles.featured}>
        <p>Also featured in:</p>

        <div className={styles.companies}>
          <div className={styles.img}>
            <img src={googlesrc} alt='google image'></img>
          </div>
          <div className={styles.img}>
            <img src={a2svsrc} alt='a2sv image'></img>
          </div>
          <div className={styles.img}>
            <img src={metasrc} alt='meta image'></img>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Trusted