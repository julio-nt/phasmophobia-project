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
			"Spirits can't hunt for 3 minutes after being smudged, while all other ghosts (except Demon) can't hunt for 1:30 minutes.",
		],
		strategies: [
			'Lower your sanity enough so the ghost will hunt frequently, then use a smudge stick on the ghost (it can be during a hunt or not, but be sure the ghost was hit with the smudge), check if it will take less than 3 minutes to hunt, you can also use a timer to be sure (for what I know the timer starts exactly when the ghost was smudged, but if it was during a hunt, some say it is when the hunt ends).',
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
		speed: '1.6m/s (late)',
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
			"Smudging will prevent roaming for 90 seconds (I think it doesn't work during a hunt, not sure).",
		],
		strategies: [
			"Yurei can't leave the Ghost Room for 1:30 minutes after smudging, so use a Motion Sensor and/or salt to check if it'll leave.",
			"Pay close attention to doors, if there is a door completely open and the ghost closes it completely you can be sure it's a Yurei (have in mind that every ghost can close a door completly when it does a ghost event).",
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
			"Cannot change ghost room (unsure if it's impossible or unlikely)",
			'Only shows D.O.T.S on camera.',
			'Always has D.O.T.S on Nightmare or Insane mode.',
		],
		strategies: [
			'If you only see D.O.T.S on camera, it might be a Goryo.',
			'WARNING: D.O.T.S is one of the most anoying evindences to get, so be patience.',
			"Goryo won't change ghost room and won't roam too often, it also won't roam too far from its ghost room",
		],
		evidence: ['EMF 5', 'Fingerprints', '*D.O.T.S'],
	},
	{
		name: 'Myling',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'More likely to make noises on the Parabolic Microphone.',
			'During a hunt it is really quiet',
		],
		strategies: [
			'Listen closely to the sound the ghost makes during the hunt (footsteps and voice), it will be lower than other ghosts.',
			'Another way to tell is by dropping a flashligh turned on in your hiding spot and pay attention if you can only hear the footsteps when the flashligh is flashing. With other ghosts you will be able to hear the footsteps first.',
		],
		evidence: ['EMF 5', 'Fingerprints', 'Writing'],
	},
	{
		name: 'Onryo',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			"WARNING: Onryo is the most polemic ghost because of its confusing abilities, there's been many discussions about how it actually works, so I'll share what I know, but please remember that some of it might not be 100% correct. I'll put a warning on those cases.",
			'More likely to blow out candles.',
			"Candles work just like a crucifix for Onryo, but with a range of 5 meters instead of 3, so Onryon can't hunt close to a candle, it will blow it instead.",
			'After 3 candles have been blown out, each consecutive blown out candle has a 50% chance to start a hunt regardeless of the average sanity.',
			"WARNING: It's been said that the above ability works like this: Onryo has a candle counter, when it blows 3 candles it has 100% chance of hunting, and then the counter resets and repeats (I don't confirm that because I was never able to test it, but a lot of people told me they tested it and it indeed works like that).",
			'When it uses its ability to hunt after a blown candle it is not actually immediatly after blowing it, it takes around 4 seconds to hunt.',
			"Onryo can hunt at any% sanity if it uses its ability to hunt after blowing candles, it's actually pretty common for Onryo to hunt as soon as you open the door on Sunny Meadows if the ghost room is on the chapel because it can blow the candles that are spawned there.",
			'Each dead player increases the chance of hunting after blowing out candles by 25%, that means if 2 players are dead the chance of a hunt is 100% after a blown out candle.',
			"WARNING: It's been said that after a player dies it decreases the timer to hunt after a blown candle, so if at first it was 4 seconds, it will be 3 after one player dies.",
			"It's been said that Onryo is the only ghost that can blow more than 1 candles at the same time.",
			'It happened to me a lot that if I never let the candles on the ghost room goes out, it will roam to another room and attempt hunting from there.',
		],
		strategies: [
			'WARNING: In addition to being confusing in the abilities, the strategies are also a little complicated.',
			"WARNING: This is really important regarding Onryo tests: Since Onryo uses candles as crucifixes, if there's more than 1 candle nearby it may be hard to notice its abilities.",
			"The most common strategy is to set up a candle on top of a crucifix, it is impossible for the Onryo to burn the crucifix if there is a lit candle on top of it, so if it uses the crucifix and the candle is lit, it's 100% not an Onryo.",
			"Check if the ghost is more likely to hunt (or attempt a hunt) after blowing candles, BUT remember that Onryo takes a few seconds to attempt hunt after blowing the candle, so don't instantly light it after being blown.",
		],
		evidence: ['Spirit Box', 'Orbs', 'Freezing'],
	},
	{
		name: 'The Twins',
		hunt: '50% (normal)',
		speed: "1.4m/s (little slower) when it's the main twin hunting | 1.7 (little faster) when it's the second twin hunting",
		behaviour: [
			'One ghost, but has a decoy that can interact and hunt far from the Ghost Room.',
			"The second twin will hunt on the last 'twinteraction' so where was the last time the ghost interacted with far from the ghost room.",
			'The main twin speed will be 90% of the normal ghost speed while the other will be 110% of the normal ghost speed, in other words, the main twin is little slower than normal while the second is a little faster.',
			"Crucifixes only need to be placed where the main twin is (I'm not sure if the decoy can use the crucifix or not).",
			'Can do 2 interactions at the exact same time.',
			"Will often leave 'slope changing' lines on the activity chart. If the lines changes slopes without leveling off it's almost always The Twins.",
		],
		strategies: [
			"Pay attention to the ghost speed every hunt, try to check if sometimes it's a little bit slower than normal and sometimes it's a little bit faster than normal.",
			"If hear two things being interacted at once (2 cups being thrown or a cup and a door moving, etc) it's The Twins. Be careful to not mistake it to a very active Ghost.",
			"If the ghost interacted with something in a room and then interacted with something far from its last spot (like throwing something in tanglewood kitchen and then touching a door in another room) almost at the same time that you are like 'ok, it couldn't walk that fast to the other side', it means it's The Twins.",
		],
		evidence: ['EMF 5', 'Spirit Box', 'Freezing'],
	},
	{
		name: 'Raiju',
		hunt: '50% (normal) when no active equipment is close | 65% (early) when active equipment is close',
		speed: '1.6m/s (normal) when no active equipment is close to it | 2.5m/s (very fast) when active equipment is close to it',
		behaviour: [
			'Can hunt at 65% sanity when there is active eletronic equipment nearby.',
			'Much faster when active eletronic equipment is nearby.',
			'Glitches eletronic equipments in a larger range.',
			"Building's lights and breaker do not affect Raiju.",
			'Photo cameras on the ground do not affect Raiju, but video cameras do if it was put pressing F, but if it was thrown pressing G they will be turned off.',
		],
		strategies: [
			"Drop some equipment close to your hiding spot, when the equipment starts glitching during the hunt and the ghost gets faster you know it's a Raiju. Just be careful if the ghost is already fast because there is some equipment where it is.",
			'In addition to the above test, you can try turning the eletronic equipments off and check on another hunt if it will be slower.',
			"Raiju is one of the few ghosts that can change their speed during a hunt, so let's say you are playing Willow Street and the ghost is in the basement where the equipment is and it slows down upstairs where there's no equipment, then that means you are dealing with a Raiju.",
		],
		evidence: ['EMF 5', 'Orbs', 'D.O.T.S'],
	},
	{
		name: 'Obake',
		hunt: '50% (normal)',
		speed: '1.6m/s (normal)',
		behaviour: [
			'75% chance of leaving fingerprints when touching a door, while all other ghosts are 100% (except on nightmare if the ghost is hiding that evidence or on custom mode if you change fingerprints chance).',
			'Small chance of leaving a special fingerpint, can be 6 fingers fingerprint on a door or window, 2 finger fingerprint on light switches.',
			'Can use an ability to reduce the timer for all fingerprints, causing them to disappear more quickly.',
			'This ghost will change its model at least 1 time during a hunt.',
		],
		strategies: [
			"Check every fingerprint, if there is a hand with 6 fingers, it's an Obake.",
			"Fingerprints are 100% chance of showing except for Obake, which is 75% so if there's no fingerprint after touching something and then it appears later, it is a Obake. It also works the other way, if there's fingerprints, but you saw it touching a door and now there was no fingerprints it also means Obake.",
			'You can try to loop this ghost around to see if it will change the ghost model, it happens after one of the blinks the ghost does during a hunt and then when it blinks again it will go back to the original model.',
		],
		evidence: ['EMF 5', '*Fingerprints', 'Orbs'],
	},
	{
		name: 'The Mimic',
		hunt: '???',
		speed: '???',
		behaviour: [
			'This ghost can mimic any other ghost behaviour and ability, for example, 6 fingers fingerprint from Obake, hunting at 100% sanity like Demon, Banshee scream or Raiju extremely fast speed around eletronics.',
			'This ghost ALWAYS shows orbs, even on no evidence custom game, but they are fake.',
			'Will change the ghost it is mimicking every 30 seconds to 2 minutes, but never during a hunt.',
		],
		strategies: [
			"If the ghost is changing behaviour a lot (is extremely fast one hunt, then slow, then fast again for no reason) you can suspect Mimic. Also, if it has, for example, Freezing Temperatures and a 6 finger fingerprint, it's a Mimic that is mimicking the Obake.",
			"You can get the 3 evidences for Onryo and Hantu when it's a Mimic, so if you have Hantu, for example, but the ghost is not behaving like Hantu, you have a Mimic.",
		],
		evidence: ['Spirit Box', 'Fingerprints', 'Freezing', '*Fake Orbs'],
	},
	{
		name: 'Moroi',
		hunt: '50% (normal)',
		speed: 'Starts at 1.4m/s (little slow) | Gradually reach 2.1m/s (fast) the lower the team sanity is',
		behaviour: [
			'Curses players who use and get an answer from the Sipirt Box or Parabolic Microphone. This is cured by taking sanity pills.',
			'Passive sanity drain is doubled when cursed and will still drain when inside rooms with lights on.',
			'Faster when the average sanity is lower.',
			'Smudging during a hunt will repel the Moroi for twice as long (12s instead of the normal 6s).',
		],
		strategies: [
			'If the Ghost answered someone on Spirit Box check their sanity, if it lows down fast.',
			'Pay attention to the ghost speed and your sanity, Moroi gets faster when the team average sanity is lower.',
			'You may not know what the normal ghost speed is like, so try to identify if it is getting different, most ghosts have a constant ghost speed.',
		],
		evidence: ['*Spirit Box', 'Writing', 'Freezing'],
	},
	{
		name: 'Deogen',
		hunt: '40% (late)',
		speed: '0.4m/s (slowest ghost) when close from the player | 3m/s (fastest ghost) when far from the player',
		behaviour: [
			"WARNING: IT'S IMPOSSIBLE TO HIDE FROM A DEOGEN, NEVER HIDE!!!",
			"Deogen can be the most dangerous ghost when you don't know it's them, but the also the most harmless when you know.",
			'They will be very fast when far, but the slowest ghost when close.',
			'Has a chance to perform a special Spirit Box sound when asked any question and when you are on top of the ghost, it sounds like a heavy breathing.',
			"Blinks very quickly during hunts, it means it is very visible, it's opposed to the Phantom.",
			'In my experience Deogens usually get really aggressive (interacts a lot around the house), when the average sanity gets around 50%, but this is not confirmed of being a fact.',
		],
		strategies: [
			'You will hear the ghost running extremely fast and going directly to you (this is actually pretty scary) and then when it gets to you it will be extremely slow, if that happens and you are hiding LEAVE YOUR HIDING SPOT IMMEDIATLY.',
			"You actually can't miss it, Deogen and Revenant are the most obvious ghosts, you just need one hunt.",
			"If Deogen is a possibility don't hide, stay in an open area that you can loop it and with a smudge in your hand, if it is a Deogen it will walk really slow and you won't have to use the smudge, if it's not a Deo you can smudge and leave.",
			'Put some salt in the room, the Ghost will walk on it, follow the Footprint, when it stops use a Spirit Box. You might hear the special Spirit Box sound.',
		],
		evidence: ['*Spirit Box', 'Writing', 'D.O.T.S'],
	},
	{
		name: 'Thaye',
		hunt: 'Start 75% (early) | Gradually reach 35% (late)',
		speed: 'Start 2.7m/s (very fast) | Gradually reach 1.0 (very slow)',
		behaviour: [
			'Thaye is the Aging Ghost, it will begin as an extremelly OP Ghost, but will gradually become weak because it will age.',
			'Initial interaction / Ghost event rate is 200%, -15% as it ages, final condition is 50% interaction rate',
			'-6% hunt sanity needed to begin a hunt as it ages, final condition is 35%',
			'-0.175m/s speed as it ages, final condition is 1.0m/s',
			'Has a chance to age every 1 to 2 minutes and every 30 seconds if the previous aging attempt failed.',
			'Aging succeeds if a player is close to the ghost when it attempts to age.',
			'Can age up to 10 times.',
			'When asking the Ouija Board their age, the response will change as the Thaye ages, so remember to say happy birthday.',
		],
		strategies: [],
		evidence: ['Orbs', 'Writing', 'D.O.T.S'],
	},
];

export { ghostInfo };
