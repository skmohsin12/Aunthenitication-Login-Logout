import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignSvg from '../Sign_svg_Container/SignSvg'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {

    const history = useNavigate()
    const [inpval, setInpVal] = useState({
        email: "",
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

        const getUserArr = localStorage.getItem("UserDetails")
        console.log(getUserArr)
        
        const { email, password} = inpval;
        if(email===""){
            alert('Email is required')
        }else if(!email.includes('@')){
            alert("Please provide a valid Email ID")
        }else if (password ===""){
            alert("Plese Enter Password!")
        }else if(password.length < 5){
            alert("Password length should be Greater than 5!")
        }else{
            if(getUserArr && getUserArr.length){
                const userData = JSON.parse(getUserArr);
                const userlogin = userData.filter((ele, index)=>{
                    return ele.email === email && ele.password === password
                })

                if(userlogin.length === 0){
                    alert('Invalid Details')
                }else{
                    console.log('User successfuly login')
                    // localStorage.setItem("logged_user", JSON.stringify(getUserArr))
                    history("/details")
                }
            }
            
        }
    
    }
    





    return (
        <>
        <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{width: "100%"}}>
            <h3 className="text-center col-lg-4">Sign_In</h3>
            <Form>

              <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />
              </Form.Group>

              

              <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={getData} placeholder="Enter Password" />
              </Form.Group>
              
              <Button variant="primary" onClick={addData} className="col-lg-7" style={{background: "rgb(67, 185, 127)"}} type="submit">
                Submit
              </Button>
            </Form>
              <p className="mt-4">To Create an account <span> <Link to='/signup'>Sign_Up</Link> </span></p>
          </div>
          
            <SignSvg />
        </section>
      </div>

            
        </>
    );
};

export default Login;