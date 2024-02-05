import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import muiTheme from './theme/muiTheme'
import defaultTheme from "./theme/defaultTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages";

function App() {
  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<p>login</p>} />
            <Route path="/" element={<Main/>} />
            <Route path="*" element={<p>nage not found</p>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
