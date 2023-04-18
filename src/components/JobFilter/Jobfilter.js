import React, { useState } from 'react'
import styles from './Jobfilter.module.css'
import Select from 'react-select'

const Filter = ({ label, options, onChange, isMulti }) => {
    return (
        <div style={{
            width: "400px",
            maxWidth: "90%",
            textAlign:"left",
            padding: ".5em"            
        }}>
            <p style={{
                margin: ".4em 0",
                fontSize:"1.2em"
            }}>{label}</p>

            <Select
                options={options}
                onChange={onChange}
                isMulti={isMulti}
            />

        </div>
    )
}

const Jobfilter = () => {
    const [Selectedskills, setSelectedskills] = useState([]);
    const [Selectedlocation, setSelectedlocation] = useState(null);
    const [SelectedType ,setSelectedType] = useState(null);

    const allSkills = [
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'web', label: 'Web' },
        { value: 'mobile', label: 'Mobile' }
      ];
    
    const type = [
        { value: 'fulltime', label: 'Fulltime' },
        { value: 'parttime', label: 'Parttime' },
    ]

    const locations = [
        { value: 'remote', label: 'remote' },
        { value: 'office', label: 'office' },
    ]

    const handleSkillChange = (selectedOptions) => {
        setSelectedskills(selectedOptions);
        // fetchJobs(selectedOptions);
      };
    const handleLocationChange = (selectedOptions) => {
        setSelectedlocation(selectedOptions);
        // fetchJobs(selectedOptions);
      };
    const handleTypechange = (selectedOptions) => {
        setSelectedType(selectedOptions);
        // fetchJobs(selectedOptions);
      };

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Find Jobs</h1>
                <p>select tags and find your match!</p>
            </div>

            <div className={styles.tags}>
                <Filter label={"Skills"} options={allSkills} isMulti={true} onChange={handleSkillChange}/>
                <Filter label={"Location"} options={locations} isMulti={false} onChange={handleLocationChange}/>
                <Filter label={"Type"} options={type} isMulti={false} onChange={handleTypechange}/>
            </div>

            <button className={styles.btn}>
                Filter
            </button>
        </div>
    )
}

export default Jobfilter