import { useSelector } from "react-redux";
import PageHeader from "../generic/PageHeader";
import { RootState } from "../../redux/reducers";

const ReduxTest = () => {
    const testValue = useSelector((state: RootState) =>
        state.test.get("testBool")
    );

    return (
        <div className="relative flex-1 sm:p-10">
            <div className="flex flex-col border-2 bg-white drop-shadow-xl">
                <PageHeader>HOME</PageHeader>
                <div className="p-5 flex flex-row justify-center">
                    <div className="w-2/3">Test Value: {testValue}</div>
                </div>
            </div>
        </div>
    );
};
export default ReduxTest;
