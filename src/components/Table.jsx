import React from 'react'
import './Table.css'
import Useravatar from './Avatar/Avatar'
import person from '../assets/work.svg'
import LinearProgress from '@mui/material/LinearProgress';


const Table = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>Friends</th>
                    <th>General Progress</th>
                </tr>
                <tr>
                    <td><Useravatar name={"Daniel"} img={person}/></td>
                    <td><LinearProgress color='success' variant="determinate" value={100}/></td>
                </tr>
                <tr>
                    <td><Useravatar name={"Leinad"} img={person}/></td>
                    <td><LinearProgress color='success' variant="determinate" value={80}/></td>
                </tr>
                <tr>
                    <td><Useravatar name={"Bekele"} img={person}/></td>
                    <td><LinearProgress color='success' variant="determinate" value={30}/></td>
                </tr>
                <tr>
                    <td><Useravatar name={"Yosef"} img={person}/></td>
                    <td><LinearProgress color='success' variant="determinate" value={60}/></td>
                </tr>
                <tr>
                    <td><Useravatar name={"Hfaffs"} img={person}/></td>
                    <td><LinearProgress color='success' variant="determinate" value={100}/></td>
                </tr>
                <tr>
                    <td><Useravatar name={"Cfadsf"} img={person}/></td>
                    <td><LinearProgress color='success' variant="determinate" value={80}/></td>
                </tr>
                <tr>
                    <td><Useravatar name={"Gafdsdf"} img={person}/></td>
                    <td><LinearProgress color='success' variant="determinate" value={30}/></td>
                </tr>
                <tr>
                    <td><Useravatar name={"Fadfdsf"} img={person}/></td>
                    <td><LinearProgress color='success' variant="determinate" value={60}/></td>
                </tr>

            </table>
        </div>
    )
}

export default Table