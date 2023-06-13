import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PageHeader from "../generic/PageHeader";
import Button from "../generic/Button";
import {
    incremented,
    decremented,
    amountAdded,
    reset,
} from "../../redux/features/counter/counterSlice";

const ReduxTest = () => {
    const counter = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className="relative flex-1 sm:p-10">
            <div className="flex flex-col border-2 bg-white drop-shadow-xl">
                <PageHeader>REDUX TEST</PageHeader>
                <div className="p-5 flex flex-row justify-center">
                    <div className="w-2/3 flex flex-row justify-between">
                        <div>Counter Value: {counter}</div>
                        <div className="flex flex-row gap-2">
                            <Button onClick={() => dispatch(incremented())}>
                                Increment
                            </Button>
                            <Button onClick={() => dispatch(decremented())}>
                                Decrement
                            </Button>
                            <Button onClick={() => dispatch(amountAdded(3))}>
                                Add 3
                            </Button>
                            <Button onClick={() => dispatch(reset())}>
                                Reset
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReduxTest;
