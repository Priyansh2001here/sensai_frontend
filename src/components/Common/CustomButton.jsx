import Button from "@mui/material/Button";

const CustomButton = ({ children, loading, ...restProps }) => {
  return (
    <Button
      disableElevation
      disableRipple
      sx={{ textTransform: "none" }}
      disabled={loading}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;