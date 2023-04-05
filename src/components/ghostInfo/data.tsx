interface IghostInfo {
	name: string;
	hunt: string;
	speed: string;
	behaviour: string[];
	strategies: string[];
	evidence: string[];
}

const ghostInfo: IghostInfo[] = [
	{
		name: 'Spirit',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			"Spirits can't hunt for 180 seconds after being smudged, while most ghost can hunt after 90 seconds.",
		],
		strategies: [
			'Lower your sanity enough so the ghost will hunt frequently, then use a smudge stick on the ghost (it can be during a hunt or not, but be sure the ghost was smudged), and check if it will take more than 3 minutes to hunt, you can also use a timer to be sure (for what I know the timer starts exactly when the ghost was smudged).',
		],
		evidence: ['EMF 5', 'Spirit Box', 'Writing'],
	},
	{
		name: 'Wraith',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			"Can't step on salt.",
			'Can teleport on top of a player and give EMF 2 or 5.',
		],
		strategies: [
			"To test for Wraith you can put salt inside its room, if it doesn't step on it, then it might be a Wraith, if it does step on it, then it's 100% not a Wraith.",
			"Another way to find out if it's a Wraith is by having an EMF with you, if you there was no interaction but the EMF beeped with 2 or 5 it might be because the Wraith teleported on top of you.",
		],
		evidence: ['EMF 5', 'Spirit Box', 'D.O.T.S'],
	},
	{
		name: 'Phantom',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'Will never appear in a ghost photo.',
			'It is less visible during a hunt, because it blinks less frequently.',
		],
		strategies: [
			'You can take a ghost photo when a ghost event happens, or using a curse object, or during a hunt, but note that taking a ghost photo during a hunt can be incredibly difficult, specially when it is a Phantom.',
			'You can also try to look at the ghost during a hunt to see if it gets invisible for more time than other ghosts, can be difficult to know the difference at the beginning, but with some practice you will be able to tell the difference.',
		],
		evidence: ['Spirit Box', 'Fingerprints', 'D.O.T.S'],
	},
	{
		name: 'Poltergeist',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'Can throw a bunch of things at once.',
			'Can throw things at longer distance.',
			'Has 100% chance of throwing objects at range durging a hunt every 0.5 seconds,while other ghosts have 50% chance.',
		],
		strategies: [
			'The most known Poltergeist test is making a pile of objects inside the ghost room, the Polter may throw it all (or most of it) in the air while every other ghost can only throw one thing at a time.',
			'If you see an object flying pretty far you can also suspect it might be a Poltergeits.',
			'If the ghost is throwing objects very frequently you can also suspect it might be a Poltergeist.',
		],
		evidence: ['Spirit Box', 'Fingerprints', 'Writing'],
	},
	{
		name: 'Banshee',
		hunt: '50% TARGET SANITY',
		speed: '1.6m/s (normal)',
		//check info
		behaviour: [
			'Banshee chooses a random target at the beginning of the round (if you are playing alone the target will always be you, of course).',
			'If the target dies Banshee will choose a new target.',
			'This ghost hunts based on the sanity of the target, not the average team sanity like every other ghost.',
			'If the target is inside the house during a hunt, Banshee will not kill anyone that is not the target, other player can walk through the ghost and will not get killed.',
			'If the target is not inside the house during a hunt, Banshee will hunt like any other ghost, chasing and killing anyone that it sees.',
			'Has small change of giving a unique sound (a disturbing scream) that can be heard using the parabolic microphone.',
			'Can teleport to its target.',
		],
		strategies: [
			'If you hear the unique scream in the parabolic mic then it is a Banshee.',
			'If you are far from the ghost room and notice the ghost interacted close to you it might be because you are the target and it teleported to you.',
			'WARNING: THE FOLLOWING STRATEGIES CAN ONLY BE DONE IF PLAYING WITH OTHER PEOPLE!',
			"If you think you got an early hunt you should check the sanity monitor in the truck, if the average team sanity is above 50%, but one player is lower than 50% it is possible it's a Banshee and that player is the target.",
			'A dangerous way to test for Banshee is to have every player inside the house, everybody hide except for one player that will test it, this player will try to attract the ghost, see if it follows the player, preferably try to loop it a little to be sure, sometimes the ghost will go in your direction because it is looking for the actual target, not because it is chasing you. If the ghost does chase you, then you try again the same thing with another player testing it, if the ghost chase both player then its not a Banshee.',
		],
		evidence: ['Fingerprints', 'Orbs', 'D.O.T.S'],
	},
	{
		name: 'Jinn',
		hunt: '50% (normal)',
		speed: '2.5m/s when chasing but far from player if breaker is on (fast) - 1.6m/s not chasing (normal)',
		behaviour: [
			'Cannot turn the breaker off.',
			'Can only use its abilities if the breaker is on.',
			'Has a random chance of draining 25% sanity with no visual or audio events, when this ability is used it will cause an EMF 2 or 5 on the breaker.',
			'Is faster when it sees a player, but is far from them and slows a bit when closer to them.',
		],
		strategies: [
			"If the ghost turns the breaker off at any moment, it's 100% not a Jinn, just be careful to not turn too many lights on and overcharge the breaker making it turning off, it may confuse you thinking it was the ghots. You can check the breaker using EMF right after the lights went off to be sure if it was the ghost or not.",
			'If you are suspecting Jinn you can also leave an EMF on top of the breaker, if it beeps for no reason is because Jinn used its ability to drain sanity from someone.',
			'During a hunt stay in a hallway or somewhere with long space (I will use tanglewood garage for example), be on the farthest from where the ghost will come from, in this case be on the garage gate and observe. If the ghost comes from the laundry room running really fast and then slowing down when besides the car, it is a Jinn.',
		],
		evidence: ['EMF 5', 'Fingerprints', 'Freezing'],
	},
	{
		name: 'Mare',
		hunt: '60% if lights are off / 40% if lights are on',
		speed: '1.6m/s (normal)',
		behaviour: [
			'More like to roam from rooms with lights on.',
			'Increase chance of attacking in the dark.',
			'Lower chance of attacking if the lights are on.',
			'Can hunt earlier if the lights are off, and hunt later if lights are on.',
			'Will never turn a light on.',
			'More likely to explode lights.',
			'Can immediately turn off a light after you turn it on.',
		],
		strategies: [
			'Turn the lights on in the ghost room on and put a crucifix in there, if the ghost hunts with the lighst on is not likely it is a Mare, but it is still possible. Also be careful if it is a Mare it may cause the ghost to roam from the room and start a hunt elsewhere.',
			'You can try to turn the light on the ghost room often to see if it will use the ability to immediately turn it off.',
		],
		evidence: ['Spirit Box', 'Orbs', 'Writing'],
	},
	{
		name: 'Revenant',
		hunt: '50% (normal)',
		speed: '1.1m/s if not chasing (very slow) / 3.0m/s when chasing (very fast)',
		behaviour: [
			'Extremely slow when not chasing someone.',
			'Extremely fast when chasing someone.',
		],
		strategies: [
			"Revenant is one of the easies ghosts to find when it's hunting, if you are hiding and he is not chasing anyone he will be extremely slow, and I repeat, EXTREMELY slow, you will know. Also remember it will be EXTREMELY fast if it sees you.",
		],
		evidence: ['Orbs', 'Writing', 'Freezing'],
	},
	{
		name: 'Shade',
		hunt: '35%',
		speed: '1.6m/s (normal)',
		behaviour: [
			"Won't interact much in the ghost room if someone is there.",
			'Shade will never start a hunt in the same room as a player.',
			"Doesn't do ghost events often, and will never appear in flesh/physical form, but it can still appear as a shadow, gas or translucent ghost.",
			'Will never appear in flesh when using Summoning Circle and Music Box.',
		],
		strategies: [
			"Shades usually don't interact much, but don't get mistaken sometimes it does interact a lot, but not in the same room as a player.",
			"Remember to check your sanity after a hunt, if it was above 35% it can't be a Shade.",
			'If it starts hunts far from the ghost room when people are in there it can be a Shade.',
		],
		evidence: ['EMF 5', 'Writing', 'Freezing'],
	},
	{
		name: 'Demon',
		hunt: '75% / Any% (early)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'Can rarely hunt at any% sanity.',
			"When smudged, can't hunt for 1 minute instead of the normal 1.5 minutes.",
			'Are affected by crucifixes from a much larger distance (5m instead the normal 3m).',
		],
		strategies: [
			"If you just entered the house and a hunt began, it's a Demon.",
			'If you got an early hunt check your sanity, if it is above 60% there it is probably a Demon.',
			"If your crucifixes are burning fast or the ghost is constantly hunting, it's probably a Demon.",
		],
		evidence: ['Fingerprints', 'Writing', 'Freezing'],
	},
	{
		name: 'Yurei',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'Can close a door completely and it will drain of 15% sanity of nearby players.',
			"Smudging will prevent roaming for 90 seconds (I think it doesn't work during a hunt).",
		],
		strategies: [
			"Yurei can't leave the Ghost Room for 1:30 minutes after smudging, so use a Motion Sensor and/or salt to check if it'll leave.",
			"Pay close attention to doors, if there is a door completely open and the ghost closes it completely you can be sure it's a Yurei.",
		],
		evidence: ['Orbs', 'Freezing', 'D.O.T.S'],
	},
	{
		name: 'Oni',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'More likely to do ghost events.',
			"Can't do the airball ghost event.",
			'Makes players lose sanity faster than other ghosts when doing an Ghost Event.',
			'Blink faster (is more visible) during a hunt.',
		],
		strategies: [
			"You can suspect it's Oni if it is doing too much ghost events, specially at the beggining of the round.",
			"It's not an Oni if it does the air ball event.",
		],
		evidence: ['EMF 5', 'Freezing', 'D.O.T.S'],
	},
	{
		name: 'Yokai',
		hunt: '50% (normal) / 80% if someone is talking nearby (early)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'Can hunt as early as 80% sanity if someone is talking near the ghost.',
			"Can't detect equipment and voice if more than 2 meters range during a hunt.",
		],
		strategies: [
			"You can try talking a lot inside the ghost room, if the ghost usually hunts when you are talking and doesn't hunts when you are not talking it might be Yokai.",
			"You can also try to attract the ghost during a hunt. If you are hearing that the ghost is in the same level as you, but not so close to you, try to say something on your mic of turn you flashlight on, if your equipment is flashing and the ghost doesn't come to you it's probably a Yokai, be careful to not be too close to the ghost when doing this and remember it won't work if you are on a different floor of the ghost. ",
		],
		evidence: ['Spirit Box', 'Orbs', 'D.O.T.S'],
	},
	{
		name: 'Hantu',
		hunt: '50% (normal)',
		speed: '1.4m/s (a little slow) / 2.7m/s (fast)',
		behaviour: [
			'Will be always fast inside the ghost room.',
			'Will be fast inside the entire house if the breaker is off.',
			'Will be a little slower when outside the ghost room if the breaker is on.',
			'Does not speed up when chasing.',
			"Can't turn on the breaker.",
			'More likely to turn off the breaker.',
			'It can make you blow freezing breath outside the ghost room during a hunt.',
			'Always has Freezing Temperature on Nightmare or Insane mode.',
		],
		strategies: [
			"If the breaker is on and the ghost is fast in its room, but slows down when out of it, it's a Hantu.",
			"During a hunt you can get in line of sight of the ghost and let it chase you, if the ghost does not speed up when chasing, it's a Hantu.",
			"Let's say the breaker is on and you notice the ghost is kinda slow, but you weren't able to hear it inside the ghost room or it didn't spawn in the ghost room. You can turn off the breaker and see if the ghost will be fast now.",
		],
		evidence: ['Fingerprints', 'Orbs', '*Freezing'],
	},
	{
		name: 'Goryo',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'Cannot perform a long roam, but can still roam.',
			'Only shows D.O.T.S on camera.',
			'Always has D.O.T.S on Nightmare or Insane mode.',
		],
		strategies: ['If you only D.O.T.S on camera, it might be a Goryo.'],
		evidence: ['EMF 5', 'Fingerprints', '*D.O.T.S'],
	},
];

export { ghostInfo };
