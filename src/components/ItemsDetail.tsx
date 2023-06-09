import { Tribute } from "../models/Tribute";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./drag-and-drop/StrictModeDroppable";

// fake data generator
const generateItems = (count: number) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
        id: `item-${k}`,
        content: `item ${k}`,
    }));

// a little function to help us with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
});

const grid = 8;

const ItemsDetail = ({ tribute }: { tribute: Tribute }) => {
    const [items, setItems] = useState(generateItems(10));

    const onDragEnd = (result: any) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const newItems = reorder(
            items,
            result.source.index,
            result.destination.index
        );

        setItems(newItems);
    };

    return (
        <div className="drop-shadow-xl">
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                        border-t-2 border-b-2 border-adornment"
            >
                Items
            </div>

            <div className="p-5 border-2 border-t-0 flex flex-col gap-2 bg-white">
                <div className="flex flex-row border-2 p-1">
                    <div className="flex-1 text-right">Iron Sword (PH)</div>
                </div>
                <div className="flex flex-row border-2 p-1">
                    <div className="flex-1 text-right">Iron Sword (PH)</div>
                </div>
                <div className="flex flex-row border-2 p-1">
                    <div className="flex-1 text-right">Iron Sword (PH)</div>
                </div>
                <div className="flex flex-row border-2 p-1">
                    <div className="flex-1 text-right">Full Plate (PH)</div>
                </div>
            </div>
        </div>
    );
};
export default ItemsDetail;
