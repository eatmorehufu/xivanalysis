import {iconUrl} from 'data/icon'
import {ensureStatuses} from '../type'
import {SHARED} from './SHARED'

export const MCH = ensureStatuses({
	REASSEMBLED: {
		id: 851,
		name: 'Reassembled',
		icon: iconUrl(13001),
		duration: 5000,
	},

	OVERHEATED: SHARED.UNKNOWN, // Added in patch 6.3 layer

	WILDFIRE: {
		id: 861,
		name: 'Wildfire',
		icon: iconUrl(13011),
		duration: 10000,
	},

	WILDFIRE_SELF: {
		id: 1946,
		name: 'Wildfire',
		icon: iconUrl(13019),
		duration: 10000,
	},

	FLAMETHROWER: {
		id: 1205,
		name: 'Flamethrower',
		icon: iconUrl(13017),
		duration: 10000,
	},

	BIOBLASTER: {
		id: 1866,
		name: 'Bioblaster',
		icon: iconUrl(13020),
		duration: 15000,
	},

	TACTICIAN: {
		id: 1951,
		name: 'Tactician',
		icon: iconUrl(13021),
		duration: 15000,
	},
})
