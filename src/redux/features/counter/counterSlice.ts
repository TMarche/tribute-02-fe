import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const INITIAL_STATE: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: INITIAL_STATE,
    reducers: {
        // increment
        incremented(state) {
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
        // decrement
        decremented(state) {
            state.value--;
        },
        // reset
        reset(state) {
            state.value = INITIAL_STATE.value;
        },
    },
});

export const { incremented, amountAdded, decremented, reset } =
    counterSlice.actions;
export default counterSlice.reducer;
