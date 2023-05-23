interface Iequipments {
	name: string;
	basicInfo: string[];
	tips: string[];
	findEvidence: boolean;
	test: boolean;
}

export const equipments: Iequipments[] = [
	{
		name: 'Video Camera',
		basicInfo: [
			'Simple video camera that has night vision, which can be use to find Ghost Orbs evidence in the ghost room, note that the only way to see ghost orbs is with the camera and with night vision on, you can see while holding the camera or looking at the monitor inside the truck.',
		],
		tips: [
			'The best way to find ghost orbs is by holding the camera and having a look around the ghost room, check every corner.',
		],
		findEvidence: true,
		test: false,
	},
	{
		name: 'D.O.T.S Projector',
		basicInfo: [
			'D.O.T.S is used to find evidence, just put it in the ghost room and you will be able to see a ghost green hologram like running on the D.O.T.S light, note that this is one of the most boring evidences to get since the ghost may take too long to go through it. This projector is also useful for ilumination.',
		],
		tips: [
			'Two D.O.T.S are better than one, but remember to put them far from eachother!',
			"D.O.T.S are also useful for ilumination, so if you don't need the D.O.T.S anymore you can put it strategically to get a better view of something you want like a hiding spot, a path to the hiding spot or to get a better look at the ghost when it's hunting.",
		],
		findEvidence: true,
		test: true,
	},
	{
		name: 'EMF Reader',
		basicInfo: [
			'EMF Reader will always make a sound when the ghost does something, there are 5 possible readings:',
			'EMF1: No reading.',
			'EMF2: Ghost touched something, that can be a door, a doll, a lightswitch, a phone, a lamp and etc.',
			'EMF3: Ghost threw something.',
			'EMF4: Ghost made an event, that can be showing itself, airball, breaking lights and etc.',
			'EMF5: That means evidence, if the ghost has EMF5 as an evidence any of the above types of EMFs has a 25% chance of being EMF5.',
		],
		tips: [''],
		findEvidence: false,
		test: false,
	},
	{
		name: 'Flashlight',
		basicInfo: [
			'Weak flashlight that has a yellow-ish color. Not very useful as the strong flashlight, but it can be nice to make the game more scary.',
		],
		tips: [''],
		findEvidence: false,
		test: false,
	},
	{
		name: 'Ghost Writing Book',
		basicInfo: [
			'Writing Book is used to find Ghost Writing evidence, put it inside the ghost room and wait, note that this evidence along with D.O.T.S are the most boring and random evidence to find.',
		],
		tips: [
			"For the book to work the ghost has to interact with it, so a tip is to get all the objects out of the ghost room, like shoes, plates, cups and etc. so there is a higher chance the ghost will interact with the book, since it won't have many other options.",
		],
		findEvidence: true,
		test: false,
	},
	{
		name: 'Spirit Box',
		basicInfo: [''],
		tips: [''],
		findEvidence: true,
		test: true,
	},
	{
		name: 'UV Light',
		basicInfo: [''],
		tips: [''],
		findEvidence: true,
		test: true,
	},
	{
		name: 'Photo Camera',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: true,
	},
	{
		name: 'Candle',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: true,
	},
	{
		name: 'Crucifix',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: true,
	},
	{
		name: 'Glowstick',
		basicInfo: [''],
		tips: [''],
		findEvidence: true,
		test: true,
	},
	{
		name: 'Head Mounted Camera',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: false,
	},
	{
		name: 'Lighter',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: false,
	},
	{
		name: 'Motion Sensor',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: false,
	},
	{
		name: 'Parabolic Microphone',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: true,
	},
	{
		name: 'Salt',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: true,
	},
	{
		name: 'Sanity Pills',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: true,
	},
	{
		name: 'Smudge Sticks',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: true,
	},
	{
		name: 'Sound Sensor',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: false,
	},
	{
		name: 'Strong Flashlight',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: false,
	},
	{
		name: 'Thermometer',
		basicInfo: [''],
		tips: [''],
		findEvidence: true,
		test: false,
	},
	{
		name: 'Tripod',
		basicInfo: [''],
		tips: [''],
		findEvidence: false,
		test: false,
	},
];
