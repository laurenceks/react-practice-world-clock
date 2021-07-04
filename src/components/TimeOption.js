import PropTypes from 'prop-types';

const TimeOption = props => {
    return (
        <option selected={`${props.location === props.label ? "selected" : ""}`} value={props.value}>{props.label}</option>
    );
};

TimeOption.propTypes = {
    value: PropTypes.number,
    label: PropTypes.string
};

export default TimeOption;
