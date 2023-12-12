import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


export default function StudentQuery() {

const _id = localStorage.getItem("_id");
    
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get(`https://capstonebackend-ivdw.onrender.com/query/getUserQueryonly/${_id}`)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])
    console.log(data)

    function handleclose(d){
        axios.put(`https://capstonebackend-ivdw.onrender.com/query/queryclose/${d._id}`)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))
    }
    function handlereopen(d){
        if(data.status == "closed"){
            axios.put(`https://capstonebackend-ivdw.onrender.com/query/querystudentreopen/${d._id}`)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

        }else{
           // alert("welcome");
           alert("Query is Not Assigned or Closed")
            toast.warning("Query is Not Assigned or Closed", {
                position: "top-center"
            });
        }
    }



   
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Queries</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>



        <div className='d-flex justify-content-end'>

        <Link to="/dash" className='btn btn-danger studentbackbutton'>Back</Link>

            <Link to="/queries" className='btn btn-success'>Create Query</Link>


        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Voice</th>
                    <th>Action</th>
                    <th>Assigned to</th>
                    <th>Status</th>


                </tr>
            </thead>
            <tbody>
                {
                    data?.map((d, i) =>(
                        <tr key={i}>
                            <td>{d._id}</td>
                            <td>{d.category}</td>
                            <td>{d.title}</td>
                            <td>{d.voice}</td>
                            <td>
                                <Link  className='btn btn-sm btn-info me-2' onClick={() =>{handleclose(d)}}>close</Link>
                                {/* <Link  className='btn btn-sm btn-info me-2' onClick={() =>{handlereopen(d)}}>Reopen</Link> */}


                            </td>
                            <td>{d.mentorid}</td>
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