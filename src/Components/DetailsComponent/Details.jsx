import React from "react";
import { Button } from "react-bootstrap";
import SignSvg from "../Sign_svg_Container/SignSvg";
import { useNavigate} from 'react-router-dom'

const Details = () => {
  const getUserArr = localStorage.getItem("UserDetails");
  const userName = JSON.parse(getUserArr);
  // console.log('Now see', userName)
  const history = useNavigate()

const userlogout = ()=>{
    localStorage.removeItem("UserDetails")
    history('/')
}

  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <Button
              variant="primary"
              className="sm-7"
              onClick={userlogout}
              style={{ background: "rgb(67, 185, 127)" }}
            >
              Click to Logout
            </Button>
            <h3 className="text-center col-lg-4 mt-5">Welcome</h3>
            <h3 className="text-center col-lg-4"> {userName[0].name} </h3>
          </div>

          <SignSvg />
        </section>
      </div>
    </div>
  );
};

export default Details;
