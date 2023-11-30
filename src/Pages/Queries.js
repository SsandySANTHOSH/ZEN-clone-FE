import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../components/mix.css"

const Query = () => {


    const [inpval, setInpval] = useState({
        category: "",
        voice: "",
        title: "",
        desc: "",
        userid:"",
    });

const id = localStorage.getItem("_id");
const userid= id;
console.log(id);

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

        const { category, voice,title,desc } = inpval;

        if (title === "") {
            toast.warning("Title is required!", {
                position: "top-center"
            });
        } else if (desc === "") {
            toast.error("Description is required!", {
                position: "top-center"
            });
        } 
         else {
            // console.log("user registration succesfully done");


            const data = await fetch("https://zen-be.onrender.com/query/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  category,voice,title,desc,userid
                })
            });
            console.log(data)


            const res = await data.json();
            // console.log(res.status);

            if (res.status === 200) {
                toast.success("Query Created  Successfully  😃!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, category: "", voice: "",title: "",desc:"",userid:""});
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Create Query</h1>
                        <p style={{ textAlign: "center" }}>If you having any Doubts <br/>please Create a Query</p>
                    </div>

                    <form>
                        
                    <div className="form_input">
                            <label htmlFor="role">category    </label>
                            <br/><br/>
                            <select name="category" id="category" onChange={setVal} value={inpval.category}>
                            <option >Select Category</option>

    <option >Zen-Class Doubt</option>
 <option >Placement Related</option>
 <option >Coordination Related</option>
 <option >Pre-Bootcamp Related</option>
     </select> </div>
     <br/>
     <div className="form_input">
                            <label htmlFor="role">Prefered Voice Communication Language    </label>
                            <br/><br/>
                            <select name="voice" id="voice" onChange={setVal} value={inpval.voice}>
                            <option >Select Language</option>

    <option >English</option>
 <option >Hindi</option>
 <option >Malayalam</option>
 <option >Tamil</option>
     </select> </div>
     <br/>
                       

                        <div className="form_input">
                            <label htmlFor="title">Query Title</label>
                            <input type="text" onChange={setVal} value={inpval.title} name="title" id="title" placeholder='Enter the query title' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="desc">Query Description</label>
                            <input type="text" onChange={setVal} value={inpval.desc} name="desc" id="desc" placeholder='Enter the Description' />
                        </div>
                     
                        <button className='btn' onClick={addQuerydata}>Create</button>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Query