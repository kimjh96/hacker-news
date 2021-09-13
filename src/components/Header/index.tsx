import React from "react";
import { Link } from "react-router-dom";

// Material UI
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textDecoration: "none",
      color: "inherit"
    }
  })
);

function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link className={classes.link} to="/">
          <Typography variant="h6">Hacker News</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
