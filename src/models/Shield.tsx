import { Item } from "./Item";

export class Shield extends Item {
    acBonus: number;

    constructor(name: string, iconId: number, acBonus: number) {
        super(name, iconId);
        this.acBonus = acBonus;
    }

    override getJSX() {
        return (
            <>
                <div className="flex-1 text-left flex- flex-row items-center">
                    {this.name}
                </div>
                <div className="flex-1 text-left flex flex-row items-center">
                    AC: +{this.acBonus}
                </div>
            </>
        );
    }
}
