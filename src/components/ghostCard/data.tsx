interface IGhostCard {
	name: string;
	shortInfo: string;
	evidence: string[];
	speed: string;
}

const ghostCard: IGhostCard[] = [
	{
		name: 'Spirit',
		shortInfo: "A not so special ghost that doesn't like smudges.",
		evidence: ['EMF 5 - ', 'Spirit Box - ', 'Writing'],
		speed: 'normal',
	},
	{
		name: 'Wraith',
		shortInfo: 'A ghost that can teleport to you and hates salt.',
		evidence: ['EMF 5 - ', 'Spirit Box - ', 'D.O.T.S'],
		speed: 'normal',
	},
	{
		name: 'Phantom',
		shortInfo:
			'A ghost not photogenic at all, it will never appear in a photo.',
		evidence: ['Spirit Box - ', 'Fingerprints - ', 'D.O.T.S'],
		speed: 'normal',
	},
	{
		name: 'Poltergeist',
		shortInfo: 'This ghost loves throwing things.',
		evidence: ['Spirit Box - ', 'Fingerprints - ', 'Writing'],
		speed: 'normal',
	},
	{
		name: 'Banshee',
		shortInfo:
			'This ghost may scream in your parabolic ear and only has one friend.',
		evidence: ['Fingerprints - ', 'Orbs - ', 'D.O.T.S'],
		speed: 'normal',
	},
	{
		name: 'Jinn',
		shortInfo: 'This ghost will NEVER turn the breaker off.',
		evidence: ['EMF 5 - ', 'Fingerprints - ', 'Freezing'],
		speed: 'varies, normal, fast',
	},
	{
		name: 'Mare',
		shortInfo: 'This ghost hates lights, so keep yours on!',
		evidence: ['Spirit Box - ', 'Orbs - ', 'Writing'],
		speed: 'normal',
	},
	{
		name: 'Revenant',
		shortInfo: "This ghost is not dangerous... If it doesn't see you.",
		evidence: ['Orbs - ', 'Writing - ', 'Freezing'],
		speed: 'varies, very slow, very fast',
	},
	{
		name: 'Shade',
		shortInfo: "Very shy ghost, it doesn't enjoy big groups of friends.",
		evidence: ['EMF 5 - ', 'Writing - ', 'Freezing'],
		speed: 'normal',
	},
	{
		name: 'Demon',
		shortInfo: 'It will probably kill you before you know.',
		evidence: ['Fingerprints - ', 'Writing - ', 'Freezing'],
		speed: 'normal',
	},
	{
		name: 'Yurei',
		shortInfo:
			'Strong ghost that loves the smell of a smudge stick burning.',
		evidence: ['Orbs - ', 'Freezing - ', 'D.O.T.S'],
		speed: 'normal',
	},
	{
		name: 'Oni',
		shortInfo: 'Most visible ghost there is, it loves to show off.',
		evidence: ['EMF 5 - ', 'Freezing - ', 'D.O.T.S'],
		speed: 'normal',
	},
	{
		name: 'Yokai',
		shortInfo: 'Kinda dumb ghost that hates hearing people talking.',
		evidence: ['Spirit Box - ', 'Orbs - ', 'D.O.T.S'],
		speed: 'normal',
	},
	{
		name: 'Hantu',
		shortInfo: 'This ghost loves being in cold places.',
		evidence: ['Fingerprints - ', 'Orbs - ', '*Freezing'],
		speed: 'varies, fast, little slow',
	},
	{
		name: 'Goryo',
		shortInfo:
			'Cannot perform a long roam and only show D.O.T.S on camera.',
		evidence: ['EMF 5 - ', 'Fingerprints - ', '*D.O.T.S'],
		speed: 'normal',
	},
	{
		name: 'Myling',
		shortInfo: 'Very quiet ghost.',
		evidence: ['EMF 5 - ', 'Fingerprints - ', 'Writing'],
		speed: 'normal',
	},
	{
		name: 'Onryo',
		shortInfo:
			'Loves blowing candles so much that it may hug you after you give enough candles.',
		evidence: ['Spirit Box - ', 'Orbs - ', 'Freezing'],
		speed: 'normal',
	},
	{
		name: 'The Twins',
		shortInfo: 'They might do stuff together.',
		evidence: ['EMF 5 - ', 'Spirit Box - ', 'Freezing'],
		speed: 'varies, little fast, little slow',
	},
	{
		name: 'Raiju',
		shortInfo: 'Very fast when around eletronic equipment.',
		evidence: ['EMF 5 - ', 'Orbs - ', 'D.O.T.S'],
		speed: 'varies, slow, very fast',
	},
	{
		name: 'Obake',
		shortInfo: 'This Ghost has 6 fingers and can change its appearence.',
		evidence: ['EMF 5 - ', '*Fingerprints - ', 'Orbs'],
		speed: 'normal',
	},
	{
		name: 'The Mimic',
		shortInfo: 'This Ghost can copy any other ghost characteristics.',
		evidence: [
			'Spirit Box - ',
			'Fingerprints - ',
			'Freezing ',
			'*Fake Orbs',
		],
		speed: 'varies',
	},
	{
		name: 'Moroi',
		shortInfo:
			"When your mom say not to talk to strangers, it's this ghost she's worry about.",
		evidence: ['*Spirit Box - ', 'Writing - ', 'Freezing'],
		speed: 'varies, fast, slow',
	},
	{
		name: 'Deogen',
		shortInfo: 'Best ghost, nothing else to add here.',
		evidence: ['*Spirit Box - ', 'Writing - ', 'D.O.T.S'],
		speed: 'varies, very fast, very slow',
	},
	{
		name: 'Thaye',
		shortInfo: 'Very fast early game, very slow late game.',
		evidence: ['Orbs - ', 'Writing - ', 'D.O.T.S'],
		speed: 'varies, very fast, very slow',
	},
];

export { ghostCard };
