import { useState } from "react";
import { Tribute } from "../../models/Tribute";
import TributeOverview from "../TributeOverview";
import Button from "../Button";
import CornerAdornment from "../CornerAdornment";
import { faker } from "@faker-js/faker";

const Tributes = () => {
    const [tributes, setTributes] = useState<Tribute[]>([]);
    const [name, setName] = useState("");

    const handleKeyPress = (event: any) => {
        if (event.key === "Enter") {
            handleAdd();
        }
    };

    const handleAdd = () => {
        let nameToUse = name;
        if (nameToUse === "") {
            nameToUse = faker.person.fullName();
        }
        const tribute = new Tribute(nameToUse);
        setTributes([...tributes, tribute]);
        setName("");
    };

    const handleDelete = (tribute: Tribute) => {
        setTributes(tributes.filter((t) => t.tributeId !== tribute.tributeId));
    };

    return (
        <div className="relative flex-1 p-10">
            <CornerAdornment size={10} />
            <div className="flex flex-col gap-10">
                <div className="text-5xl font-thin text-center">TRIBUTES</div>
                <div className="flex flex-row justify-center">
                    <div className="drop-shadow">
                        <input
                            className="border-solid border-2 pl-2 outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button onClick={handleAdd}>Add</Button>
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                    {tributes.map((tribute) => (
                        <TributeOverview
                            key={tribute.tributeId}
                            tribute={tribute}
                            setTributes={setTributes}
                            deleteTribute={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Tributes;
