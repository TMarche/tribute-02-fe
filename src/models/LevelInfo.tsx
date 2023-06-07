interface LevelInfo {
    level: number;
    proficiencyBonus: number;
}

export const LEVEL_INFO_TABLE: LevelInfo[] = [
    {
        level: 1,
        proficiencyBonus: 2,
    },
    {
        level: 2,
        proficiencyBonus: 2,
    },
    {
        level: 3,
        proficiencyBonus: 2,
    },
    {
        level: 4,
        proficiencyBonus: 2,
    },
    {
        level: 5,
        proficiencyBonus: 3,
    },
    {
        level: 6,
        proficiencyBonus: 3,
    },
    {
        level: 7,
        proficiencyBonus: 3,
    },
    {
        level: 8,
        proficiencyBonus: 3,
    },
    {
        level: 9,
        proficiencyBonus: 4,
    },
    {
        level: 10,
        proficiencyBonus: 4,
    },
    {
        level: 11,
        proficiencyBonus: 4,
    },
    {
        level: 12,
        proficiencyBonus: 4,
    },
    {
        level: 13,
        proficiencyBonus: 5,
    },
    {
        level: 14,
        proficiencyBonus: 5,
    },
    {
        level: 15,
        proficiencyBonus: 5,
    },
    {
        level: 16,
        proficiencyBonus: 5,
    },
    {
        level: 17,
        proficiencyBonus: 6,
    },
    {
        level: 18,
        proficiencyBonus: 6,
    },
    {
        level: 19,
        proficiencyBonus: 6,
    },
    {
        level: 20,
        proficiencyBonus: 6,
    },
];

export const getLevelInfo = (level: number) => {
    return LEVEL_INFO_TABLE.find(
        (levelInfo: LevelInfo) => levelInfo.level === level
    );
};
