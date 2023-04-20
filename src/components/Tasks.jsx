import React from 'react'
import TaskCard from './TaskCard'
import styles from './Tasks.module.css'

const Tasks = () => {
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque obcaecati ipsam eos veritatis, qui eum sequi libero eveniet aliquam recusandae. Et, expedita doloremque labore repudiandae perferendis dolores cumque quidem."

    const task = {
        name: "Sign up page",
        course: "ReactJs",
        key: 0,
        desc: desc
      }

  return (
    <div className = {styles.container}>
        <TaskCard {...task}/>
        <TaskCard {...task}/>
        <TaskCard {...task}/>
        <TaskCard {...task}/>
        <TaskCard {...task}/>
        <TaskCard {...task}/>
        <TaskCard {...task}/>
    </div>
  )
}

export default Tasks