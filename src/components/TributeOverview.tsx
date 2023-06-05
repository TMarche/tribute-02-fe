import { Link } from "react-router-dom";
import { Tribute } from "../models/Tribute";
import Button from "./Button";
import CornerAdornment from "./CornerAdornment";

const TributeOverview = ({
    tribute,
    setTributes,
    deleteTribute,
}: {
    tribute: Tribute;
    setTributes: (tributes: Tribute[]) => void;
    deleteTribute: (tribute: Tribute) => void;
}) => {
    return (
        <div className="flex flex-row justify-center">
            <div className="relative flex flex-col gap-1 p-5 border-solid border-2 w-3/5">
                <CornerAdornment size={8} />
                <div>{tribute.name}</div>
                <div className="inline-block">
                    {tribute.str} {tribute.dex} {tribute.con} {tribute.int}{" "}
                    {tribute.wis} {tribute.cha}
                </div>
                <div className="absolute -bottom-4 right-10 flex flex-row gap-1 justify-end">
                    <Button
                        onClick={() => {
                            deleteTribute(tribute);
                        }}
                    >
                        Delete
                    </Button>
                    <Link to={`/tributes/${tribute.tributeId}`}>
                        <Button>Edit</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default TributeOverview;
