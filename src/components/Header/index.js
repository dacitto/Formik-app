import React from "react";
import { Toolbar, AppBar, Typography, CssBaseline } from "@mui/material/";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ mx: "auto" }}>
            Formik
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
