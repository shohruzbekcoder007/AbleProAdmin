import React from "react"
import { ThemeProvider } from "styled-components"
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import muiTheme from './theme/muiTheme'
import defaultTheme from "./theme/defaultTheme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainDrawer from "./layout/MainLayout/Drawer"
import MainLayout from "./layout/MainLayout"
import ThemeCustomization from './themes'
import ScrollTop from './components/ScrollTop'
import DashboardDefault from './pages/dashboard'

function App() {
  return (
    <ThemeCustomization>
      {/* <ScrollTop> */}
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<p>login</p>} />
          <Route path="/" element={<MainLayout />} >
            <Route index element={<DashboardDefault />} />
          </Route>
          <Route path="*" element={<p>nage not found</p>} />
        </Routes>
      </BrowserRouter>
      {/* </ScrollTop> */}
    </ThemeCustomization>
  );
}

export default App;
