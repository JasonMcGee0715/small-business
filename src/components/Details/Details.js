import React from "react";
import MapContainer from "../Map";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    width: "70%",
    marginLeft: "24%",
    marginRight: "25%",
    marginTop: 50,
  },
}));

const Details = ({ businesses, match }) => {
  const classes = useStyles();
  const id = parseInt(match.params.id);
  const business = businesses.find((entry) => entry.id === id);

  return (
    <Box display="flex" flexDirection="column" className={classes.body}>
      <h3>{business.name}</h3>
      <Typography>{business.address}</Typography>
      <Typography>{business.hours}</Typography>
      <Typography>{business.description}</Typography>
      <br></br>
      <div>
        <MapContainer
          lat={business.coordsLat}
          lng={business.coordsLng}
          business={business}
        />
      </div>
    </Box>
  );
};

export default Details;
