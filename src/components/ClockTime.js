import PropTypes from 'prop-types';

const ClockTime = props => {
    return (
        <div>
            <h3>{props.location}</h3>
            <p> {`0${props.date.getHours()}`.slice(-2)}:{`0${props.date.getMinutes()}`.slice(-2)}:{`0${props.date.getSeconds()}`.slice(-2)}</p>
        </div>
    );
};

ClockTime.propTypes = {
    date: PropTypes.object
};

export default ClockTime;
