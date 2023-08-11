import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from "./context/AuthContext";
import GlobalCssOverride from "./ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalCssOverride>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GlobalCssOverride>
  </React.StrictMode>
);

