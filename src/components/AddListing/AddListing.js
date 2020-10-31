import React from "react";
import MapContainer from "../Map";
import { Typography, Box, Grid, GridItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    width: "70%",
    marginLeft: "24%",
    marginRight: "25%",
    marginTop: 50,
  },
}));

const AddListing = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>
            <Box display="flex" flexDirection="column">
              <h3>Text</h3>
              <Typography>Text</Typography>
              <Typography>Text</Typography>
              <Typography>Text</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
    // <Box display="flex" flexDirection="column" className={classes.body}>
    //   <h3>{business.name}</h3>
    //   <Typography>{business.address}</Typography>
    //   <Typography>Hours: {business.hours}</Typography>
    //   <Typography>{business.description}</Typography>
    //   <br></br>
    //   <div>
    //     <MapContainer
    //       lat={business.coordsLat}
    //       lng={business.coordsLng}
    //       business={business}
    //     />
    //   </div>
    // </Box>
  );
};

export default AddListing;

// import React from "react";
// import MapContainer from "../Map";
// import { Typography, Box } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   body: {
//     width: "70%",
//     marginLeft: "24%",
//     marginRight: "25%",
//     marginTop: 50,
//   },
// }));

// const Details = ({ businesses, match }) => {
//   const classes = useStyles();
//   const id = parseInt(match.params.id);
//   const business = businesses.find((entry) => entry.id === id);

//   return (
//     <Box display="flex" flexDirection="column" className={classes.body}>
//       <h3>{business.name}</h3>
//       <Typography>{business.address}</Typography>
//       <Typography>Hours: {business.hours}</Typography>
//       <Typography>{business.description}</Typography>
//       <br></br>
//       <div>
//         <MapContainer
//           lat={business.coordsLat}
//           lng={business.coordsLng}
//           business={business}
//         />
//       </div>
//     </Box>
//   );
// };

// export default Details;
