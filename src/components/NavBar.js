import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { checkAuth } from "../checkAuth";

const NavBar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Small Businesses in Austin
        </Typography>
        <ul className="nav-list">
          <Link className="listing" to="/">
            <li className="nav-list-item">Listings</li>
          </Link>
          {checkAuth() && (
            <Link className="listing" to="/add">
              <li className="nav-list-item">Add</li>
            </Link>
          )}
          {checkAuth() ? (
            <Link className="listing" to="/">
              <li className="nav-list-item">Logged In</li>
            </Link>
          ) : (
            <Link className="listing" to="/login">
              <li>Logout</li>
            </Link>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
