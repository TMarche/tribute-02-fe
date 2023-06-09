import { Tribute } from "../models/Tribute";
import Helpers from "../helpers/helpers";
import { getClassById } from "../models/tables/Classes";

const PersonalInformationDetail = ({ tribute }: { tribute: Tribute }) => {
    return (
        <div className="drop-shadow-xl">
            <div
                className="text-white bg-purple-950 bg-decor-pattern p-2 
                    border-t-2 border-b-2 border-adornment"
            >
                Personal Information
            </div>
            <div className="p-5 border-2 border-t-0 flex flex-col gap-2 bg-white">
                <div className="border-b-2">{tribute.name}</div>
                <div className="flex flex-row">
                    <div
                        style={{
                            backgroundImage: `url("${tribute.image}")`,
                        }}
                        className="w-1/2 bg-cover bg-center"
                    />
                    <div className="flex-1 flex flex-col gap-2 ml-5 ">
                        {/*Extract into component?*/}
                        <div className="flex flex-row border-b-2">
                            <div>Lv</div>
                            <div className="flex-1 text-right">
                                {tribute.level}
                            </div>
                        </div>
                        <div className="flex flex-row border-b-2">
                            <div>HP</div>
                            <div
                                className={`flex-1 text-right font-bold ${Helpers.getHpColor(
                                    tribute.currentHp,
                                    tribute.maxHp
                                )}`}
                            >
                                {tribute.currentHp} / {tribute.maxHp}
                            </div>
                        </div>
                        <div className="flex flex-row border-b-2">
                            <div>Mv</div>
                            <div className="flex-1 text-right">
                                {tribute.movement}
                            </div>
                        </div>
                        <div className="flex flex-row border-b-2">
                            <div>AC</div>
                            <div className="flex-1 text-right">
                                {Helpers.calculateAC(tribute)}
                            </div>
                        </div>
                        <div className="flex flex-row border-b-2">
                            <div>Class</div>
                            <div className="flex-1 text-right">
                                {getClassById(tribute.classId)?.name}
                            </div>
                        </div>
                        <div className="flex flex-row border-b-2">
                            <div>Affiliation</div>
                            <div className="flex-1 text-right">Unknown</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PersonalInformationDetail;
