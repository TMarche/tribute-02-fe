import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tribute } from "../../../models/Tribute";
import { Item } from "../../../models/Item";
import { TributeItem } from "../../../models/mappings/TriibuteItem";
import { BASE_ITEMS_TABLE } from "../../../models/tables/BaseItems";

interface EntitiesState {
    tributes: Tribute[];
    items: Item[];
    tributesItems: TributeItem[];
}

const INITIAL_STATE: EntitiesState = {
    tributes: [],
    items: [...BASE_ITEMS_TABLE],
    tributesItems: [],
};

interface AddTributeActionPayload {
    tribute: Tribute;
    tributesItems?: TributeItem[];
}

const entitiesSlice = createSlice({
    name: "entities",
    initialState: INITIAL_STATE,
    reducers: {
        // TRIBUTES
        addTribute(state, action: PayloadAction<AddTributeActionPayload>) {
            const { tribute, tributesItems } = action.payload;

            // Handle tribute
            const idx = state.tributes.findIndex(
                (t) => t.tributeId === tribute.tributeId
            );
            if (idx !== -1) return;
            state.tributes.push(tribute);

            // Handle tributesItems
            if (tributesItems === undefined) return;
            tributesItems.forEach((ti) => {
                const idx = state.tributesItems.findIndex(
                    (ti2) => ti.tributeItemId === ti2.tributeItemId
                );
                if (idx !== -1) return;
                state.tributesItems.push(ti);
            });
        },
        deleteTribute(state, action: PayloadAction<number>) {
            const tributeId = action.payload;
            state.tributes = state.tributes.filter(
                (t) => t.tributeId !== tributeId
            );

            // Cascade updates to tributesItems
            state.tributesItems = state.tributesItems.filter(
                (tributeItem) => tributeItem.tributeId !== tributeId
            );
        },
        editTribute(state, action: PayloadAction<Tribute>) {
            const idx = state.tributes.findIndex(
                (tribute) => tribute.tributeId === action.payload.tributeId
            );
            if (idx === -1) return;
            state.tributes[idx] = action.payload;
        },

        // ITEMS
        addItem(state, action: PayloadAction<Item>) {
            const idx = state.items.findIndex(
                (item) => item.itemId === action.payload.itemId
            );
            if (idx !== -1) return;
            state.items.push(action.payload);
        },
        deleteItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                (item) => item.itemId !== action.payload
            );
            // Should we cascade updates to tributesItems here as well???
        },
        editItem(state, action: PayloadAction<Item>) {
            const idx = state.items.findIndex(
                (item) => item.itemId === action.payload.itemId
            );
            if (idx === -1) return;
            state.items[idx] = action.payload;
        },

        // TRIBUTE/ITEM INTERSECTION
        addTributeItem(state, action: PayloadAction<TributeItem>) {
            const idx = state.tributesItems.findIndex(
                (tributeItem) =>
                    tributeItem.tributeItemId === action.payload.tributeItemId
            );
            if (idx !== -1) return;
            state.tributesItems.push(action.payload);
        },
        deleteTributeItem(state, action: PayloadAction<number>) {
            state.tributesItems = state.tributesItems.filter(
                (tributeItem) => tributeItem.tributeItemId !== action.payload
            );
        },
        editTributeItem(state, action: PayloadAction<TributeItem>) {
            const idx = state.tributesItems.findIndex(
                (tributeItem) =>
                    tributeItem.tributeItemId === action.payload.tributeItemId
            );
            if (idx === -1) return;
            state.tributesItems[idx] = action.payload;
        },
    },
});

export const {
    addTribute,
    deleteTribute,
    editTribute,
    addItem,
    deleteItem,
    editItem,
    addTributeItem,
    deleteTributeItem,
    editTributeItem,
} = entitiesSlice.actions;
export default entitiesSlice.reducer;
