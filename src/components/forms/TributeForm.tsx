import { faker } from "@faker-js/faker";
import { Tribute } from "../../models/Tribute";
import Button from "../Button";

const TributeForm = ({
    name,
    setName,
    tributes,
    setTributes,
}: {
    name: string;
    setName: (name: string) => void;
    tributes: Tribute[];
    setTributes: (tributes: Tribute[]) => void;
}) => {
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

    return (
        <div className="drop-shadow-xl">
            <input
                placeholder="name"
                className="border-solid border-2 pl-2 h-8"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <Button onClick={handleAdd}>Add</Button>
        </div>
    );
};
export default TributeForm;
