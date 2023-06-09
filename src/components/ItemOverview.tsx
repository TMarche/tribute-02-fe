import { Item } from "../models/Item";
import Button from "./Button";
import LinkButton from "./LinkButton";

const ItemOverview = ({
    item,
    setItems,
    deleteItem,
}: {
    item: Item;
    setItems: (items: Item[]) => void;
    deleteItem: (item: Item) => void;
}) => {
    return (
        <div className="relative flex flex-row gap-1 p-2 border-solid border-2 w-full drop-shadow-xl bg-white">
            <div className={`h-full aspect-square bg-armor bg-cover`}></div>
            <div className="flex-1 text-right">{item.name}</div>
            <div className="absolute -bottom-8 right-0 flex flex-row gap-1 justify-end">
                <Button onClick={() => deleteItem(item)}>Delete</Button>
                <LinkButton to={`/items/${item.itemId}`}>Edit</LinkButton>
            </div>
        </div>
    );
};
export default ItemOverview;
