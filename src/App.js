import React, {useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import AppLayout from "./layout";
import {AuthContext} from "./context/AuthContext";

const LoginView = React.lazy(() => import("./pages/auth/login"));
const MainView = React.lazy(() => import("./pages"));
const ErrorView = React.lazy(() => import("./pages/error"));

//UserView
const ViewUser = React.lazy(() => import("./pages/app/user"));
const ViewAdmin = React.lazy(() => import("./pages/app/admin"));

function App() {
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainView />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="user" element={<ViewUser />} />
            {user && user.isAdmin && <Route path="admin" element={<ViewAdmin />} />}
          </Route>
        </Route>
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </Router>
  );
}

export default App;
