import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState();
  useEffect(() => {
    getuserData();
  }, []);
  const getuserData = async () => {
    try {
      const response = await axios.get("/currentuser");
      if (response.data.success) {
        console.log(response.data.data);
        setuserdata(response.data.data);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Session timed out! Login again");
        navigate("/login");
      } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("/logout");
      if (response.data.success) {
        toast.success("You were logged out successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };
  return (
    <>
      <div className="mainbody">
        <h1>Hello {userdata.username}, Welcome Back!</h1>
        <p>
          Age :{new Date().getFullYear() - new Date(userdata.dob).getFullYear()}{" "}
          years
        </p>
        <p>email : {userdata.email}</p>
        <p>Under 18? : {userdata.isUnder18 ? "Yes" : "No"}</p>
        <p>Phone number : {userdata.mobileno} </p>
        <button type="button" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
