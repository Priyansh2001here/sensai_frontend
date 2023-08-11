import React, { useContext, useState } from "react";

//MUI
import styled from "@emotion/styled";
import Lock from "@mui/icons-material/Lock";
import PersonOutline from "@mui/icons-material/PersonOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//components
import CustomButton from "../Common/CustomButton";
import {loginUser} from "../../services/authAction";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router";
import {Alert} from "@mui/material";
import {updateLoginAlertMessageState} from "../../utils/helpers";

const Container = styled("div")(({ theme }) => ({
  "& .form": {
    padding: "2rem 2rem 0 2rem",
    "& .form__input": {
      display: "flex",
      width: "100%",
      alignItems: "start",
      flexDirection: "column",
      backgroundColor: theme.palette.primary.outerborder,
      border: "1px solid #E7F7F5",
      padding: "0.5rem .8rem",
      borderRadius: "14px",
      margin: "0.8rem 0",

      "& label": {
        fontSize: "9px",
        color: "grey",
        marginBottom: ".3rem",
      },
      "& .form__input__element": {
        display: "flex",
        alignItems: "center",
        width: "100%",
        "& input": {
          width: "100%",
          border: "none",
          outline: "none",
          fontSize: ".9rem",
          background: "transparent",
        },
      },
    },
  },
}));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { updateUser, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [alerting, setAlerting] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handlelogin();
    }
  };

  const handlelogin = async () => {
    setLoading(true);

    const { data, error } = await loginUser(email, password);

    if (error) {
      setLoading(false);

      updateLoginAlertMessageState(error, setAlertMessage)

      setAlerting(true);

      return;
    }

    setLoading(false);

    localStorage.setItem("token", data.token);

    setIsLoggedIn(true);

    updateUser({
      email: data.email,
      fullName: data.fullName,
      isAdmin: data.isAdmin
    });
    navigate("/app/user");

  };

  return (
    <Container>
      <div className="form">
        <div className="form__input">
          <label>User Name/Email</label>
          <div className="form__input__element">
            <PersonOutline
              sx={{ width: "1.2rem", marginRight: "0.4rem" }}
            />
            <input
              type="text"
              placeholder="Enter Username/ Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form__input">
          <label>Password</label>
          <div className="form__input__element">
            <Lock sx={{ width: "1.2rem", marginRight: "0.4rem" }} />
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
            />

            {showPassword ? (
              <Visibility onClick={showPasswordToggle} />
            ) : (
              <VisibilityOff onClick={showPasswordToggle} />
            )}
          </div>
        </div>

        <CustomButton
          fullWidth
          variant="contained"
          sx={{
            margin: "1rem 0",
            color: "#fff",
            borderRadius: "1rem",
            textTransform: "none",
          }}
          onClick={handlelogin}
          loading={loading}
        >
          Sign In
        </CustomButton>
        <div>
          {alerting &&
          <Alert
              severity="error"
              onClose={() => {}}
          >
              {alertMessage}
          </Alert>
          }
        </div>
      </div>
    </Container>
  );
};

export default SignIn;