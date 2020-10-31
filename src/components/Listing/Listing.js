import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

// import { checkAuth } from "../checkAuth";
// import { Link } from "react-router-dom";
import {
  Container,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Paper,
} from "@material-ui/core";
import { checkAuth } from "../../checkAuth";

const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: 50,
  },
}));

const Listing = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.Container}>
      <Paper elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map((business, idx) => (
              <TableRow key={idx}>
                <TableCell
                  component={Link}
                  to={`/details/${business.id}`}
                  className="listingLink"
                >
                  {business.name}
                </TableCell>
                <TableCell>{business.description}</TableCell>
                <TableCell>{business.hours}</TableCell>
                <TableCell>{business.address}</TableCell>
                {checkAuth() && (
                  <TableCell>
                    <DeleteIcon
                      onClick={(index) => props.deleteBusiness(idx, index)}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Listing;
