import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MentorPickedQuery() {


    const _id = localStorage.getItem("_id");
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get(`https://capstonebackend-ivdw.onrender.com/query/getmentorQuery/${_id}`)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])

 
    function handleclose(d){
        axios.put(`https://capstonebackend-ivdw.onrender.com/query/queryreopen/${d._id}`)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))
    }


   

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Query</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>


        <div className='d-flex justify-content-start'>
        <Link to="/mentorquery" className='btn btn-danger addbutton'>Back</Link>




        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Query Id</th>
                    <th>Category</th>
                    <th>Prefered Voive</th>
                    <th>Title</th>
                    <th>Action</th>
                    <th>Close Query</th>
                    <th>Status</th>



                </tr>
            </thead>
            <tbody>
                {
                    data?.map((d, i) =>(
                        <tr key={i}>
                            <td>{d._id}</td>
                            <td>{d.category}</td>
                            <td>{d.voice}</td>
                            <td>{d.title}</td>

                            <td>
                                <Link to={`/mentorqueryread/${d._id}`} className='btn btn-sm btn-info me-2'>Read</Link>

                            </td>
                            
                            <td> <Link className='btn btn-secondary' onClick={() =>{handleclose(d)}} >Close </Link></td>
                            <td>{d.status}</td>



                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
  )
}