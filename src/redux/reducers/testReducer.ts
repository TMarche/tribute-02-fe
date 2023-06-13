import { SET_TRUE, SET_FALSE } from "./../actions/types";
import { Action } from "redux";
import { Map } from "immutable";

const INITIAL_STATE = Map({
    testBool: "true",
});

const testReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case SET_TRUE:
            return state.set("value", "true");
        case SET_FALSE:
            return state.set("value", "false");
        default:
            return state;
    }
};

export default testReducer;
