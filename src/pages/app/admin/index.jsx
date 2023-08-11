import React from "react";

import styled from "@emotion/styled";
import CustomButton from "../../../components/Common/CustomButton";
import TopBar from "../../../components/TopBar";
import {Modal, Typography} from "@mui/material";
import UserListTable from "../../../components/Tables/UserListTable";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import {getNewInviteCode, getUserDetails} from "../../../components/apis";

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
      alignItems: "center",
      justifyContent: "space-between",
      "& .header": {
        fontSize: "15px",
        fontWeight: "600",
      }
    }
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #E3F1FF',
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};
const Admin = () => {

  const [open, setOpen] = React.useState(false);
  const [inviteCode, setInviteCode] = React.useState("");

  const fetchNewInviteCode = async () => {
    console.log('called')
    const {data, error } = await getNewInviteCode()
    if (error){
      alert('error')
    }
    setInviteCode(data.inviteCode)
  }
  const handleOpen = async () => {
    await fetchNewInviteCode()
    setOpen(true)
  };
  const handleClose = () => setOpen(false);


  return (
    <Container>
      <TopBar />
      <div className="content">
        <div className="heading">
          <Typography className="header">User's List</Typography>
          <CustomButton
              startIcon={<AddIcon />}
              variant="contained"
              onClick={handleOpen}
          >
            New Invite
          </CustomButton>
        </div>
        <div>
          <UserListTable />
        </div>
        <Modal
            open={open}
            onClose={handleClose}
        >
          <Box sx={style}>
            <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
            >
              Invite Code
            </Typography>
            <Box
                sx={{
                  border: "1px dashed blue",
                  p: 1,
                  mt: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
            >
              <Typography
                  sx={{

                  }}
              >
                {inviteCode}
              </Typography>
            </Box>
          </Box>
        </Modal>
      </div>
    </Container>
  )
};

export default Admin;