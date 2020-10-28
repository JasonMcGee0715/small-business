import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    business: state.business,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBusiness: (business) => dispatch(addBusiness(business)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
