import { LinearProgress } from '@mui/material'
import React from 'react'
import styles from './TaskCard.module.css'

const TaskCard = ({name, course, desc}) => {
  return (
    <div className={styles.container}>
        <h1>{name}</h1>
        <hr/>
        <h3>{course}</h3>
        <p>
            {desc}
        </p>
        
        <div>
          <LinearProgress color='success' variant="determinate" value={30} className={styles.progress}/>
        </div>

    </div>
  )
}

export default TaskCard