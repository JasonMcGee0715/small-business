import { connect } from "react-redux";
import Listing from "../components/Listing";
import { deleteBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    business: state.business,
  };
};

const mapDispatchToProps = (dispatch) => {
  deleteBusiness = (business) => dispatch(deleteBusiness(business));
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
