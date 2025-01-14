import {iconUrl} from 'data/icon'
import {Attribute} from 'event'
import {ensureActions} from '../type'

export const DNC = ensureActions({
	STANDARD_FINISH: {
		id: 16003,
		icon: iconUrl(3459),
		name: 'Standard Finish',
		onGcd: true,
		cooldown: 1500,
	},
	SINGLE_STANDARD_FINISH: {
		id: 16191,
		icon: iconUrl(3459),
		name: 'Single Standard Finish',
		onGcd: true,
		cooldown: 1500,
	},
	DOUBLE_STANDARD_FINISH: {
		id: 16192,
		icon: iconUrl(3459),
		name: 'Double Standard Finish',
		onGcd: true,
		cooldown: 1500,
		statusesApplied: [
			'STANDARD_FINISH',
			'STANDARD_FINISH_PARTNER',
			'ESPRIT',
		],
	},
	TECHNICAL_FINISH: {
		id: 16004,
		icon: iconUrl(3474),
		name: 'Technical Finish',
		onGcd: true,
		cooldown: 1500,
	},
	SINGLE_TECHNICAL_FINISH: {
		id: 16193,
		icon: iconUrl(3474),
		name: 'Single Technical Finish',
		onGcd: true,
		cooldown: 1500,
	},
	DOUBLE_TECHNICAL_FINISH: {
		id: 16194,
		icon: iconUrl(3474),
		name: 'Double Technical Finish',
		onGcd: true,
		cooldown: 1500,
	},
	TRIPLE_TECHNICAL_FINISH: {
		id: 16195,
		icon: iconUrl(3474),
		name: 'Triple Technical Finish',
		onGcd: true,
		cooldown: 1500,
	},
	QUADRUPLE_TECHNICAL_FINISH: {
		id: 16196,
		icon: iconUrl(3474),
		name: 'Quadruple Technical Finish',
		onGcd: true,
		cooldown: 1500,
		statusesApplied: [
			'TECHNICAL_FINISH',
			'ESPRIT_TECHNICAL',
			'FLOURISHING_FINISH',
		],
	},
	TILLANA: {
		id: 25790,
		icon: iconUrl(3480),
		name: 'Tillana',
		onGcd: true,
		cooldown: 1500,
	},
	CASCADE: {
		id: 15989,
		icon: iconUrl(3451),
		name: 'Cascade',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		combo: {
			start: true,
		},
		statusesApplied: ['SILKEN_SYMMETRY'],
	},
	FOUNTAIN: {
		id: 15990,
		icon: iconUrl(3452),
		name: 'Fountain',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		combo: {
			from: 15989,
			end: true,
		},
		statusesApplied: ['SILKEN_FLOW'],
	},
	REVERSE_CASCADE: {
		id: 15991,
		icon: iconUrl(3460),
		name: 'Reverse Cascade',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
	},
	FOUNTAINFALL: {
		id: 15992,
		icon: iconUrl(3464),
		name: 'Fountainfall',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
	},
	WINDMILL: {
		id: 15993,
		icon: iconUrl(3453),
		name: 'Windmill',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		combo: {
			start: true,
		},
		statusesApplied: ['SILKEN_SYMMETRY'],
	},
	BLADESHOWER: {
		id: 15994,
		icon: iconUrl(3461),
		name: 'Bladeshower',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		combo: {
			from: 15993,
			end: true,
		},
		statusesApplied: ['SILKEN_FLOW'],
	},
	RISING_WINDMILL: {
		id: 15995,
		icon: iconUrl(3463),
		name: 'Rising Windmill',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
	},
	BLOODSHOWER: {
		id: 15996,
		icon: iconUrl(3465),
		name: 'Bloodshower',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
	},
	STANDARD_STEP: {
		id: 15997,
		icon: iconUrl(3454),
		name: 'Standard Step',
		onGcd: true,
		cooldown: 30000,
		gcdRecast: 1500,
		statusesApplied: ['STANDARD_STEP'],
	},
	TECHNICAL_STEP: {
		id: 15998,
		icon: iconUrl(3473),
		name: 'Technical Step',
		onGcd: true,
		cooldown: 120000,
		gcdRecast: 1500,
		statusesApplied: ['TECHNICAL_STEP'],
	},
	EMBOITE: {
		id: 15999,
		icon: iconUrl(3455),
		name: 'Emboite',
		onGcd: true,
		cooldown: 1000,
	},
	ENTRECHAT: {
		id: 16000,
		icon: iconUrl(3456),
		name: 'Entrechat',
		onGcd: true,
		cooldown: 1000,
	},
	JETE: {
		id: 16001,
		icon: iconUrl(3457),
		name: 'Jete',
		onGcd: true,
		cooldown: 1000,
	},
	PIROUETTE: {
		id: 16002,
		icon: iconUrl(3458),
		name: 'Pirouette',
		onGcd: true,
		cooldown: 1000,
	},
	SABER_DANCE: {
		id: 16005,
		icon: iconUrl(3476),
		name: 'Saber Dance',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
	},
	CLOSED_POSITION: {
		id: 16006,
		icon: iconUrl(3470),
		name: 'Closed Position',
		onGcd: false,
		cooldown: 30000,
	},
	FAN_DANCE: {
		id: 16007,
		icon: iconUrl(3462),
		name: 'Fan Dance',
		onGcd: false,
		cooldown: 1000,
		statusesApplied: ['THREEFOLD_FAN_DANCE'],
	},
	FAN_DANCE_II: {
		id: 16008,
		icon: iconUrl(3466),
		name: 'Fan Dance II',
		onGcd: false,
		cooldown: 1000,
		statusesApplied: ['THREEFOLD_FAN_DANCE'],
	},
	FAN_DANCE_III: {
		id: 16009,
		icon: iconUrl(3472),
		name: 'Fan Dance III',
		onGcd: false,
		cooldown: 1000,
	},
	FAN_DANCE_IV: {
		id: 25791,
		icon: iconUrl(3481),
		name: 'Fan Dance IV',
		onGcd: false,
		cooldown: 1000,
	},
	EN_AVANT: {
		id: 16010,
		icon: iconUrl(3467),
		name: 'En Avant',
		onGcd: false,
		cooldown: 30000,
		charges: 3,
	},
	DEVILMENT: {
		id: 16011,
		icon: iconUrl(3471),
		name: 'Devilment',
		onGcd: false,
		cooldown: 120000,
		statusesApplied: ['DEVILMENT', 'FLOURISHING_STARFALL'],
	},
	STARFALL_DANCE: {
		id: 25792,
		icon: iconUrl(3482),
		name: 'Starfall Dance',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
	},
	SHIELD_SAMBA: {
		id: 16012,
		icon: iconUrl(3469),
		name: 'Shield Samba',
		onGcd: false,
		cooldown: 90000,
		statusesApplied: ['SHIELD_SAMBA'],
	},
	FLOURISH: {
		id: 16013,
		icon: iconUrl(3475),
		name: 'Flourish',
		onGcd: false,
		cooldown: 60000,
		statusesApplied: [
			'SILKEN_SYMMETRY', // Pre-6.1 proc statuses for base layer (with the post 6.1 key they will have for the future)
			'SILKEN_FLOW',
			'THREEFOLD_FAN_DANCE',
			'FOURFOLD_FAN_DANCE',
		],
	},
	IMPROVISATION: {
		id: 16014,
		icon: iconUrl(3477),
		name: 'Improvisation',
		onGcd: false,
		cooldown: 120000,
		statusesApplied: [
			'IMPROVISATION',
			'IMPROVISATION_REGEN',
			'RISING_RHYTHM',
		],
	},
	IMPROVISED_FINISH: {
		id: 25789,
		icon: iconUrl(3479),
		name: 'Improvised Finish',
		onGcd: false,
		cooldown: 120000,
		statusesApplied: ['IMPROVISED_FINISH'],
	},
	CURING_WALTZ: {
		id: 16015,
		icon: iconUrl(3468),
		name: 'Curing Waltz',
		onGcd: false,
		cooldown: 60000,
	},
	ENDING: {
		id: 18073,
		icon: iconUrl(3478),
		name: 'Ending',
		onGcd: false,
		cooldown: 1000,
	},
})
