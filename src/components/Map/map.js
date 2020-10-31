import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = (props) => {
  const mapStyles = {
    height: "65vh",
    width: "75%",
  };

  const defaultCenter = {
    lat: props.lat,
    lng: props.lng,
  };

  const selectedBusiness = [
    {
      name: props.business.name,
      location: {
        lat: props.lat,
        lng: props.lng,
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        // onGoogleApiLoaded={({ map, maps }) => this.renderMarkers()}
        // yesIWantToUseGoogleMapApiInternals
      >
        {/* <Marker lat={props.lat} lng={props.lng} /> */}
        {
          <Marker
            key={selectedBusiness.name}
            position={selectedBusiness.location}
          />
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

// ===============================================================

// import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const SimpleMap = (props) => {
//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "100vh", width: "50%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: "AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k",
//         }}
//         // defaultCenter={this.props.center}
//         // defaultZoom={this.props.zoom}
//       >
//         <AnyReactComponent lat={props.lat} lng={props.lng} text="My Marker" />
//       </GoogleMapReact>
//     </div>
//   );
// };

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33,
//     },
//     zoom: 11,
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "100vh", width: "50%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             key: "AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k",
//           }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent lat={props.lat} lng={props.lng} text="My Marker" />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;
