import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//import { LoginContext } from './ContextProvider/Context';


function AdminQueryRead() {



    
    const [data ,setData] = useState([])
    const {_id} = useParams();
    console.log(_id)


    function range(){


        axios.get('https://capstonebackend-ivdw.onrender.com/query/getAllQuery/'+ _id)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))
        //console.log(data)
    }

    useEffect(()=>{
        range()

    },[])
    

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h3>Details of User</h3>
            <div className='mb-2'>
                <strong>Id: {data._id}</strong>
            </div>
            <div className='mb-2'>
                <strong>Category: {data.category}</strong>
            </div>
            <div className='mb-2'>
                <strong>Prefered Language: {data.voice}</strong>
            </div>
            <div className='mb-2'>
                <strong>Title: {data.title}</strong>
            </div>
            <div className='mb-2'>
                <strong>Description: {data.desc}</strong>
            </div>
            <Link to="/adminquery" className='btn btn-danger ms-3'>Back</Link>
        </div>


    </div>
  )
}

export default AdminQueryRead