import { Tribute } from "../../models/Tribute";

const AlliesDetail = ({ tribute }: { tribute: Tribute }) => {
    return (
        <div className="drop-shadow-xl">
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                        border-t-2 border-b-2 border-adornment"
            >
                Allies
            </div>
            <div className="p-5 border-2 border-t-0 flex flex-col gap-2 bg-white">
                Not Implemented
            </div>
        </div>
    );
};
export default AlliesDetail;
