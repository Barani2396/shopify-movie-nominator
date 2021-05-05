import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../App.scss"

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    
    <div key={alert.alertId} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
   
  ));
Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.movie.alerts,
});

export default connect(mapStateToProps)(Alert);
