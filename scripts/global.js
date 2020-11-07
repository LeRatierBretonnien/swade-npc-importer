export const module = "swade-compendium";

export const log = function (msg) {
    console.log(`SWADE NPC Importer | ${msg}`)
}

export const newLineRegex = /\r\n/gi;
export const diceRegex = /(\d+)?d(\d+)([\+\-]\d+)?/gi;
export const closingParenthesis = /\)/g;


export const attributesAndSkills = ["Attributes:", "Skills:"];
export const supportedListStats = ["Hindrances:", "Edges:", "Powers:"];
export const baseStats = ["Pace:", "Parry:", "Toughness:", "Power Points:"]
export const additionalStats = ["Sanity:", "Conviction:", "Strain:"];
export const gear = ["Gear:"]
export const supportedBulletListStats = ["Special Abilities:", "Super Powers:"];
export const allStatBlockEntities = attributesAndSkills.concat(supportedListStats, baseStats, supportedBulletListStats, gear, additionalStats);

export const SwadeItems = {
    SKILL: 'skill',
    EDGE: 'edge',
    HINDRANCE: 'hindrance',
    POWER: 'power',
    SHIELD: 'shield',
    ARMOR: 'armor',
    WEAPON: 'weapon',
    GEAR: 'gear'
}