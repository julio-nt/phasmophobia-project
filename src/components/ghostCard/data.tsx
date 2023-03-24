interface IGhostCard {
	name: string;
	shortInfo: string;
	evidence: string[];
}

const ghostCard: IGhostCard[] = [
	{
		name: 'Spirit',
		shortInfo: "A not so special ghost that doesn't like smudges.",
		evidence: ['EMF 5 - ', 'Spirit Box - ', 'Writing'],
	},
	{
		name: 'Wraith',
		shortInfo: 'A ghost that can teleport to you and hates salt.',
		evidence: ['EMF 5 - ', 'Spirit Box - ', 'D.O.T.S'],
	},
	{
		name: 'Phantom',
		shortInfo:
			'A ghost not photogenic at all, it will never appear in a photo.',
		evidence: ['Spirit Box - ', 'Fingerprints - ', 'D.O.T.S'],
	},
	{
		name: 'Poltergeist',
		shortInfo: 'This ghost loves throwing things.',
		evidence: ['Spirit Box - ', 'Fingerprints - ', 'Writing'],
	},
	{
		name: 'Banshee',
		shortInfo:
			'This ghost may scream in your parabolic ear and only has one friend.',
		evidence: ['Fingerprints - ', 'Orbs - ', 'D.O.T.S'],
	},
	{
		name: 'Jinn',
		shortInfo: 'This ghost will NEVER turn the breaker off.',
		evidence: ['EMF 5 - ', 'Fingerprints - ', 'Freezing'],
	},
	{
		name: 'Mare',
		shortInfo: 'This ghost hates lights, so keep yours on!',
		evidence: ['Spirit Box - ', 'Orbs - ', 'Writing'],
	},
	{
		name: 'Revenant',
		shortInfo: "This ghost is not dangerous... If it doesn't see you.",
		evidence: ['Orbs - ', 'Writing - ', 'Freezing'],
	},
	{
		name: 'Shade',
		shortInfo: "Very shy ghost, it doesn't enjoy big groups of friends.",
		evidence: ['EMF 5 - ', 'Writing - ', 'Freezing'],
	},
	{
		name: 'Demon',
		shortInfo: 'It will probably kill you before you know.',
		evidence: ['Fingerprints - ', 'Writing - ', 'Freezing'],
	},
	{
		name: 'Yurei',
		shortInfo:
			'Strong ghost that loves the smell of a smudge stick burning.',
		evidence: ['Orbs - ', 'Freezing - ', 'D.O.T.S'],
	},
	{
		name: 'Oni',
		shortInfo: 'Most visible ghost there is, it loves to show off.',
		evidence: ['EMF 5 - ', 'Freezing - ', 'D.O.T.S'],
	},
	{
		name: 'Yokai',
		shortInfo: 'Kinda dumb ghost that hates hearing people talking.',
		evidence: ['Spirit Box - ', 'Orbs - ', 'D.O.T.S'],
	},
	{
		name: 'Hantu',
		shortInfo: 'This ghost loves being in cold places.',
		evidence: ['Fingerprints - ', 'Orbs - ', '*Freezing'],
	},
	{
		name: 'Goryo',
		shortInfo:
			'Cannot perform a long roam and only show D.O.T.S on camera.',
		evidence: ['EMF 5 - ', 'Fingerprints - ', '*D.O.T.S'],
	},
	{
		name: 'Myling',
		shortInfo: 'Very quiet ghost.',
		evidence: ['EMF 5 - ', 'Fingerprints - ', 'Writing'],
	},
	{
		name: 'Onryo',
		shortInfo:
			'Loves blowing candles so much that it may hug you after you give enough candles.',
		evidence: ['Spirit Box - ', 'Orbs - ', 'Freezing'],
	},
	{
		name: 'The Twins',
		shortInfo: 'They might do stuff together.',
		evidence: ['EMF 5 - ', 'Spirit Box - ', 'Freezing'],
	},
	{
		name: 'Raiju',
		shortInfo: 'Very fast when around eletronic equipment.',
		evidence: ['EMF 5 - ', 'Orbs - ', 'D.O.T.S'],
	},
	{
		name: 'Obake',
		shortInfo: 'This Ghost has 6 fingers and can change its appearence.',
		evidence: ['EMF 5 - ', '*Fingerprints - ', 'Orbs'],
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
	},
	{
		name: 'Moroi',
		shortInfo:
			"When your mom say not to talk to strangers, it's this ghost she's worry about.",
		evidence: ['*Spirit Box - ', 'Writing - ', 'Freezing'],
	},
	{
		name: 'Deogen',
		shortInfo: 'Best ghost, nothing else to add here.',
		evidence: ['*Spirit Box - ', 'Writing - ', 'D.O.T.S'],
	},
	{
		name: 'Thaye',
		shortInfo: 'Very fast early game, very slow late game.',
		evidence: ['Orbs - ', 'Writing - ', 'D.O.T.S'],
	},
];

export { ghostCard };
