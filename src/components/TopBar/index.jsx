import React, { useContext, useState } from "react";

// MUI
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

//context
// import { AuthContext } from "contexts/AuthContext";

//hooks
// import { useCurrentPath } from "hooks/useCurrentPath";

//utils
import NavLinks from "../../utils/navLinks";
import {AuthContext} from "../../context/AuthContext";

//icons
// import { ReactComponent as Arrow } from "assets/arrow.svg";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  margin: `0 0 1rem 0`,
  gap: "1.5rem",
  height: "56px",
  maxHeight: "56px",
  "& .top_bar": {
    padding: `${theme.spacing(1)}`,
    background: theme.palette.primary.light,
    width: "100%",
    display: "flex",
    border: `1px solid ${theme.palette.primary.outerborder}`,
    borderRadius: "14px",
    alignItems: "center",
    justifyContent: "flex-end",
    // [theme.breakpoints.down("xl")]: {
    //   padding: "0 0.5rem",
    // },
    "& .path": {
      paddingLeft: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      "& .section": {
        color: "#1B1C1E",
        fontWeight: "600",
        fontSize: "18px",
        [theme.breakpoints.down("xl")]: {
          fontSize: "16px",
        },
        [theme.breakpoints.down("lg")]: {
          fontSize: "14px",
        },
      },
      "& .sub_section": {
        color: "#4F4F4F",
        fontSize: "18px",
        fontWeight: "400",
        [theme.breakpoints.down("xl")]: {
          fontSize: "16px",
        },
        [theme.breakpoints.down("lg")]: {
          fontSize: "14px",
        },
      },
    },
    "& .user_info": {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      // "& .avatar_style": {
      //   "& img": {
      //     height: "40px",
      //     width: "40px",
      //     [theme.breakpoints.down("xl")]: {
      //       height: "30px",
      //       width: "30px",
      //     },
      //   },
      // },
    },
  },
}));

const TopBar = ({ diffMargin = false }) => {
  const {user, handleLogOut} = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  // const { user, handleLogOut } = useContext(AuthContext);
  const open = Boolean(anchorEl);
  // const path = useCurrentPath();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Container>
      <div className="top_bar">
        <div className="user_info">
          {/* <SettingsOutlinedIcon sx={{ marginRight: "10px" }} /> */}
          <Avatar
            sx={{ marginRight: "10px" }}
            className="avatar_style"
            src="https://thumbs.dreamstime.com/z/young-male-profile-colorful-icon-black-hair-blue-tshirt-vector-illustration-eps-81930712.jpg"
          ></Avatar>
          <span
            style={{ marginRight: "10px", fontWeight: "500", fontSize: "16px" }}
          >
             {user ? user?.fullName : ""}

          </span>
          <KeyboardArrowDownIcon
            sx={{ marginRight: "10px", height: "20px", width: "20px" }}
            onClick={handleClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={handleLogOut}
              sx={{
                fontSize: { md: "12px", lg: "14px", xl: "16px" },
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Container>
  );
};

export default TopBar;