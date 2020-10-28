import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    business: state.business,
  };
};

const mapDispatchToProps = (dispatch) => {
  addBusiness = (business) => dispatch(addBusiness(business));
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
