import TributeOverview from "./TributeOverview";
import PageHeader from "../generic/PageHeader";
import TributeForm from "./TributeForm";
import GridLayout from "../generic/GridLayout";
import { useAppSelector } from "../../redux/hooks";

const Tributes = () => {
    const tributes = useAppSelector((state) => state.entities.tributes);

    return (
        <div className="relative flex-1 sm:p-10  ">
            <div className="flex flex-col border-2 bg-white drop-shadow-xl">
                <PageHeader>TRIBUTES</PageHeader>
                <div className="p-5 flex flex-col gap-10">
                    <div className="flex flex-row justify-center">
                        <TributeForm />
                    </div>
                    <GridLayout>
                        {tributes.map((tribute) => (
                            <TributeOverview
                                key={tribute.tributeId}
                                tribute={tribute}
                            />
                        ))}
                    </GridLayout>
                </div>
            </div>
        </div>
    );
};
export default Tributes;
