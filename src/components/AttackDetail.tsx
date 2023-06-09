import Helpers from "../helpers/helpers";
import { getLevelInfo } from "../models/tables/LevelInfo";
import { Tribute } from "../models/Tribute";

const AttackDetail = ({ tribute }: { tribute: Tribute }) => {
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
                    <div className="flex-1 text-left">Iron Sword</div>
                    <div className="flex-1 text-center">
                        {Helpers.formatModifier(
                            (getLevelInfo(tribute.level)?.proficiencyBonus ||
                                0) + Helpers.calculateModifier(tribute.str)
                        )}
                    </div>
                    <div className="flex-1 text-right">
                        1d10
                        {Helpers.formatModifier(
                            Helpers.calculateModifier(tribute.str)
                        )}
                        (PH)
                    </div>
                </div>
                <div className="flex flex-row border-2 p-1 w-full items-center">
                    <div className="flex-1 text-left">
                        Fire Bolt of agonizing pain
                    </div>
                    <div className="flex-1 text-center">
                        {Helpers.formatModifier(
                            (getLevelInfo(tribute.level)?.proficiencyBonus ||
                                0) + Helpers.calculateModifier(tribute.str)
                        )}
                    </div>
                    <div className="flex-1 text-right">
                        1d10
                        {Helpers.formatModifier(
                            Helpers.calculateModifier(tribute.str)
                        )}
                        (PH)
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AttackDetail;
