import React from 'react'
import styles from './Blog.module.css'
import employee from '../../assets/employee.webp'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Blog = () => {
  return (
    <div className={styles.container}>
        <div className={styles.img}>
            <img src={employee}></img>
        </div>

        <div className={styles.caption}>
            <div className={styles.captiontext}>10 ways to best use TalentBoom</div>
            <ArrowRightAltIcon className={styles.icon}></ArrowRightAltIcon>
        </div>
    </div>
  )
}

export default Blog