import ClockFace from "./components/ClockFace";
import {useEffect, useState} from "react";
import ClockTime from "./components/ClockTime";
import SelectTime from "./components/SelectTime";

function App() {

    const initialOffset = 0;
    const addHours = (d, h) => {
        d.setTime(d.getTime() + (h * 60 * 60 * 1000));
        return d;
    };
    const [clockState, setClockState] = useState({
        date: addHours(new Date(), initialOffset),
        location: "Europe/London",
        offset: initialOffset,
        secondsSinceStart: new Date().getSeconds()
    });

    useEffect(() => {
        //update clock on next second
        const tickInterval = setTimeout(() => {
            tick();
        }, 1000 - clockState.date.getMilliseconds());

        function tick() {
            const newState = {
                ...clockState,
                date: addHours(new Date(), clockState.offset),
                secondsSinceStart: clockState.secondsSinceStart + 1
            };
            setClockState(newState);
        }

        //clearTimeout on unmount
        return () => clearTimeout(tickInterval);
    }, [clockState]);


    const setTimezone = (offset, location) => {
        const newDate = addHours(new Date(), offset);
        const newState = {
            ...clockState,
            date: newDate,
            offset: offset,
            location: location,
        }
        setClockState(newState);
    }

    return (
        <><h1 className={"pageTitle"}>React world clock</h1>
            <div className="container">
                <ClockFace clockState={clockState}/>
                <div className={"subContainer"}><ClockTime date={clockState.date} location={clockState.location}/>
                    <SelectTime setTimezone={setTimezone} location={clockState.location}/></div>
            </div>
        </>
    );
}

export default App;
