import React from 'react'
import { Link } from 'react-router-dom'


export default function AdminZenclass() {
  return (
    <div style={{alignItems:"start", flexDirection:"column" ,display:"flex" }} className='zen-logo'>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6N7vPdnnaAP3EwZWscwG-JqEz1iX-gpTSR0QjHw5jA&s"} alt="My logo" />


        <Link to={"/class"} style={{textDecoration: 'none'}} className='zenclone'>Class</Link>
        <Link to={"/dashboards"} style={{textDecoration: 'none'}} className='zenclone'>Dashboard</Link>
        <Link to={"/adminquery"} style={{textDecoration: 'none'}} className='zenclone'>Queries</Link>
        <Link to={"/requirements"} style={{textDecoration: 'none'}} className='zenclone'>Requirements</Link>
        <Link to={"/leaderboard"} style={{textDecoration: 'none'}} className='zenclone'>Leaderboard</Link>
        <Link to={"/placementboard"} style={{textDecoration: 'none'}} className='zenclone'>Placement Board</Link>
        <Link to={"/viewusers"} style={{textDecoration: 'none'}} className='zenclone'>Viewusers</Link>



    </div>
  )
}
