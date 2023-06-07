import { Tribute } from "../models/Tribute";

const AlliesDetail = ({ tribute }: { tribute: Tribute }) => {
    return (
        <div
            className="text-white bg-purple-950 bg-decor-pattern p-2 
                    border-t-2 border-b-2 border-adornment"
        >
            Allies
        </div>
    );
};
export default AlliesDetail;
