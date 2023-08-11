import { useState } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

//mui
import { styled } from "@mui/material/styles";

//components
import ErrorBoundary from "../components/ErrorBoundary";
import SideBar from "../components/SideBar";
// import ModalMain from "components/Modals";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  // margin: "0 1.5rem 0 0",
  width: `calc(100vw - ${theme.spacing(0)})`,
  gap: "1.5rem",
  background: theme.palette.primary.background,
  position: "relative",
  "& .side_bar": {
    background: theme.palette.primary.light,
    width: "12%",
    height: `100vh`,
    border: `1px solid ${theme.palette.primary.outerborder}`,
    borderRadius: "0 16px 16px 0",
    transition: "width 0.4s ease-in-out",
    zIndex: 10,
    [theme.breakpoints.down("xl")]: {
      borderRadius: "0 14px 14px 0",
    },
  },
  "& .main_container": {
    minWidth: "88%",
    height: `calc(100vh - ${theme.spacing(0)})`,
    // border: "1px solid red",
    borderRadius: "14px",
    position: "absolute",
    left: `12%`
  },
}));

const AppLayout = () => {

  return (
    <Container>
      <div className="side_bar">
        <SideBar />
      </div>
      <div 
        className="main_container"
      >
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </div>
      {/* <ModalMain /> */}
    </Container>
  );
};

export default AppLayout;