import React, {useContext, useEffect} from "react";

import styled from "@emotion/styled";

import TopBar from "../../../components/TopBar";
import { Typography } from "@mui/material";
import {AuthContext} from "../../../context/AuthContext";
import {getUserDetails} from "../../../components/apis";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "1rem 1rem 0 1rem",
  "& .content": {
    height: `calc(100vh - ${theme.spacing(13)})`,
    border: `1px solid ${theme.palette.primary.outerborder}`,
    borderRadius: "14px",
    padding: "1rem",
    "& .heading": {
      marginBottom: "1rem",
      "& .header": {
        fontSize: "15px",
        fontWeight: "600",
      },
    },
    "& .info": {
      display: "flex",
      gap: "2rem",
      "& .label": {
        fontSize: "14px",
        fontWeight: "600",
      },
      "& .value": {
        fontSize: "14px",
        fontWeight: "400",
      },
    }
  }
}))

const User = () => {

  const {updateUser, user} = useContext(AuthContext);
  const fetchUserData = async () => {
    const {data, error } =await getUserDetails()
    if (error){
      alert('error')
    }
    updateUser({
      email: data.email,
      fullName: data.fullName,
      isAdmin: data.isAdmin
    });
  }


  useEffect(() => {
    fetchUserData()
    // if (error) {
    //   setLoading(false);
    //   // showAlert("Invalid Credentials", "error");
    //   return;
    // }
    // setLoading(false);
    // localStorage.setItem("token", data.token);
    //
    // setIsLoggedIn(true);
    // updateUser(data);
  }, []);

  return (
    <Container>
      <TopBar />
      <div className="content">
        <div className="heading">
          <Typography className="header">User's Info</Typography>
        </div>
        <div className="info">
          <Typography className="label">Name:</Typography>
          <Typography className="value">{user.fullName}</Typography>
        </div>
        <div className="info">
          <Typography className="label">Email:</Typography>
          <Typography className="value">{user.email}</Typography>
        </div>
      </div>
    </Container>
  )
};

export default User;