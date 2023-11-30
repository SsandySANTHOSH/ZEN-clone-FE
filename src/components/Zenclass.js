import React from 'react'
import { Link } from 'react-router-dom'


export default function Zenclass() {
  return (
    <div style={{alignItems:"start", flexDirection:"column" ,display:"flex" }} className='zen-logo'>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6N7vPdnnaAP3EwZWscwG-JqEz1iX-gpTSR0QjHw5jA&s"} alt="My logo" />


        <Link to={"/class"} style={{textDecoration: 'none'}} className='zenclone'>Class</Link>
        <Link to={"/dashboards"} style={{textDecoration: 'none'}} className='zenclone'>Dashboard</Link>
        <Link to={"/task"} style={{textDecoration: 'none'}} className='zenclone'>Task</Link>
        <Link to={"/webcode"} style={{textDecoration: 'none'}} className='zenclone'>Webcode</Link>
        <Link to={"/capstone"} style={{textDecoration: 'none'}} className='zenclone'>Capstone</Link>
        <Link to={"/studentquery"} style={{textDecoration: 'none'}} className='zenclone'>Queries</Link>
        <Link to={"/requirements"} style={{textDecoration: 'none'}} className='zenclone'>Requirements</Link>
        <Link to={"/portfolio"} style={{textDecoration: 'none'}} className='zenclone'>Portfolio </Link>
        <Link to={"/applications"} style={{textDecoration: 'none'}} className='zenclone'>Applications</Link>
        <Link to={"/interviewtask"} style={{textDecoration: 'none'}} className='zenclone'>Interview Task</Link>
        <Link to={"/leave"} style={{textDecoration: 'none'}} className='zenclone'>Leave Applications</Link>
        <Link to={"/mockinterview"} style={{textDecoration: 'none'}} className='zenclone'>Mock Interview</Link>
        <Link to={"/certificate"} style={{textDecoration: 'none'}} className='zenclone'>Certificate</Link>
        <Link to={"/testimonial"} style={{textDecoration: 'none'}} className='zenclone'>Testimonial</Link>
        <Link to={"/leaderboard"} style={{textDecoration: 'none'}} className='zenclone'>Leaderboard</Link>
        <Link to={"/syllabus"} style={{textDecoration: 'none'}} className='zenclone'>Syllabus</Link>
        <Link to={"/placementboard"} style={{textDecoration: 'none'}} className='zenclone'>Placement Board</Link>


    </div>
  )
}
