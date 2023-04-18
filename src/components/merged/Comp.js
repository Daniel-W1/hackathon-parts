import React from 'react'
import Stat from '../statstics/Stat'
import Trusted from '../trusted/Trusted'
import styles from './Comp.module.css'

const Comp = () => {
  return (
    <div className={styles.comp}>
        <Stat/>
        <Trusted/>
    </div>
  )
}

export default Comp