import timezones from "../data/timeList";
import TimeOption from "./TimeOption";

const SelectTime = (props) => {
    return (
        <div>
            <select onChange={(e) => props.setTimezone(e.target.value, e.target.options[e.target.selectedIndex].text)}>
                {timezones.map(x => <TimeOption key={x.label} value={x.value} label={x.label}/>)}
            </select>
        </div>
    );
};

export default SelectTime;
