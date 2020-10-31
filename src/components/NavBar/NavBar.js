import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  // IconButton,
  Typography,
  // Button,
} from "@material-ui/core";
import { checkAuth } from "../../checkAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    paddingLeft: 25,
    paddingRight: 25,
    padding: 5,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Small Businesses of Austin
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Listing</Link>
            </li>
            {checkAuth() && (
              <li className="nav-list-item">
                <Link to="/add">Add</Link>
              </li>
            )}
            {checkAuth() ? (
              <li
                className="nav-list-item"
                onClick={() => {
                  document.cookie = "loggedIn=";
                  window.location.replace("/login");
                }}
              >
                <Link to="/login">Logout</Link>
              </li>
            ) : (
              <li className="nav-list-item">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
