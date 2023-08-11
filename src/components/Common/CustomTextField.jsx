import React from "react";

// MUI
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const Container = styled("div")(({ theme }) => ({
    width: "100%",
    "& .MuiInputLabel-root": {
        fontSize: "15px",
        color: "#4F4F4F",
        [theme.breakpoints.down('xl')] : {
            fontSize: "14px",
        }
    },
    "& .MuiOutlinedInput-root": {
        paddingLeft: "5px",
    },
    "& .text-field-style": {
        fontSize: "16px",
        height: "18px",
        color: "#222222",
        [theme.breakpoints.down('xl')]: {
            height: "15px",
            fontSize: "14px",
        },
    }
}))

const CustomTextField = ({
                             value,
                             label,
                             inputProps,
                             ...restProps
                         }) => {
    let newInputProps = {
        className: "text-field-style"
    };
    return (
        <Container>
            <TextField
                label={label}
                size="small"
                value={value}
                {...restProps}
                inputProps={inputProps ? inputProps : {newInputProps}}
            />
        </Container>
    );
};

export default CustomTextField;