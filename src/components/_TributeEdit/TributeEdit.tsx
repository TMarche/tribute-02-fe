import { Tribute } from "../../models/Tribute";
import PageHeader from "../generic/PageHeader";
import { useParams } from "react-router-dom";
import GridLayout from "../generic/GridLayout";
import StatsDetail from "./StatsDetail";
import ItemsDetail from "./ItemsDetail";
import PersonalInformationDetail from "./PersonalInformationDetail";
import EquipmentDetail from "./EquipmentDetail";
import AlliesDetail from "./AlliesDetail";
import EnemiesDetail from "./EnemiesDetail";
import AttackDetail from "./AttackDetail";
import { Item } from "../../models/Item";
import { TributeItem } from "../../models/mappings/TriibuteItem";

const TributeDetail = ({
    tributes,
    items,
    tributesItems,
    setTributes,
}: {
    tributes: Tribute[];
    items: Item[];
    tributesItems: TributeItem[];
    setTributes: (tributes: Tribute[]) => void;
}) => {
    const { id } = useParams();

    const tribute = tributes.find(
        (tribute) => tribute.tributeId === Number(id)
    );

    const tributeItems = tributesItems.filter(
        (ti) => ti.tributeId === tribute?.tributeId
    );

    const renderContent = () => {
        if (tribute === undefined) {
            return <PageHeader>NOT FOUND</PageHeader>;
        } else {
            return (
                <>
                    <PageHeader>{tribute.name}</PageHeader>
                    <div className="p-5">
                        <GridLayout>
                            <div className="flex flex-col gap-5">
                                <PersonalInformationDetail
                                    tribute={tribute}
                                    items={items}
                                />
                                <StatsDetail tribute={tribute} />
                            </div>
                            <div className="flex flex-col gap-5">
                                <EquipmentDetail
                                    tribute={tribute}
                                    items={items}
                                />
                                <AttackDetail tribute={tribute} items={items} />
                                <ItemsDetail
                                    tribute={tribute}
                                    items={items}
                                    tributeItems={tributeItems}
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <AlliesDetail tribute={tribute} />
                                <EnemiesDetail tribute={tribute} />
                            </div>
                        </GridLayout>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="relative flex-1 sm:p-10">
            <div className="flex flex-col border-2 bg-white drop-shadow-xl">
                {renderContent()}
            </div>
        </div>
    );
};
export default TributeDetail;
