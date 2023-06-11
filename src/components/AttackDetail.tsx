import Helpers from "../helpers/helpers";
import { Item } from "../models/Item";
import { getLevelInfo } from "../models/tables/LevelInfo";
import { Tribute } from "../models/Tribute";
import { Weapon } from "../models/Weapon";

const AttackDetail = ({
    tribute,
    items,
}: {
    tribute: Tribute;
    items: Item[];
}) => {
    const weapon = items.find((item) => item.itemId === tribute.weaponId);

    return (
        <div className="drop-shadow-xl">
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                        border-t-2 border-b-2 border-adornment"
            >
                Attacks
            </div>
            <div className="p-5 border-2 border-t-0 flex flex-col gap-2 bg-white">
                <div className="flex flex-row border-2 p-1 w-full items-center">
                    <div className="flex-1 text-left">{weapon?.name}</div>
                    <div className="flex-1 text-center">
                        Hit:{" "}
                        {Helpers.formatModifier(
                            (getLevelInfo(tribute.level)?.proficiencyBonus ||
                                0) + Helpers.calculateModifier(tribute.str)
                        )}
                    </div>
                    <div className="flex-1 text-right">
                        Damage: {(weapon as Weapon)?.damageDice}
                        {Helpers.formatModifier(
                            Helpers.calculateModifier(tribute.str)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AttackDetail;
