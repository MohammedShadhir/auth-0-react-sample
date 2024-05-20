import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Auth0 App
        </Typography>
        {!isAuthenticated && (
          <Button color="inherit" onClick={() => loginWithRedirect()}>
            Log In
          </Button>
        )}
        {isAuthenticated && (
          <Button
            color="inherit"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
