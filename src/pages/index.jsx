import { useContext } from "react";
import { Navigate } from "react-router-dom";

// //context
// import { AuthContext } from "contexts/AuthContext";

const Main = () => {
  // const { user } = useContext(AuthContext);

  return <Navigate
    to={`/app/user`}
  />;
};

export default Main;