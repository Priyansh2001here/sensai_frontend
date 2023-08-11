import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, {useContext, useEffect} from "react";
import IconButton from "@mui/material/IconButton";

import styled from "@emotion/styled";

import TopBar from "../../../components/TopBar";
import { Typography } from "@mui/material";
import {AuthContext} from "../../../context/AuthContext";
import {getUserDetails} from "../../../components/apis";
import EditUser from "../../../components/Sections/EditUser";

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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: theme.palette.secondary.main,
  padding: "5px",
  margin: 0,
  "& .editIcon": {
    fontSize: "1.4rem",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.2rem",
    },
  },
}));
const User = () => {

  const {updateUser, user} = useContext(AuthContext);
  const [action, setAction] = React.useState("");

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

  const editDetails = () => {
    if(action === "") {
      setAction("edit");
    } else {
      setAction("");
    }
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
          <StyledIconButton
              disableRipple={true}
              onClick={editDetails}
          >
            <EditOutlinedIcon className="editIcon" />
          </StyledIconButton>
        </div>

        {action !== "edit" ?
            <>
              <div className="info">
                <Typography className="label">Name:</Typography>
                <Typography className="value">{user.fullName}</Typography>
              </div>
              <div className="info">
                <Typography className="label">Email:</Typography>
                <Typography className="value">{user.email}</Typography>
              </div>
            </>
            :
            <EditUser editDetails={editDetails} data={user} fetchUserData={fetchUserData} />
        }

      </div>
    </Container>
  )
};

export default User;