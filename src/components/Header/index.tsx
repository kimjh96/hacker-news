import React from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

function Header(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>Hacker News</Toolbar>
    </AppBar>
  );
}

export default Header;
