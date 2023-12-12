import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import PasswordReset from "./components/PasswordReset";
import ForgotPassword from "./components/ForgotPassword";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import "./App.css";
import Viewusers from "./components/viewusers";
import Adduser from "./components/Adduser";
import Read from "./Read";
//import Update from "./Update";
import 'bootstrap/dist/css/bootstrap.min.css'
import MentorDashboard from "./components/MentorDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Class from "./Pages/Class";
import Dashboardss from "./Pages/Dashboardss";
import Task from "./Pages/Task";
import Queries from "./Pages/Queries";
import Webcode from "./Pages/Webcode";
import Capstone from "./Pages/Capstone";
import Requirments from "./Pages/Requirments";
import Portfolio from "./Pages/Portfolio";
import Applications from "./Pages/Applications";
import Leave from "./Pages/Leave";
import Mockinterview from "./Pages/Mockinterview";
import Certificate from "./Pages/Certificate";
import Testimonial from "./Pages/Testimonial";
import Leaderboard from "./Pages/Leaderboard";
import Syllabus from "./Pages/Syllabus";
import Placementboard from "./Pages/Placementboard";
import Interviewtask from "./Pages/Interviewtask";
import LeaveApplication from "./Pages/LeaveApplication";
import ViewStudent from "./Pages/ViewStudent";
import ViewMentor from "./Pages/ViewMentor";
import MentorQuery from "./Pages/MentorQuery";
import MentorQueryRead from "./Pages/MentorQueryRead";
import StudentQuery from "./Pages/StudentQuery";
import AdminQuery from "./Pages/AdminQuery";
import AdminQueryRead from "./Pages/AdminQueryRead";
import MentorPickedQuery from "./Pages/MentorPickedQuery";



function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("https://capstonebackend-ivdw.onrender.com/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();
    ///////datas
    
    // const [datas ,setDatas] = useState([])
    // const {_id} = useParams();
    // console.log(_id);


    

    // useEffect(()=>{
    //   axios.get('http://localhost:5000/user/getAllUser/'+ _id)
    //   .then(res =>setDatas(res.data.data))
    //   .catch(err =>console.log(err))
    //   //console.log(data)

    // },[])
    



    /////write











    if (data.status == 400 || !data) {
      console.log("user not valid");
    } else {
      //console.log("user verify");
      setLoginData(data)
    
    }
  }

  useEffect(() => {
      DashboardValid();
      setData(true)

  }, [])


  return (
    <>
      {
        data ? (
          <>
            <Header />

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
              <Route path="*" element={<Error />} />
              <Route path="/adduser" element={<Adduser />} />
              <Route path="/viewusers" element={<Viewusers />} />
              <Route path="/read/:_id" element={<Read />} />
              {/* <Route path="/update/:_id" element={<Update />} /> */}
              <Route path="/read" element={<Read />} />
              <Route path="/mentordash" element={<MentorDashboard />} />
              <Route path="/admindash" element={<AdminDashboard />} />
              <Route path="/class" element={<Class />} />
              <Route path="/dashboards" element={<Dashboardss />} />
              <Route path="/queries" element={<Queries />} />
              <Route path="/webcode" element={<Webcode />} />
              <Route path="/capstone" element={<Capstone />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/leave" element={<Leave />} />
              <Route path="/requirements" element={<Requirments />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/mockinterview" element={<Mockinterview />} />
              <Route path="/placementboard" element={<Placementboard />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/interviewtask" element={<Interviewtask />} />
              <Route path="/task" element={<Task />} />
              <Route path="/leaveapplication" element={<LeaveApplication />} />
              <Route path="/viewstudent" element={<ViewStudent />} />
              <Route path="/viewmentor" element={<ViewMentor />} />
              <Route path="/mentorquery" element={<MentorQuery />} />
              <Route path="/mentorqueryread/:_id" element={<MentorQueryRead />} />
              <Route path="/studentquery" element={<StudentQuery />} />
              <Route path="/adminquery" element={<AdminQuery />} />
              <Route path="/adminqueryread/:_id" element={<AdminQueryRead />} />
              <Route path="/mentorpickedquery" element={<MentorPickedQuery/>} />















              









            </Routes>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default App;