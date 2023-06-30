import { Item } from "../../models/Item";
import ItemOverview from "./ItemOverview";
import PageHeader from "../generic/PageHeader";
import ItemForm from "./ItemForm";
import GridLayout from "../generic/GridLayout";
import { useAppSelector } from "../../redux/hooks";

const Items = () => {
    const items = useAppSelector((state) => state.entities.items);

    return (
        <div className="relative flex-1 sm:p-10">
            <div className="flex flex-col border-2 bg-white drop-shadow-xl">
                <PageHeader>ITEMS</PageHeader>
                <div className="p-5 pb-10 flex flex-col gap-10">
                    <div className="flex flex-row justify-center">
                        <ItemForm />
                    </div>
                    <GridLayout>
                        {items.map((item) => (
                            <ItemOverview key={item.itemId} item={item} />
                        ))}
                        {/* {items.map((item) =>
                            <ItemOverview
                                key={item.itemId}
                                item={item}
                                setItems={setItems}
                                deleteItem={handleDelete}
                            />;)} */}
                    </GridLayout>
                </div>
            </div>
        </div>
    );
};
export default Items;
