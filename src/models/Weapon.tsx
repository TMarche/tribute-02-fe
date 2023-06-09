import { Item } from "./Item";

export enum Handedness {
    One,
    Two,
}

export class Weapon extends Item {
    damageDice: string;
    handedness: Handedness;

    constructor(
        name: string,
        iconId: number,
        damageDice: string,
        handedness: Handedness
    ) {
        super(name, iconId);
        this.damageDice = damageDice;
        this.handedness = handedness;
    }

    override getJSX() {
        return (
            <>
                <div className="flex-1 text-left flex- flex-row items-center">
                    {this.name}
                </div>
                <div className="flex-1 text-left flex flex-row items-center">
                    Damage: {this.damageDice}
                </div>
            </>
        );
    }
}
