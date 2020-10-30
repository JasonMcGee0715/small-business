import React from "react";
// import { checkAuth } from "../checkAuth";
// import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Details = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Card>
              <CardContent>
                <Typography>
                  sdfsadfajsdfljaslkdfjlajsdflkjaskdjfjasdklfjklasjdflkjasldkjfkljasdlkfjklasdjfljasdfjlkasjdfljasdklfjlaksjdfljasfjsd
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography></Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
