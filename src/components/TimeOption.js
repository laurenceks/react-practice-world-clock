import PropTypes from 'prop-types';

const TimeOption = props => {
    return (
        <option value={props.value}>{props.label}</option>
    );
};

TimeOption.propTypes = {
    value: PropTypes.number,
    label: PropTypes.string
};

export default TimeOption;
