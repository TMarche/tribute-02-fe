import { Item } from "../models/Item";
import { Tribute } from "../models/Tribute";
import { TributeItem } from "../models/mappings/TriibuteItem";
import { getIconById } from "../models/tables/BaseIcons";

const ItemsDetail = ({
    tribute,
    items,
    tributeItems,
}: {
    tribute: Tribute;
    items: Item[];
    tributeItems: TributeItem[];
}) => {
    return (
        <div className="drop-shadow-xl">
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                        border-t-2 border-b-2 border-adornment"
            >
                Items
            </div>

            <div className="p-5 border-2 border-t-0 flex flex-col gap-2 bg-white">
                {tributeItems.map((ti) => {
                    const item = items.find(
                        (item) => item.itemId === ti.itemId
                    );
                    return (
                        <div className="flex flex-row gap-2 border-2 p-1 items-center">
                            <div
                                className={`h-6 aspect-square ${
                                    getIconById(item?.iconId || 0)?.icon
                                } bg-cover`}
                            ></div>
                            {items
                                .find((item) => item.itemId === ti.itemId)
                                ?.getJSX() || ""}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ItemsDetail;
