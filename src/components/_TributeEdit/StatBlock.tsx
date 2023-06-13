import Helpers from "../../helpers/helpers";
import CornerAdornment from "../generic/CornerAdornment";

const StatBlock = ({ name, value }: { name: string; value: number }) => {
    const max = 20;

    return (
        <div className="flex flex-row">
            <div className="relative w-12">
                <div className="text-center bg-purple-950 text-white bg-decor-pattern">
                    {name}
                </div>
                <div className="bg-white border-2 border-t-0 text-3xl h-14 w-12 text-center">
                    {value}
                </div>
                <div
                    style={{
                        bottom: "-12px",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                    className="absolute bg-white border-2 w-8 text-center p-1 pt-0 pb-0"
                >
                    {Helpers.formatModifier(Helpers.calculateModifier(value))}
                </div>
            </div>
            <div className="flex flex-col justify-center p-2 flex-1">
                <div className="relative flex flex-row">
                    <div
                        style={{ flex: `${value} ${value} 0%` }}
                        className={`h-8 bg-purple-950`}
                    ></div>
                    <div
                        style={{ flex: `${max - value} ${max - value} 0%` }}
                        className={`flex-[2_2_0%] h-8 bg-purple-100`}
                    ></div>
                </div>
            </div>
        </div>
    );
};
export default StatBlock;
