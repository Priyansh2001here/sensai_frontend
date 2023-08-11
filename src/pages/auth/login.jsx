import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

//MUI
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Lock from "@mui/icons-material/Lock";
import PersonOutline from "@mui/icons-material/PersonOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//Components
import CustomButton from "../../components/Common/CustomButton";
import BulbImage from "../../assets/images/login_page_bulb.png";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignIn/SignUp";

//Context
import { AuthContext } from "../../context/AuthContext";

//utils
// import { loginUser } from "utils/authActions";

const PageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100vh",
  overflow: "hidden",

  "& .left__side": {
    width: "60%",
    background: "#100708",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "55%",
    },
    "& .image_style": {
      width: "55%",
      [theme.breakpoints.down("xl")]: {
        width: "58%",
      },
      [theme.breakpoints.down("lg")]: {
        width: "62%",
      }
    },
    "& .left__side__text": {
      position: "absolute",
      color: "#fff",
      bottom: "0",
      left: 0,
      margin: "1rem 0",
    },
    "& .left_heading": {
      fontSize: "26px !important",
      margin: "0 1rem 1rem 1rem",
      letterSpacing: 1.2,
      opacity: 0.4,
      [theme.breakpoints.down("xl")]: {
        fontSize: "22px !important",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "18px !important",
      },
    },
    "& .left_content": {
      margin: "0 1rem",
      fontSize: "14px",
      [theme.breakpoints.down("xl")]: {
        fontSize: "12px",
      },
    },
  },

  "& .right__side": {
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      width: "40%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "45%",
    },
    "& .form_wrapper": {
      border: `1px solid ${theme.palette.primary.main}`,
      width: "80%",
      height: "60%",
      borderRadius: "14px",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      "& .user_selector": {
        display: "flex",
        borderTopRightRadius: "14px",
        borderTopLeftRadius: "14px",
        // background: "#FFFFFF",
        height: "8%",
        "& .user": {
          width: "50%",
          borderRight: `1px solid ${theme.palette.primary.main}`,
          borderBottom: `1px solid ${theme.palette.primary.main}`,
        },
        "& .admin": {
          width: "50%",
          borderBottom: `1px solid ${theme.palette.primary.main}`,
        },
        "& .button_style": {
          width: "100%",
          fontWeight: "600",
          fontSize: "14px",
          height: "100%",
        },
        "& .selected_user": {
          background: "#FFFFFF",
          borderTopLeftRadius: "14px",
        },
        "& .selected_admin": {
          background: "#FFFFFF",
          borderTopRightRadius: "14px",
        },
      },
      "& .register": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .register_btn": {
          padding: 0,
        },
      },
      // "& .form": {
      //   padding: "2rem",
      //   "& .form__input": {
      //     display: "flex",
      //     width: "100%",
      //     alignItems: "start",
      //     flexDirection: "column",
      //     backgroundColor: theme.palette.primary.outerborder,
      //     border: "1px solid #E7F7F5",
      //     padding: "0.5rem .8rem",
      //     borderRadius: "14px",
      //     margin: "0.8rem 0",

      //     "& label": {
      //       fontSize: "9px",
      //       color: "grey",
      //       marginBottom: ".3rem",
      //     },
      //     "& .form__input__element": {
      //       display: "flex",
      //       alignItems: "center",
      //       width: "100%",
      //       "& input": {
      //         width: "100%",
      //         border: "none",
      //         outline: "none",
      //         fontSize: ".9rem",
      //         background: "transparent",
      //       },
      //     },
      //   },
      // },
    },
  },
}));

const LoginPage = () => {
  const user = !!localStorage.getItem("token");

  const [showPassword, setShowPassword] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState("user");
  const [userFormat, setUserFormat] = useState("signin");

  if (user) {
    return <Navigate to="/" replace />;
  }

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handlelogin();
    }
  };

  const handleUserType = (event) => {
    console.log(event);
    let value = event.target.id;
    if (value === "admin") {
      setUserFormat("signin");
    }
    setSelectedUserType(value);
  };

  const handleRegister = (event) => {
    let value = event.target.id;
    setUserFormat(value);
  }

  const handlelogin = async () => {
    // setLoading(true);
    // const { data, error } = await loginUser(email, password);
    // if (error) {
    //   setLoading(false);
    //   showAlert("Invalid Credentials", "error");
    //   return;
    // }
    // setLoading(false);
    // localStorage.setItem("token", data.token);
    // setIsLoggedIn(true);
    // updateUser(data);
  };

  return (
    <PageContainer>
      <Box className="left__side">
        <img
          src={BulbImage}
          height="100%"
          alt="bulb"
          className="image_style"
        />
      </Box>
      <Box className="right__side">
        <Box className="form_wrapper">
          <div className="user_selector">
            <div className={selectedUserType === "user" ? `user selected_user` : "user"}>
              <CustomButton
                className="button_style"
                id="user"
                onClick={(e) => handleUserType(e)}
              >
                User
              </CustomButton>
            </div>
            <div className={selectedUserType === "admin" ? `admin selected_admin` : "admin"}>
              <CustomButton
                className="button_style"
                id="admin"
                onClick={(e) => handleUserType(e)}
              >
                Admin
              </CustomButton>
            </div>
          </div>
          {userFormat === "signin" ?
            <SignIn /> :
            <SignUp userFormat={userFormat} setUserFormat={setUserFormat}/>
          }
          <div className="register">
            {userFormat === "signin" && selectedUserType === "user" ?
              <CustomButton
                id="signup"
                onClick={(e) => handleRegister(e)}
                className="register_btn"
              >
                Register Now
              </CustomButton> :
              userFormat === "signup" && selectedUserType === "user" ?
                <CustomButton
                  id="signin"
                  onClick={(e) => handleRegister(e)}
                >
                  Sign In
                </CustomButton> :
                <></>
            }
          </div>

        </Box>
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
