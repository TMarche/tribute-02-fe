import { useState } from "react";
import { Tribute } from "../../models/Tribute";
import TributeOverview from "../TributeOverview";

const Tributes = () => {
    const [tributes, setTributes] = useState<Tribute[]>([]);
    const [name, setName] = useState("");

    const handleKeyPress = (event: any) => {
        if (event.key === "Enter") {
            handleAdd();
        }
    };

    const handleAdd = () => {
        const tribute = new Tribute(name);
        setTributes([...tributes, tribute]);
        setName("");
    };

    const handleDelete = (tribute: Tribute) => {
        setTributes(tributes.filter((t) => t.tributeId !== tribute.tributeId));
    };

    return (
        <div className="relative w-full">
            <div className="h-10"></div>
            <div className="absolute bg-corner bg-cover w-10 h-10 top-0 left-0" />
            <div className="absolute bg-corner bg-cover w-10 h-10 top-0 right-0 rotate-90" />
            <div className="absolute bg-corner bg-cover w-10 h-10 bottom-0 right-0 rotate-180" />
            <div className="absolute bg-corner bg-cover w-10 h-10 bottom-0 left-0 rotate-270" />
            <div className="text-5xl font-thin text-center">TRIBUTES</div>
            <div style={{ margin: "0 auto" }}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div>
                <button onClick={handleAdd}>+</button>
                Add
            </div>
            <div>
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
    );
};
export default Tributes;
