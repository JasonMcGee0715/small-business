import { connect } from "react-redux";
import Listing from "../components/Listing";
import { deleteBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBusiness: (business) => dispatch(deleteBusiness(business)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
