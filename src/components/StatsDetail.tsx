import { Tribute } from "../models/Tribute";
import StatBlock from "./StatBlock";

const StatDetail = ({ tribute }: { tribute: Tribute }) => {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <div
                    className="text-white bg-purple-950 bg-decor-pattern p-2 
                    border-t-2 border-b-2 border-adornment"
                >
                    Personal Information
                </div>
                <div className="p-5 border-2 border-t-0">
                    <div className="border-b-2">{tribute.name}</div>
                    <div className="flex flex-row">
                        <div
                            style={{
                                backgroundImage: `url("${tribute.image}")`,
                            }}
                            className="w-20 bg-cover bg-center"
                        ></div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="text-white bg-purple-950 bg-decor-pattern p-2 
                    border-t-2 border-b-2 border-adornment"
                >
                    Stats
                </div>
                <div className="grid grid-cols-2 gap-5 border-2 border-t-0 p-5">
                    <StatBlock name="STR" value={tribute.str} />
                    <StatBlock name="DEX" value={tribute.dex} />
                    <StatBlock name="CON" value={tribute.con} />
                    <StatBlock name="INT" value={tribute.int} />
                    <StatBlock name="WIS" value={tribute.wis} />
                    <StatBlock name="CHA" value={tribute.cha} />
                </div>
            </div>
        </div>
    );
};
export default StatDetail;
