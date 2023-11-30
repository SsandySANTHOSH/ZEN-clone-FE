import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MentorQuery() {


    const _id = localStorage.getItem("_id");
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get('https://zen-be.onrender.com/query/getAllQuery')
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])

    function handleQuery(d){
        axios.put(`https://zen-be.onrender.com/query/querypick/${_id}?_id=${d._id}`)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))
    }

   
   

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Query</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>


        <div className='d-flex justify-content-start'>
        <Link to="/mentordash" className='btn btn-danger addbutton'>Back</Link>
        <Link to="/mentorpickedquery" className='btn btn-primary addbutton'>Picked Query</Link>




        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Query Id</th>
                    <th>Category</th>
                    <th>Prefered Voive</th>
                    <th>Title</th>
                    <th>Pick Query</th>
                    
                    <th>Status</th>
                    <th>Mentor Id</th>



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
                               
                                <Link className='btn btn-secondary' onClick={() =>{handleQuery(d)}}>Pick</Link>
                            </td>
                            <td>{d.status}</td>
                            <td>{d.mentorid}</td>



                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
  )
}