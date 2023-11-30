import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminQuery() {


    
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get('https://zen-be.onrender.com/query/getAllQuery')
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])

   

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Query</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>


        <div className='d-flex justify-content-start'>
        <Link to="/admindash" className='btn btn-danger addbutton'>Back</Link>



        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Prefered Voive</th>
                    <th>Title</th>
                    <th>Picked By</th>
                    <th>Status</th>
                    <th>Action</th>



                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) =>(
                        <tr key={i}>
                            <td>{d._id}</td>
                            <td>{d.category}</td>
                            <td>{d.voice}</td>
                            <td>{d.title}</td>
                            <td>{d.mentorid}</td>
                            <td>{d.status}</td>

                            <td>
                                <Link to={`/adminqueryread/${d._id}`} className='btn btn-sm btn-info me-2'>Read</Link>

                            </td>



                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
  )
}