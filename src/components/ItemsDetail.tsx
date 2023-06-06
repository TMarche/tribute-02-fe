import { Tribute } from "../models/Tribute";

const ItemsDetail = ({ tribute }: { tribute: Tribute }) => {
    return (
        <div>
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                    border-t-2 border-b-2 border-adornment"
            >
                Equipment
            </div>
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                    border-t-2 border-b-2 border-adornment"
            >
                Items
            </div>
        </div>
    );
};
export default ItemsDetail;
