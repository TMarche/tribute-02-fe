import { Item } from "../../models/Item";
import { getIconById } from "../../models/tables/BaseIcons";
import { deleteItem } from "../../redux/features/entities/entitiesSlice";
import { useAppDispatch } from "../../redux/hooks";
import Button from "../generic/Button";
import LinkButton from "../generic/LinkButton";

const ItemOverview = ({ item }: { item: Item }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="relative flex flex-row gap-2 p-2 border-solid border-2 w-full drop-shadow-xl bg-white items-center">
            <div
                className={`h-6 aspect-square ${
                    getIconById(item.iconId)?.icon
                } bg-cover`}
            ></div>
            {/* <div className="flex-1 text-right">{item.name}</div> */}
            {item.getJSX()}
            <div className="absolute -bottom-8 right-0 flex flex-row gap-1 justify-end">
                <Button onClick={() => dispatch(deleteItem(item.itemId))}>
                    Delete
                </Button>
                <LinkButton to={`/items/${item.itemId}`}>Edit</LinkButton>
            </div>
        </div>
    );
};
export default ItemOverview;
