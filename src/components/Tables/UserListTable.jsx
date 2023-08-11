import React, {useContext, useEffect, useState} from "react";

//MUI
import styled from "@emotion/styled";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import {deleteUser, getUserList} from "../apis";
import {AuthContext} from "../../context/AuthContext";

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  height: "56px",
  maxHeight: "56px",
  "& .header_row": {
    background: "#084B83",
    "& .header": {
      color: "#FFFFFF",
      fontSize: "15px",
      fontWeight: "700",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "12px",
      },
    }
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  "& .table_data_style": {
    color: "#303030",
    fontWeight: "500",
    fontSize: "14px",
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    borderRadius: "20px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
    },
    "& .link_style": {
      color: "#084B83",
      fontWeight: "600",
      "&:hover": {
        color: "#3EBFAB",
      }
    }
  },
  "& .table_data_num": {
    color: "#303030",
    fontWeight: "500",
    fontSize: "14px",
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    borderRadius: "20px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
    },
    "& .numbers_style": {
      padding: "0.4rem 1.4rem",
      borderRadius: "14px",
    }
  }

}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: "8px",
  padding: "5px",
  "& .delIcon": {
    fontSize: "1.4rem",
    color: "#FF5252",
    background: "#EFFFFD",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.2rem",
    },
  },
}));

const headers = [
  "Name",
  "Email",
];


const UserListTable = () => {
  const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(false);
  const fetchUserList = async () => {
    const {data, error} = await getUserList();

    if (error) {
      setLoading(false);
      // showAlert("Invalid Credentials", "error");
      return;
    }
    setUsers([...data?.users])

  }

  useEffect(() => {
    fetchUserList()
  }, []);

  const handleDelete = async (eventData) => {
    const {data, error} = await deleteUser(eventData.id);
    if (error) {
      setLoading(false);
      alert("Invalid Credentials", "error");
      return;
    }
    setLoading(true);

    await fetchUserList();

    setLoading(false);
    console.log(eventData)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <StyledTableHead>
          <TableRow className="header_row">
            {headers.map((val, index) => {
              return (
                <TableCell
                  className="header"
                  key={index}
                  align="center"
                >
                  {val}
                </TableCell>
              );
            })}
            <TableCell
              className="header"
              align="center"
            >
            </TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {users.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="center">
                <Typography className="table_data_num">
                  {row.fullName}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography className="table_data_num">
                  {row.email}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                  {!row.isAdmin &&
                <StyledIconButton
                  disableRipple={true}
                  onClick={() => handleDelete(row)}
                >
                  <DeleteOutlineOutlinedIcon className="delIcon" />
                </StyledIconButton>}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserListTable;