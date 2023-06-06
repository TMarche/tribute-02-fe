import { useState } from "react";
import { Tribute } from "../../models/Tribute";
import TributeOverview from "../TributeOverview";
import PageHeader from "../PageHeader";
import TributeForm from "../forms/TributeForm";
import GridLayout from "../layouts/GridLayout";

const Tributes = ({
    tributes,
    setTributes,
}: {
    tributes: Tribute[];
    setTributes: (tributes: Tribute[]) => void;
}) => {
    const [name, setName] = useState("");

    const handleDelete = (tribute: Tribute) => {
        setTributes(tributes.filter((t) => t.tributeId !== tribute.tributeId));
    };

    return (
        <div className="relative flex-1 sm:p-10  ">
            <div className="flex flex-col border-2 bg-white drop-shadow-xl">
                <PageHeader>TRIBUTES</PageHeader>
                <div className="p-5 flex flex-col gap-10">
                    <div className="flex flex-row justify-center">
                        <TributeForm
                            name={name}
                            setName={setName}
                            tributes={tributes}
                            setTributes={setTributes}
                        />
                    </div>
                    <GridLayout>
                        {tributes.map((tribute) => (
                            <TributeOverview
                                key={tribute.tributeId}
                                tribute={tribute}
                                setTributes={setTributes}
                                deleteTribute={handleDelete}
                            />
                        ))}
                    </GridLayout>
                </div>
            </div>
        </div>
    );
};
export default Tributes;
