import { faker } from "@faker-js/faker";
import { Tribute } from "../../models/Tribute";
import Button from "../Button";
import { TributeItem } from "../../models/mappings/TriibuteItem";
import { Item } from "../../models/Item";
import { Weapon } from "../../models/Weapon";
import { Armor } from "../../models/Armor";
import { Shield } from "../../models/Shield";

const TributeForm = ({
    name,
    setName,
    tributes,
    items,
    tributesItems,
    setTributes,
    setTributesItems,
}: {
    name: string;
    setName: (name: string) => void;
    tributes: Tribute[];
    items: Item[];
    tributesItems: TributeItem[];
    setTributes: (tributes: Tribute[]) => void;
    setTributesItems: (tributesItems: TributeItem[]) => void;
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
        const tributeItems: Item[] = [];

        // Grab a random weapon, armor, and shield
        const weapons = items.filter((item) => item instanceof Weapon);
        const armors = items.filter((item) => item instanceof Armor);
        const shields = items.filter((item) => item instanceof Shield);

        const weapon = weapons[Math.floor(Math.random() * weapons.length)];
        const armor = armors[Math.floor(Math.random() * armors.length)];
        const shield = shields[Math.floor(Math.random() * shields.length)];

        if (weapon) {
            tributeItems.push(weapon);
            tribute.weaponId = weapon.itemId;
        }
        if (armor) {
            tributeItems.push(armor);
            tribute.armorId = armor.itemId;
        }
        if (shield) {
            tributeItems.push(shield);
            tribute.shieldId = shield.itemId;
        }

        // let itemsCopy = [...items];
        // // Grab three random items from the items list
        // for (let i = 0; i < 3; i++) {
        //     const currentIndex = Math.floor(Math.random() * itemsCopy.length);
        //     const currentItem = itemsCopy[currentIndex];
        //     itemsCopy = [
        //         ...itemsCopy.slice(0, currentIndex),
        //         ...itemsCopy.slice(currentIndex + 1),
        //     ];
        //     if (!currentItem) break;
        //     tributeItems = [...tributeItems, currentItem];
        // }

        setTributesItems([
            ...tributesItems,
            ...tributeItems.map(
                (item) => new TributeItem(tribute.tributeId, item.itemId)
            ),
        ]);
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
