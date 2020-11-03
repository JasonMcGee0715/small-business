import React, { useState, useEffect } from "react";
import { TextField, Button, Container } from "@material-ui/core";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const handleTextChange = (evt) => {
    if (evt.target.name === "userName") {
      setUserName(evt.target.value);
    } else {
      // setPassword(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    document.cookie = "loggedIn = true; max-age = 60*1000";
    props.userLogin(userName);
    window.location.replace("/");
  };

  useEffect(() => {
    console.log(userName);
    props.userLogin(userName);
    console.log(props.user);
  });

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            required
            onChange={handleTextChange}
            name="userName"
            label="Username"
            // placeholder="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            name="password"
            label="Password"
            // placeholder="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
