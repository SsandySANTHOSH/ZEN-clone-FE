import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


function Update() {

  const [data ,setData] = useState([])

  const {_id} = useParams();
  console.log(_id);

  
  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    role:"",
    course:"",
    phonenumber:"",
   
});


const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    console.log(data);

    setData(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
};
function handleupdate(){
    axios.put('https://zen-be.onrender.com/user'+ _id)
      .then(res =>setData(res.data.data))
      .catch(err =>console.log(err))

}

  useEffect(()=>{
      axios.get('https://zen-be.onrender.com/user/getAllUser/'+ _id)
      .then(res =>setData(res.data.data))
      .catch(err =>console.log(err))

  },[])
  return (
    <div>
        <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Update user</h1>
                        <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage <br />
                            your tasks! We hope that you will get like it.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal}  name="fname" id="fname" placeholder='Enter Your Name' value={data.fname}/>
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email"  name="email" id="email" onChange={setVal} placeholder='Enter Your Email Address'value={data.email}/>
                        </div>
                        <div className="form_input">
                            <label htmlFor="role">Select Role    </label>
                            <br/><br/>
                            <select name="role" id="role" onChange={setVal} value={data.role}>

    <option >student</option>

    <option >mentor</option>  </select>
                            
                        </div>
                        <div className="form_input">
                            <label htmlFor="course">Select course    </label>
                            <br/><br/>
                            <select name="course" id="course" onChange={setVal} value={data.course}>

    <option >Full Stack Development</option>

    <option >Devepos</option>


    <option >Java </option>
    <option >Data science </option>
    <option >Blockchain Program </option>
    <option >CAD & BIM course </option>
    <option >Java Automation Testing  </option>
    <option >Automation Testing  </option>
    <option >UI/UX Program </option>
    <option >Machine Learning Program

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
                            <input type="number" onChange={setVal} value={data.phonenumber} name="phonenumber" id="phonenumber" placeholder='Enter Your phonr Number' />
                        </div>

                       

                        <button className='btn' onClick={{handleupdate}}>Update user</button>
                    </form>
                    <ToastContainer />
                </div>
            </section>
    </div>
  )
}

export default Update