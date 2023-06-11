import { Item } from "../models/Item";
import { Tribute } from "../models/Tribute";

const EquipmentDetail = ({
    tribute,
    items,
}: {
    tribute: Tribute;
    items: Item[];
}) => {
    return (
        <div className="drop-shadow-xl">
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                        border-t-2 border-b-2 border-adornment"
            >
                Equipment
            </div>
            <div className="p-5 border-2 border-t-0 flex flex-col gap-2 bg-white">
                <div className="flex flex-row border-2 p-1">
                    <div>Weapon</div>
                    <div className="flex-1 text-right">
                        {
                            items.find(
                                (item) => item.itemId === tribute.weaponId
                            )?.name
                        }
                    </div>
                </div>
                <div className="flex flex-row border-2 p-1">
                    <div>Armor</div>
                    <div className="flex-1 text-right">
                        {
                            items.find(
                                (item) => item.itemId === tribute.armorId
                            )?.name
                        }
                    </div>
                </div>
                <div className="flex flex-row border-2 p-1">
                    <div>Shield</div>
                    <div className="flex-1 text-right">
                        {" "}
                        {
                            items.find(
                                (item) => item.itemId === tribute.shieldId
                            )?.name
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EquipmentDetail;
