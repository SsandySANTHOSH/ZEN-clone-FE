import React, { useContext, useEffect ,useState} from 'react'
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate} from "react-router-dom"
import Zenclass from './Zenclass';
import AdminZenclass from './Adminzenclass';


//import { Button } from '@mui/material';

const AdminDashboard = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const [data, setData] = useState(false);


    const history = useNavigate();

    const AdminDashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("https://capstonebackend-ivdw.onrender.com/user/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status === 200 ) {
            setLoginData(data)
            history("/admindash");        } else {
           // console.log("user verify");
           history("*");
        }
    }


    useEffect(() => {
        setTimeout(() => {

            AdminDashboardValid();
            setData(true)
        },1000)

    }, [])


    //const addUserdata = async (e) => {

        // const res = await fetch(`http://localhost:5000/getAllUser`, {
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
                    <AdminZenclass/></div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='studentdashboardcenter'>
                    <img src="./man.png" style={{ width: "200px", marginTop: 20 }} alt="" />
                    <h1>User Name:{logindata ? logindata.ValidUserOne.fname : ""}</h1>
                    <h1 style={{color:"blue"}}>Welcome Admin</h1>
                    <img src='https://i.pinimg.com/originals/ac/33/fd/ac33fda087da31a81d2f4edf21c334a8.jpg' alt='loginlogo' className='login-logo'/>


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

export default AdminDashboard