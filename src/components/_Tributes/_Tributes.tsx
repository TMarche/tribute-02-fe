import { useState } from "react";
import { Tribute } from "../../models/Tribute";
import TributeOverview from "./TributeOverview";
import PageHeader from "../generic/PageHeader";
import TributeForm from "./TributeForm";
import GridLayout from "../generic/GridLayout";
import { Item } from "../../models/Item";
import { TributeItem } from "../../models/mappings/TriibuteItem";

const Tributes = ({
    tributes,
    items,
    tributesItems,
    setTributes,
    setTributesItems,
}: {
    tributes: Tribute[];
    items: Item[];
    tributesItems: TributeItem[];
    setTributes: (tributes: Tribute[]) => void;
    setTributesItems: (tributesItems: TributeItem[]) => void;
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
                            items={items}
                            tributesItems={tributesItems}
                            setTributes={setTributes}
                            setTributesItems={setTributesItems}
                        />
                    </div>
                    <GridLayout>
                        {tributes.map((tribute) => (
                            <TributeOverview
                                key={tribute.tributeId}
                                tribute={tribute}
                                items={items}
                                tributesItems={tributesItems}
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
