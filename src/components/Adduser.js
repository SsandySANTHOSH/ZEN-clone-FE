import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./mix.css"

const Adduser = () => {

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        role: "",
        course: "",
        phonenumber: "",
        password: "",
        cpassword: ""
    });

    const PHNUMBER_REGEX = /^(\+\d{1,3}[- ]?)?\d{10}$/;



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

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email,role,course,phonenumber, password, cpassword } = inpval;

        if (fname === "") {
            toast.warning("Name is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("Email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("Confirm password is required!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("password and Confirm password are not matching!", {
                position: "top-center"
            });
        } else {
            // console.log("user registration succesfully done");


            const data = await fetch("https://capstonebackend-ivdw.onrender.com/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email,role,course,phonenumber, password, cpassword
                })
            });

            const res = await data.json();
            // console.log(res.status);

            if (res.status === 200) {
                toast.success("User Added Successfully  😃!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, fname: "", email: "",role: "",course: "",phonenumber:"", password: "", cpassword: "" });
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Add User</h1>
                        <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage <br />
                            your tasks! We hope that you will get like it.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="role">Select Role    </label>
                            <br/><br/>
                            <select name="role" id="role" onChange={setVal} value={inpval.role}>
                            <option >Select Role</option>

    <option >student</option>

    <option >mentor</option>  </select>
                            
                        </div>

                        <div className="form_input">
                            <label htmlFor="course">Select course    </label>
                            <br/><br/>
                            <select name="course" id="course" onChange={setVal} value={inpval.course}>
                            <option >Select course</option>

   
                            <option >Full Stack Development</option>

<option >Devepos</option>


<option >Java </option>
<option >Data science </option>
<option >Blockchain Program </option>
<option >CAD & BIM course </option>
<option >Java Automation Testing  </option>
<option >Automation Testing  </option>
<option >UI/UX Program </option>
<option > Machine Learning Program

</option>
<option >student Web Development

</option>
<option >Master Animation 

</option>
<option >Appreneur Program 

</option>





</select>
                        
                        </div>

                        <div className="form_input">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input type="number" onChange={setVal} value={inpval.phonenumber} name="phonenumber" id="phonenumber" placeholder='Enter Your phonr Number' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata}>Add User</button>

                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Adduser;