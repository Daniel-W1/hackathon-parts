import React from 'react'
import styles from './Blogsection.module.css'
import Blog from '../BlogCard/Blog'

const Blogsection = () => {
    return (
        <div className={styles.container}>
            <h1>Read our blogs</h1>
            <p className={styles.subheading}>Finding a job should not be a full-time endeavor. Tell us what you are searching for, and we will find you a job.</p>

            <div className={styles.blogs}>
                <Blog/>
                <Blog/>
                <Blog/>
            </div>

            <div className={styles.button}>
                Read All Articles
            </div>
        </div>
    )
}

export default Blogsection