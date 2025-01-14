import {iconUrl} from 'data/icon'
import {ensureStatuses} from '../type'
import {SHARED} from './SHARED'

export const PLD = ensureStatuses({
	GORING_BLADE: {
		id: 725,
		name: 'Goring Blade',
		icon: iconUrl(12507),
		duration: 21000,
	},
	CIRCLE_OF_SCORN: {
		id: 248,
		name: 'Circle Of Scorn',
		icon: iconUrl(10158),
		duration: 15000,
	},
	REQUIESCAT: {
		id: 1368,
		name: 'Requiescat',
		icon: iconUrl(12514),
		duration: 30000,
		stacksApplied: 5,
	},
	FIGHT_OR_FLIGHT: {
		id: 76,
		name: 'Fight Or Flight',
		icon: iconUrl(10155),
		duration: 25000,
	},
	IRON_WILL: {
		id: 79,
		name: 'Iron Will',
		icon: iconUrl(12506),
	},
	SENTINEL: {
		id: 74,
		name: 'Sentinel',
		icon: iconUrl(10151),
		duration: 15000,
	},
	SWORD_OATH: {
		id: 1902,
		name: 'Sword Oath',
		icon: iconUrl(19461),
		duration: 30000,
		stacksApplied: 3,
	},
	DIVINE_MIGHT: SHARED.UNKNOWN,
	SHELTRON: {
		id: 1856,
		name: 'Sheltron',
		icon: iconUrl(12510),
		duration: 6000,
	},
	INTERVENTION: {
		id: 1174,
		name: 'Intervention',
		icon: iconUrl(12511),
		duration: 6000,
	},
	PASSAGE_OF_ARMS: {
		id: 1175,
		name: 'Passage Of Arms',
		icon: iconUrl(12512),
		duration: 18000,
	},
	DIVINE_VEIL: {
		id: 726,
		name: 'Divine Veil',
		icon: iconUrl(12508),
		duration: 30000,
	},
	DIVINE_VEIL_PROC: {
		id: 727,
		name: 'Divine Veil',
		icon: iconUrl(12509),
		duration: 30000,
	},
	COVER: {
		id: 80,
		name: 'Cover',
		icon: iconUrl(12501),
		duration: 12000,
	},
	COVERED: {
		id: 81,
		name: 'Covered',
		icon: iconUrl(12502),
		duration: 12000,
	},
	HALLOWED_GROUND: {
		id: 82,
		name: 'Hallowed Ground',
		icon: iconUrl(12504),
		duration: 10000,
	},
	BULWARK: SHARED.UNKNOWN,
	HOLY_SHELTRON: {
		id: 2674,
		name: 'Holy Sheltron',
		icon: iconUrl(12515),
		duration: 8000,
	},
	KNIGHTS_RESOLVE: {
		id: 2675,
		name: 'Knight\'s Resolve',
		icon: iconUrl(12516),
		duration: 4000,
	},
	KNIGHTS_BENEDICTION: {
		id: 2676,
		name: 'Knight\'s Benediction',
		icon: iconUrl(12517),
		duration: 12000,
	},
	BLADE_OF_VALOR: {
		id: 2721,
		name: 'Blade of Valor',
		icon: iconUrl(12518),
		duration: 21000,
	},
	CONFITEOR_READY: SHARED.UNKNOWN,
	BLADE_OF_FAITH_READY: SHARED.UNKNOWN,
})
