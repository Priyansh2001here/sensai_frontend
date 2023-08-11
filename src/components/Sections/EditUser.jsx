import React, { useState, useEffect } from "react";

// MUI
import styled from "@emotion/styled";

import CustomTextField from "../Common/CustomTextField";
import CustomButton from "../Common/CustomButton";
import {updateUser} from "../apis";

const Container = styled("div")(({ theme }) => ({
  background: theme.palette.primary.light,
  borderRadius: "14px",
  padding: "1.5rem 2rem",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: `${theme.palette.secondary.main}`,
  },
  "& .option_container": {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.3rem",
  },
  "& .option_name": {
    width: "25%",
    fontSize: "16px",
    color: "#4F4F4F",
    [theme.breakpoints.down('xl')]: {
      fontSize: "14px",
    }
  },
  "& .option_input": {
    width: "75%",
    display: "flex",
    gap: "0.5rem",
  },
  "& .option_input_smar_group": {
    width: "70%",
    display: "flex",
    gap: "0.5rem",
  },
  "& .button_style": {
    borderRadius: "20px",
    color: "#FFFFFF",
    background: theme.palette.primary.main,
    width: "20%",
    fontSize: "16px",
    [theme.breakpoints.down('xl')]: {
      fontSize: "14px",
    }
  },
  "& .cancel_style": {
    borderRadius: "20px",
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    fontWeight: "500",
    width: "20%",
    fontSize: "16px",
    [theme.breakpoints.down('xl')]: {
      fontSize: "14px",
    }
  }
}));

const initialState = {
  fullName: "",
  email: "",
};

const EditUser = ({ editDetails, data, fetchUserData }) => {
  const [state, setState] = useState(initialState);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(state)

    editDetails();
    await fetchUserData();
  };

  useEffect(() => {
    if (data) {
      setState({
        fullName: data.fullName || "",
        email: data.email ||"",
      })
    }
  }, [data])

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <div className="option_container">
          <span className="option_name">Name</span>
          <div className="option_input">
            <CustomTextField
              value={state.fullName}
              name="fullName"
              label="Enter Name"
              variant="outlined"
              onChange={handleTextChange}
              sx={{ width: "80%" }}
              required
            />
          </div>
        </div>
        <div className="option_container">
          <span className="option_name">Email</span>
          <div className="option_input">
            <CustomTextField
              value={state.email}
              name="email"
              label="Enter Email"
              variant="outlined"
              onChange={handleTextChange}
              sx={{ width: "80%" }}
              required
            />
          </div>
        </div>
        <div className="option_container">
          <div className="option_name"></div>
          <div className="option_input">
            <CustomButton variant="contained" className="button_style" type="submit">Save</CustomButton>
            <CustomButton variant="outlined" className="cancel_style" onClick={editDetails}>Cancel</CustomButton>
          </div>
        </div>
      </Container>
    </form>
  );
};

export default EditUser;