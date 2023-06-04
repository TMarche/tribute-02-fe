import { Link } from "react-router-dom";
import { Tribute } from "../models/Tribute";
import Button from "./Button";

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
        <div className="m-auto">
            <div>
                {tribute.name} {tribute.str} {tribute.dex} {tribute.con}{" "}
                {tribute.int} {tribute.wis} {tribute.cha}
            </div>
            <div>
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
    );
};
export default TributeOverview;
