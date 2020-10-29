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
    deleteBusiness: (index) => dispatch(deleteBusiness(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
