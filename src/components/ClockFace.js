import PropTypes from 'prop-types';
import ClockHand from "./ClockHand";

const ClockFace = props => {

    const rotationCount = {
        //number of times each hand has gone round the clock since start
        hours: Math.floor(props.clockState.secondsSinceStart / 60 / 60 / 24 / 2),
        minutes: Math.floor(props.clockState.secondsSinceStart / 60 / 60),
        seconds: Math.floor(props.clockState.secondsSinceStart / 60)
    };

    const degrees = {
        hours: (rotationCount.hours + (props.clockState.date.getHours() % 12 / 12) + (props.clockState.date.getMinutes() / 60 / 12)) * 360,
        minutes: (rotationCount.minutes + (props.clockState.date.getMinutes() / 60 )) * 360,
        seconds: (rotationCount.seconds + (props.clockState.date.getSeconds() / 60 )) * 360
    }

    return (
        <div className="clockContainer">
            <div className={"clockCircle"}>
                <ClockHand type={"hours"}
                           rotation={degrees.hours + "deg"}/>
                <ClockHand type={"minutes"}
                           rotation={degrees.minutes + "deg"}/>
                <ClockHand type={"seconds"}
                           rotation={degrees.seconds + "deg"}/>
            </div>
        </div>
    );
};

ClockFace.propTypes = {
    secondsSinceStart: PropTypes.number
};

export default ClockFace;
