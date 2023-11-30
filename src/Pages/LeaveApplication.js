import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../components/mix.css"
import { Link } from 'react-router-dom';

const LeaveApplication = () => {


    const [inpval, setInpval] = useState({
        days: "",
        from: "",
        to: "",
        reason: "",
        userid: "",
    });

const userid = localStorage.getItem("_id");


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addQuerydata = async (e) => {
        e.preventDefault();

        const { days, from,to,reason } = inpval;

        if (days === "") {
            toast.warning("Days is required!", {
                position: "top-center"
            });
        } else if (reason === "") {
            toast.error("Reason is required!", {
                position: "top-center"
            });
        } 
         else {
            // console.log("user registration succesfully done");


            const data = await fetch("https://zen-be.onrender.com/leave/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  days,from,to,reason,userid
                })
            });
           // console.log(data)


            const res = await data.json();
            // console.log(res.status);

            if (res.status === 200) {
                toast.success("Leave Application Successfully Submitted 😃!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, days: "", from: "",to: "",reason:"" ,userid:""});
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Add Leave</h1>
                        <p style={{ textAlign: "center" }}></p>
                    </div>

                    <form>
                        
                    <div className="form_input">
                            <label htmlFor="title">Days</label>
                            <input type="number" onChange={setVal} value={inpval.days} name="days" id="days" placeholder='Enter the Number of days' />
                        </div>
     <div className="form_input">
                            <label htmlFor="from">From</label>
                            <input  type="date" onChange={setVal} value={inpval.from} name="from" id="from"  />
                        </div>
                        <div className="form_input">
                            <label htmlFor="to">To</label>
                            <input  type="date" onChange={setVal} value={inpval.to} name="to" id="to"  />
                        </div>
                                            

                        <div className="form_input">
                            <label htmlFor="reason">Reason</label>
                            <input type="text" onChange={setVal} value={inpval.reason} name="reason" id="reason" placeholder='Enter Reason' />
                        </div>
                        <Link to={`/leave`} className='btn  btn-info me-2' style={{color:"white"}}>Back</Link>
                        <button className='btn' onClick={addQuerydata}>Create</button>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default LeaveApplication;