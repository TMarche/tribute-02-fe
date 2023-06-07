import { Tribute } from "../models/Tribute";
import StatBlock from "./StatBlock";

const StatDetail = ({ tribute }: { tribute: Tribute }) => {
    return (
        <div className="drop-shadow-xl">
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                    border-t-2 border-b-2 border-adornment"
            >
                Stats
            </div>
            <div className="grid grid-cols-2 gap-5 border-2 border-t-0 p-5 bg-white">
                <StatBlock name="STR" value={tribute.str} />
                <StatBlock name="DEX" value={tribute.dex} />
                <StatBlock name="CON" value={tribute.con} />
                <StatBlock name="INT" value={tribute.int} />
                <StatBlock name="WIS" value={tribute.wis} />
                <StatBlock name="CHA" value={tribute.cha} />
            </div>
        </div>
    );
};
export default StatDetail;
