import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignSvg from '../Sign_svg_Container/SignSvg'
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {

    const history = useNavigate()

const [inpval, setInpVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
})
const [data, setData] = useState([]);
// console.log(inpval)

const getData = (e)=>{
    // console.log(e.target.value)

    const {value, name} = e.target;

    setInpVal(()=>{
        return{
            ...inpval,
            [name]: value
        }
    })
}

const addData = (e)=>{
    e.preventDefault();
    
    const {name, email, date, password} = inpval;
    if(name ===""){
        alert('Pleae fill User Name')
    } else if(email===""){
        alert('Email is required')
    }else if(!email.includes('@')){
        alert("Please provide a valid Email ID")
    }else if (date===""){
        alert('Date is required!')
    }else if (password ===""){
        alert("Plese Enter Password!")
    }else if(password.length < 5){
        alert("Password length should be Greater than 5!")
    }else{
        // console.log("Data added successfully :)")
        localStorage.setItem("UserDetails", JSON.stringify([...data,inpval]));
        history("/")
    }

}

  return (
    <>
    
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{width: "100%"}}>
            <h3 className="text-center col-lg-4">Sign_Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" name="name" onChange={getData} placeholder="Enter Your Name" />
              </Form.Group>


              <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="date" onChange={getData} />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={getData} placeholder="Enter Password" />
              </Form.Group>
              
              <Button variant="primary" onClick={addData} className="col-lg-7" style={{background: "rgb(67, 185, 127)"}} type="submit">
                Submit
              </Button>
            </Form>
              <p className="mt-4">Already have an account <span> <Link to='/'>Sign_In</Link> </span></p>
          </div>
          
            <SignSvg />
        </section>
      </div>
    </>
  );
};

export default Home;
