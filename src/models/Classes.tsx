interface TributeClass {
    classId: number;
    name: string;
    hitDie: string;
}

export const TRIBUTE_CLASS_TABLE = [
    {
        classId: 0,
        name: "Fighter",
        hitDie: "1d10",
    },
    {
        classId: 1,
        name: "Cleric",
        hitDie: "1d8",
    },
    {
        classId: 2,
        name: "Wizard",
        hitDie: "1d6",
    },
    {
        classId: 3,
        name: "Rogue",
        hitDie: "1d8",
    },
    {
        classId: 4,
        name: "Barbarian",
        hitDie: "1d12",
    },
];

export const getClassById = (id: number) => {
    return TRIBUTE_CLASS_TABLE.find(
        (tributeClass: TributeClass) => tributeClass.classId === id
    );
};
