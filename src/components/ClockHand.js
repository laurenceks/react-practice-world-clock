import PropTypes from 'prop-types';

const ClockHand = props => {
    return (<div className={"clockHand " + props.type} style={{transform: `rotate(${props.rotation})`}}/>);
};

ClockHand.propTypes = {
    type: PropTypes.string,
    rotation: PropTypes.string
};

export default ClockHand;
