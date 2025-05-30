import json from '../data/roles.json';

export enum Role {
    MONK = "monk",
    SLAYER = "slayer",
    CHEF = "chef",
    FORTUNE_TELLER = "fortuneteller",
    EMPATH = "empath",
    UNDERTAKER = "undertaker",
    SOLDIER = "soldier",
    INVESTIGATOR = "investigator",
    VIRGIN = "virgin",
    WASHERWOMAN = "washerwoman",
    LIBRARIAN = "librarian",
    RAVENKEEPER = "ravenkeeper",
    MAYOR = "mayor",
    BUTLER = "butler",
    DRUNK = "drunk",
    RECLUSE = "recluse",
    SAINT = "saint",
    IMP = "imp",
    POISONER = "poisoner",
    SPY = "spy",
    BARON = "baron",
    SCARLET_WOMAN = "scarletwoman"
}

export interface RoleInfo {
    name: string;
    description: string;
    top: number;
    left: number;
    right: number;
    setup: boolean;
    reminders: Array<string>;
}

export type RoleData = Record<Role, RoleInfo>;
export const roleData:RoleData = json;