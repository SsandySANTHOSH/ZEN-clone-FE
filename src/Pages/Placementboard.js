import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Placementboard() {


    
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get('https://capstonebackend-ivdw.onrender.com/user/getStudentOnly')
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])


    

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Students</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>


        
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>


                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) =>(
                        <tr key={i}>
                            <td>{d._id}</td>
                            <td>{d.fname}</td>
                            <td>{d.email}</td>
                            


                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
  )
}