const monsters = [
    {
        name: "Bomb Shank",
        description: "Small construct (Eliksni)",
        ac: "15 (natural armor)",
        hp: "47 (19d6 - 19)",
        speed: "fly 30 ft. (can hover)",
        stats: {
            str: 8,
            dex: 10,
            con: 8,
            int: 4,
            wis: 4,
            cha: 2
        },
        damageVulnerabilities: "explosive",
        damageImmunities: "poison, psychic",
        conditionImmunities: "charmed, deafened, exhaustion, frightened, poisoned",
        senses: "passive Perception 7",
        languages: "Eliksni",
        challenge: "2 (450 XP)",
        proficiencyBonus: "+3",
        otherStats: {
            description: "Class 8 Minion (3,900 XP)",
            volatile: "If a creature the shank can see moves within 5 feet of it, the shank can self-destruct as a reaction. If the shank takes damage that would reduce it to 0 health points, it immediately self-destructs."
        },
        actions: [
            {
                name: "Self-Destruct",
                description: "The shank explodes, destroying itself. All targets within 5 feet of it must make a **DC 16 Dexterity** saving throw, taking [[6d6]] explosive solar damage on a failed save, or half as much on a success."
            }
        ]
    }
]