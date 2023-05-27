/* Import Styled Components and Dependencies */
import { ResetStyle } from "./style/ResetStyle.js";
import { GlobalStyle } from "./style/GlobalStyle.js";
import { BrowserRouter } from "react-router-dom";

/* Import Components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
