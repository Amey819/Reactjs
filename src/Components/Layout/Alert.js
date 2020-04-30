import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// created a div for an alrt message to be displayed on the page
const Alert = ({alerts}) => {
    return(
    alerts != null && alerts.length > 0 && alerts.map(alert => (
        <div key = {alert.id} className = {`alert alert-${alert.alert_Type}`}>
                {alert.msg}
        </div>
    )));
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,

};

const mapStateToProps = state =>({
    alerts: state.alert
});
export default connect(mapStateToProps)(Alert);
