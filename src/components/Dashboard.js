import React, { useContext, useEffect ,useState} from 'react'
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate} from "react-router-dom"
import Zenclass from './Zenclass';


//import { Button } from '@mui/material';

const Dashboard = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const [data, setData] = useState(false);
    console.log(logindata);


    const history = useNavigate();

    const StudentDashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("https://zen-be.onrender.com/user/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status === 200) {
            setLoginData(data)
            history("/dash");        } else {
           // console.log("user verify");
           history("*");
        }
    }


    useEffect(() => {
        setTimeout(() => {

            StudentDashboardValid();
            setData(true)
        },1000)

    }, [])


    //const addUserdata = async (e) => {

        // const res = await fetch(`http://localhost:5000/user/getAllUser`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });

        // const data = await res.json()

        // if (data.status == 201) {
        //     console.log("user valid")
        // } else {
        //     console.log(data);
        // }
        
    //}
    //var value = logindata.ValidUserOne.role
    //console.log(value)

    return (
        <>
            {
                data ? <div style={{display:""}} className='studentdashboard'>
                    <div className="studentdashboardsidebar">
                    <Zenclass/></div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='studentdashboardcenter'>
                    <img src="./man.png" style={{ width: "200px", marginTop: 20 }} alt="" />
                    <h1>User Name:{logindata ? logindata.ValidUserOne.fname : ""}</h1>
                    <h1> course:{logindata ? logindata.ValidUserOne.course : ""}</h1>
                    <img src='https://static.vecteezy.com/system/resources/previews/002/532/129/original/colleagues-at-business-meeting-flat-landing-page-vector.jpg' alt='loginlogo' className='login-logo'/>

                    </div>
                    

                    
   


{/* <p> <NavLink to="/adduser" className='btn btn-success'>Create User</NavLink> </p> */}
<br/>

{/* <p> <NavLink to="/viewusers">View Users</NavLink> </p> */}


{/* <button className='btn' onClick={addUserdata}>view user</button> */}


{/* <p> <div className='d-flex justify-content-end'>
    <Link to={`/viewusers`} disabled={{} } className='btn btn-primary'>Add User</Link></div> </p> */}





                </div> 
                
                
                
                : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }

        </>

    )
}

export default Dashboard