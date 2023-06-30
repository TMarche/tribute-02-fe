import { faker } from "@faker-js/faker";
import { Tribute } from "../../models/Tribute";
import Button from "../generic/Button";
import { TributeItem } from "../../models/mappings/TriibuteItem";
import { Item } from "../../models/Item";
import { Weapon } from "../../models/Weapon";
import { Armor } from "../../models/Armor";
import { Shield } from "../../models/Shield";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { addTribute } from "../../redux/features/entities/entitiesSlice";

const TributeForm = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.entities.items);

    const [name, setName] = useState<string>("");

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
        const itemsToAdd: Item[] = [];

        // Grab a random weapon, armor, and shield
        const weapons = items.filter((item) => item instanceof Weapon);
        const armors = items.filter((item) => item instanceof Armor);
        const shields = items.filter((item) => item instanceof Shield);

        const weapon = weapons[Math.floor(Math.random() * weapons.length)];
        const armor = armors[Math.floor(Math.random() * armors.length)];
        const shield = shields[Math.floor(Math.random() * shields.length)];

        if (weapon) {
            itemsToAdd.push(weapon);
            tribute.weaponId = weapon.itemId;
        }
        if (armor) {
            itemsToAdd.push(armor);
            tribute.armorId = armor.itemId;
        }
        if (shield) {
            itemsToAdd.push(shield);
            tribute.shieldId = shield.itemId;
        }

        const tributesItems = itemsToAdd.map(
            (item) => new TributeItem(tribute.tributeId, item.itemId)
        );
        dispatch(addTribute({ tribute, tributesItems }));
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
