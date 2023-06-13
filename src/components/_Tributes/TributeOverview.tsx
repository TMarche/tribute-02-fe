import Helpers from "../../helpers/helpers";
import { Item } from "../../models/Item";
import { TributeItem } from "../../models/mappings/TriibuteItem";
import { getClassById } from "../../models/tables/Classes";
import { Tribute } from "../../models/Tribute";
import Button from "../generic/Button";
import LinkButton from "../generic/LinkButton";

const TributeOverview = ({
    tribute,
    items,
    tributesItems,
    setTributes,
    deleteTribute,
}: {
    tribute: Tribute;
    items: Item[];
    tributesItems: TributeItem[];
    setTributes: (tributes: Tribute[]) => void;
    deleteTribute: (tribute: Tribute) => void;
}) => {
    return (
        <div className="relative flex bg-white flex-col gap-1 border-solid border-2 w-full drop-shadow-xl">
            <div className="flex flex-row">
                <div
                    className="absolute -top-8 left-0 w-56 h-8 leading-8 text-center overflow-hidden break-words text-white border-solid border-t-2 border-b-2 border-adornment
                    bg-decor-pattern bg-purple-950
                "
                >
                    {tribute.name}
                </div>
                <div
                    style={{ backgroundImage: `url("${tribute.image}")` }}
                    className={`relative h-full w-20 float-left bg-cover bg-center`}
                ></div>
                <div className="relative flex-1 flex flex-wrap gap-2 pl-5 pt-2 pr-5 pb-5">
                    <div>{getClassById(tribute.classId)?.name}</div>
                    <div>{tribute.level}</div>
                    <div
                        className={`font-bold ${Helpers.getHpColor(
                            tribute.currentHp,
                            tribute.maxHp
                        )}`}
                    >
                        {tribute.currentHp} / {tribute.maxHp}
                    </div>
                    <div>
                        {tribute.str} {tribute.dex} {tribute.con} {tribute.int}{" "}
                        {tribute.wis} {tribute.cha}
                    </div>
                    {tributesItems
                        .filter((ti) => ti.tributeId === tribute.tributeId)
                        .map((ti) => {
                            return (
                                <div>
                                    {
                                        items.find(
                                            (item) => item.itemId === ti.itemId
                                        )?.name
                                    }
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="absolute -bottom-4 right-4 flex flex-row gap-1 justify-end">
                <Button
                    onClick={() => {
                        deleteTribute(tribute);
                    }}
                >
                    Delete
                </Button>
                <LinkButton to={`/tributes/${tribute.tributeId}`}>
                    Edit
                </LinkButton>
            </div>
        </div>
    );
};
export default TributeOverview;
