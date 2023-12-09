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
    name: "Spirit",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Spirits can't hunt for 3 minutes after being smudged, while all other ghosts (except Demon) can't hunt for 1:30 minutes.",
    ],
    strategies: [
      "Lower your sanity enough so the ghost will hunt frequently, then use a smudge stick on the ghost (it can be during a hunt or not, but be sure the ghost was hit with the smudge), check if it will take less than 3 minutes to hunt, you can also use a timer to be sure (for what I know the timer starts exactly when the ghost was smudged, but if it was during a hunt, some say it is when the hunt ends).",
    ],
    evidence: ["EMF 5", "Spirit Box", "Escrita"],
  },
  {
    name: "Wraith",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Can't step on salt.",
      "Can teleport on top of a player and give EMF 2 or 5.",
    ],
    strategies: [
      "To test for Wraith you can put salt inside its room, if it doesn't step on it, then it might be a Wraith, if it does step on it, then it's 100% not a Wraith.",
      "Another way to find out if it's a Wraith is by having an EMF with you, if you there was no interaction but the EMF beeped with 2 or 5 it might be because the Wraith teleported on top of you.",
    ],
    evidence: ["EMF 5", "Spirit Box", "D.O.T.S"],
  },
  {
    name: "Phantom",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Will never appear in a ghost photo.",
      "It is less visible during a hunt, because it blinks less frequently.",
    ],
    strategies: [
      "You can take a ghost photo when a ghost event happens, or using a curse object, or during a hunt, but note that taking a ghost photo during a hunt can be incredibly difficult, specially when it is a Phantom.",
      "You can also try to look at the ghost during a hunt to see if it gets invisible for more time than other ghosts, can be difficult to know the difference at the beginning, but with some practice you will be able to tell the difference.",
    ],
    evidence: ["Spirit Box", "Ultravioleta", "D.O.T.S"],
  },
  {
    name: "Poltergeist",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Can throw a bunch of things at once.",
      "Can throw things at longer distance.",
      "Has 100% chance of throwing objects at range durging a hunt every 0.5 seconds,while other ghosts have 50% chance.",
    ],
    strategies: [
      "The most known Poltergeist test is making a pile of objects inside the ghost room, the Polter may throw it all (or most of it) in the air while every other ghost can only throw one thing at a time.",
      "If you see an object flying pretty far you can also suspect it might be a Poltergeits.",
      "If the ghost is throwing objects very frequently you can also suspect it might be a Poltergeist.",
    ],
    evidence: ["Spirit Box", "Ultravioleta", "Escrita"],
  },
  {
    name: "Banshee",
    hunt: "50% TARGET SANITY",
    speed: "1.6m/s (normal)",
    //check info
    behaviour: [
      "Banshee chooses a random target at the beginning of the round (if you are playing alone the target will always be you, of course).",
      "If the target dies Banshee will choose a new target.",
      "This ghost hunts based on the sanity of the target, not the average team sanity like every other ghost.",
      "If the target is inside the house during a hunt, Banshee will not kill anyone that is not the target, other player can walk through the ghost and will not get killed.",
      "If the target is not inside the house during a hunt, Banshee will hunt like any other ghost, chasing and killing anyone that it sees.",
      "Has small change of giving a unique sound (a disturbing scream) that can be heard using the parabolic microphone.",
      "Can teleport to its target.",
    ],
    strategies: [
      "If you hear the unique scream in the parabolic mic then it is a Banshee.",
      "If you are far from the ghost room and notice the ghost interacted close to you it might be because you are the target and it teleported to you.",
      "WARNING: THE FOLLOWING STRATEGIES CAN ONLY BE DONE IF PLAYING WITH OTHER PEOPLE!",
      "If you think you got an early hunt you should check the sanity monitor in the truck, if the average team sanity is above 50%, but one player is lower than 50% it is possible it's a Banshee and that player is the target.",
      "A dangerous way to test for Banshee is to have all the players inside the house, everybody hide except for one player that will test it, this player will try to attract the ghost, see if it follows the player, preferably try to loop it a little to be sure, sometimes the ghost will go to your direction randomly, not because it is chasing you, you can also pay attention to the ghost speed, if it increases when it sees you is because it is chasing you. If the ghost does chase you, then you try again the same thing with another player testing it, if the ghost chases both players then its not a Banshee (note that everyone needs to be inside for this to work properly, if the actual target isn't inside the house the Banshee will hunt normaly).",
    ],
    evidence: ["Ultravioleta", "Orbe", "D.O.T.S"],
  },
  {
    name: "Jinn",
    hunt: "50% (normal)",
    speed:
      "2.5m/s when chasing but far from player if breaker is on (fast) - 1.6m/s not chasing (normal)",
    behaviour: [
      "Cannot turn the breaker off.",
      "Can only use its abilities if the breaker is on.",
      "Has a random chance of draining 25% sanity with no visual or audio events, when this ability is used it will cause an EMF 2 or 5 on the breaker.",
      "Is faster when it sees a player, but is far from them and slows a bit when closer to them.",
    ],
    strategies: [
      "If the ghost turns the breaker off at any moment, it's 100% not a Jinn, just be careful to not turn too many lights on and overcharge the breaker making it turning off, it may confuse you thinking it was the ghots. You can check the breaker using EMF right after the lights went off to be sure if it was the ghost or not.",
      "If you are suspecting Jinn you can also leave an EMF on top of the breaker, if it beeps for no reason is because Jinn used its ability to drain sanity from someone.",
      "During a hunt stay in a hallway or somewhere with long space (I will use tanglewood garage for example), be on the farthest from where the ghost will come from, in this case be on the garage gate and observe. If the ghost comes from the laundry room running really fast and then slowing down when besides the car, it is a Jinn.",
    ],
    evidence: ["EMF 5", "Ultravioleta", "Temperatura Baixa"],
  },
  {
    name: "Mare",
    hunt: "60% if lights are off / 40% if lights are on",
    speed: "1.6m/s (normal)",
    behaviour: [
      "More like to roam from rooms with lights on.",
      "Increase chance of attacking in the dark.",
      "Lower chance of attacking if the lights are on.",
      "Can hunt earlier if the lights are off, and hunt later if lights are on.",
      "Will never turn a light on.",
      "More likely to explode lights.",
      "Can immediately turn off a light after you turn it on.",
    ],
    strategies: [
      "Turn the lights on in the ghost room on and put a crucifix in there, if the ghost hunts with the lighst on is not likely it is a Mare, but it is still possible. Also be careful if it is a Mare it may cause the ghost to roam from the room and start a hunt elsewhere.",
      "You can try to turn the light on the ghost room often to see if it will use the ability to immediately turn it off.",
    ],
    evidence: ["Spirit Box", "Orbe", "Escrita"],
  },
  {
    name: "Revenant",
    hunt: "50% (normal)",
    speed:
      "1.1m/s if not chasing (very slow) / 3.0m/s when chasing (very fast)",
    behaviour: [
      "Extremely slow when not chasing someone.",
      "Extremely fast when chasing someone.",
    ],
    strategies: [
      "Revenant is one of the easies ghosts to find when it's hunting, if you are hiding and he is not chasing anyone he will be extremely slow, and I repeat, EXTREMELY slow, you will know. Also remember it will be EXTREMELY fast if it sees you.",
    ],
    evidence: ["Orbe", "Escrita", "Temperatura Baixa"],
  },
  {
    name: "Shade",
    hunt: "35%",
    speed: "1.6m/s (late)",
    behaviour: [
      "Won't interact much in the ghost room if someone is there.",
      "Shade will never start a hunt in the same room as a player.",
      "Doesn't do ghost events often, and will never appear in flesh/physical form, but it can still appear as a shadow, gas or translucent ghost.",
      "Will never appear in flesh when using Summoning Circle and Music Box.",
    ],
    strategies: [
      "Shades usually don't interact much, but don't get mistaken sometimes it does interact a lot, but not in the same room as a player.",
      "Remember to check your sanity after a hunt, if it was above 35% it can't be a Shade.",
      "If it starts hunts far from the ghost room when people are in there it can be a Shade.",
    ],
    evidence: ["EMF 5", "Escrita", "Temperatura Baixa"],
  },
  {
    name: "Demon",
    hunt: "75% / Any% (early)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Can rarely hunt at any% sanity.",
      "When smudged, can't hunt for 1 minute instead of the normal 1.5 minutes.",
      "Are affected by crucifixes from a much larger distance (5m instead the normal 3m).",
    ],
    strategies: [
      "If you just entered the house and a hunt began, it's a Demon.",
      "If you got an early hunt check your sanity, if it is above 60% there it is probably a Demon.",
      "If your crucifixes are burning fast or the ghost is constantly hunting, it's probably a Demon.",
    ],
    evidence: ["Ultravioleta", "Escrita", "Temperatura Baixa"],
  },
  {
    name: "Yurei",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Can close a door completely and it will drain of 15% sanity of nearby players.",
      "Smudging will prevent roaming for 90 seconds (I think it doesn't work during a hunt, not sure).",
    ],
    strategies: [
      "Yurei can't leave the Ghost Room for 1:30 minutes after smudging, so use a Motion Sensor and/or salt to check if it'll leave.",
      "Pay close attention to doors, if there is a door completely open and the ghost closes it completely you can be sure it's a Yurei (have in mind that every ghost can close a door completly when it does a ghost event).",
    ],
    evidence: ["Orbe", "Temperatura Baixa", "D.O.T.S"],
  },
  {
    name: "Oni",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "More likely to do ghost events.",
      "Can't do the airball ghost event.",
      "Makes players lose sanity faster than other ghosts when doing an Ghost Event.",
      "Blink faster (is more visible) during a hunt.",
    ],
    strategies: [
      "You can suspect it's Oni if it is doing too much ghost events, specially at the beggining of the round.",
      "It's not an Oni if it does the air ball event.",
    ],
    evidence: ["EMF 5", "Temperatura Baixa", "D.O.T.S"],
  },
  {
    name: "Yokai",
    hunt: "50% (normal) / 80% if someone is talking nearby (early)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Can hunt as early as 80% sanity if someone is talking near the ghost.",
      "Can't detect equipment and voice if more than 2 meters range during a hunt.",
    ],
    strategies: [
      "You can try talking a lot inside the ghost room, if the ghost usually hunts when you are talking and doesn't hunts when you are not talking it might be Yokai.",
      "You can also try to attract the ghost during a hunt. If you are hearing that the ghost is in the same level as you, but not so close to you, try to say something on your mic of turn you flashlight on, if your equipment is flashing and the ghost doesn't come to you it's probably a Yokai, be careful to not be too close to the ghost when doing this and remember it won't work if you are on a different floor of the ghost. ",
    ],
    evidence: ["Spirit Box", "Orbe", "D.O.T.S"],
  },
  {
    name: "Hantu",
    hunt: "50% (normal)",
    speed: "1.4m/s (a little slow) / 2.7m/s (fast)",
    behaviour: [
      "Will be always fast inside the ghost room.",
      "Will be fast inside the entire house if the breaker is off.",
      "Will be a little slower when outside the ghost room if the breaker is on.",
      "Does not speed up when chasing.",
      "Can't turn on the breaker.",
      "More likely to turn off the breaker.",
      "It can make you blow Temperatura Baixa breath outside the ghost room during a hunt.",
      "Always has Temperatura Baixa Temperature on Nightmare or Insane mode.",
    ],
    strategies: [
      "If the breaker is on and the ghost is fast in its room, but slows down when out of it, it's a Hantu.",
      "During a hunt you can get in line of sight of the ghost and let it chase you, if the ghost does not speed up when chasing, it's a Hantu.",
      "Let's say the breaker is on and you notice the ghost is kinda slow, but you weren't able to hear it inside the ghost room or it didn't spawn in the ghost room. You can turn off the breaker and see if the ghost will be fast now.",
    ],
    evidence: ["Ultravioleta", "Orbe", "*Temperatura Baixa"],
  },
  {
    name: "Goryo",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Cannot perform a long roam, but can still roam.",
      "Cannot change ghost room (unsure if it's impossible or unlikely)",
      "Only shows D.O.T.S on camera.",
      "Always has D.O.T.S on Nightmare or Insane mode.",
    ],
    strategies: [
      "If you only see D.O.T.S on camera, it might be a Goryo.",
      "WARNING: D.O.T.S is one of the most anoying evindences to get, so be patience.",
      "Goryo won't change ghost room and won't roam too often, it also won't roam too far from its ghost room",
    ],
    evidence: ["EMF 5", "Ultravioleta", "*D.O.T.S"],
  },
  {
    name: "Myling",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "More likely to make noises on the Parabolic Microphone.",
      "During a hunt it is really quiet",
    ],
    strategies: [
      "Listen closely to the sound the ghost makes during the hunt (footsteps and voice), it will be lower than other ghosts.",
      "Another way to tell is by dropping a flashligh turned on in your hiding spot and pay attention if you can only hear the footsteps when the flashligh is flashing. With other ghosts you will be able to hear the footsteps first.",
    ],
    evidence: ["EMF 5", "Ultravioleta", "Escrita"],
  },
  {
    name: "Onryo",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "WARNING: Onryo is the most polemic ghost because of its confusing abilities, there's been many discussions about how it actually works, so I'll share what I know, but please remember that some of it might not be 100% correct. I'll put a warning on those cases.",
      "More likely to blow out candles.",
      "Candles work just like a crucifix for Onryo, but with a range of 5 meters instead of 3, so Onryon can't hunt close to a candle, it will blow it instead.",
      "After 3 candles have been blown out, each consecutive blown out candle has a 50% chance to start a hunt regardeless of the average sanity.",
      "WARNING: It's been said that the above ability works like this: Onryo has a candle counter, when it blows 3 candles it has 100% chance of hunting, and then the counter resets and repeats (I don't confirm that because I was never able to test it, but a lot of people told me they tested it and it indeed works like that).",
      "When it uses its ability to hunt after a blown candle it is not actually immediatly after blowing it, it takes around 4 seconds to hunt.",
      "Onryo can hunt at any% sanity if it uses its ability to hunt after blowing candles, it's actually pretty common for Onryo to hunt as soon as you open the door on Sunny Meadows if the ghost room is on the chapel because it can blow the candles that are spawned there.",
      "Each dead player increases the chance of hunting after blowing out candles by 25%, that means if 2 players are dead the chance of a hunt is 100% after a blown out candle.",
      "WARNING: It's been said that after a player dies it decreases the timer to hunt after a blown candle, so if at first it was 4 seconds, it will be 3 after one player dies.",
      "It's been said that Onryo is the only ghost that can blow more than 1 candles at the same time.",
      "It happened to me a lot that if I never let the candles on the ghost room goes out, it will roam to another room and attempt hunting from there.",
    ],
    strategies: [
      "WARNING: In addition to being confusing in the abilities, the strategies are also a little complicated.",
      "WARNING: This is really important regarding Onryo tests: Since Onryo uses candles as crucifixes, if there's more than 1 candle nearby it may be hard to notice its abilities.",
      "The most common strategy is to set up a candle on top of a crucifix, it is impossible for the Onryo to burn the crucifix if there is a lit candle on top of it, so if it uses the crucifix and the candle is lit, it's 100% not an Onryo.",
      "Check if the ghost is more likely to hunt (or attempt a hunt) after blowing candles, BUT remember that Onryo takes a few seconds to attempt hunt after blowing the candle, so don't instantly light it after being blown.",
    ],
    evidence: ["Spirit Box", "Orbe", "Temperatura Baixa"],
  },
  {
    name: "The Twins",
    hunt: "50% (normal)",
    speed:
      "1.4m/s (little slower) when it's the main twin hunting | 1.7 (little faster) when it's the second twin hunting",
    behaviour: [
      "One ghost, but has a decoy that can interact and hunt far from the Ghost Room.",
      "The second twin will hunt on the last 'twinteraction' so where was the last time the ghost interacted with far from the ghost room.",
      "The main twin speed will be 90% of the normal ghost speed while the other will be 110% of the normal ghost speed, in other words, the main twin is little slower than normal while the second is a little faster.",
      "Crucifixes only need to be placed where the main twin is (I'm not sure if the decoy can use the crucifix or not).",
      "Can do 2 interactions at the exact same time.",
      "Will often leave 'slope changing' lines on the activity chart. If the lines changes slopes without leveling off it's almost always The Twins.",
    ],
    strategies: [
      "Pay attention to the ghost speed every hunt, try to check if sometimes it's a little bit slower than normal and sometimes it's a little bit faster than normal.",
      "If hear two things being interacted at once (2 cups being thrown or a cup and a door moving, etc) it's The Twins. Be careful to not mistake it to a very active Ghost.",
      "If the ghost interacted with something in a room and then interacted with something far from its last spot (like throwing something in tanglewood kitchen and then touching a door in another room) almost at the same time that you are like 'ok, it couldn't walk that fast to the other side', it means it's The Twins.",
    ],
    evidence: ["EMF 5", "Spirit Box", "Temperatura Baixa"],
  },
  {
    name: "Raiju",
    hunt: "50% (normal) when no active equipment is close | 65% (early) when active equipment is close",
    speed:
      "1.6m/s (normal) when no active equipment is close to it | 2.5m/s (very fast) when active equipment is close to it",
    behaviour: [
      "Can hunt at 65% sanity when there is active eletronic equipment nearby.",
      "Much faster when active eletronic equipment is nearby.",
      "Glitches eletronic equipments in a larger range.",
      "Building's lights and breaker do not affect Raiju.",
      "Photo cameras on the ground do not affect Raiju, but video cameras do if it was put pressing F, but if it was thrown pressing G they will be turned off.",
    ],
    strategies: [
      "Drop some equipment close to your hiding spot, when the equipment starts glitching during the hunt and the ghost gets faster you know it's a Raiju. Just be careful if the ghost is already fast because there is some equipment where it is.",
      "In addition to the above test, you can try turning the eletronic equipments off and check on another hunt if it will be slower.",
      "Raiju is one of the few ghosts that can change their speed during a hunt, so let's say you are playing Willow Street and the ghost is in the basement where the equipment is and it slows down upstairs where there's no equipment, then that means you are dealing with a Raiju.",
    ],
    evidence: ["EMF 5", "Orbe", "D.O.T.S"],
  },
  {
    name: "Obake",
    hunt: "50% (normal)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "75% chance of leaving Ultravioleta when touching a door, while all other ghosts are 100% (except on nightmare if the ghost is hiding that evidence or on custom mode if you change Ultravioleta chance).",
      "Small chance of leaving a special fingerpint, can be 6 fingers fingerprint on a door or window, 2 finger fingerprint on light switches.",
      "Can use an ability to reduce the timer for all Ultravioleta, causing them to disappear more quickly.",
      "This ghost will change its model at least 1 time during a hunt.",
    ],
    strategies: [
      "Check every fingerprint, if there is a hand with 6 fingers, it's an Obake.",
      "Ultravioleta are 100% chance of showing except for Obake, which is 75% so if there's no fingerprint after touching something and then it appears later, it is a Obake. It also works the other way, if there's Ultravioleta, but you saw it touching a door and now there was no Ultravioleta it also means Obake.",
      "You can try to loop this ghost around to see if it will change the ghost model, it happens after one of the blinks the ghost does during a hunt and then when it blinks again it will go back to the original model.",
    ],
    evidence: ["EMF 5", "*Ultravioleta", "Orbe"],
  },
  {
    name: "The Mimic",
    hunt: "???",
    speed: "???",
    behaviour: [
      "This ghost can mimic any other ghost behaviour and ability, for example, 6 fingers fingerprint from Obake, hunting at 100% sanity like Demon, Banshee scream or Raiju extremely fast speed around eletronics.",
      "This ghost ALWAYS shows Orbe, even on no evidence custom game, but they are fake.",
      "Will change the ghost it is mimicking every 30 seconds to 2 minutes, but never during a hunt.",
    ],
    strategies: [
      "If the ghost is changing behaviour a lot (is extremely fast one hunt, then slow, then fast again for no reason) you can suspect Mimic. Also, if it has, for example, Temperatura Baixa Temperatures and a 6 finger fingerprint, it's a Mimic that is mimicking the Obake.",
      "You can get the 3 evidences for Onryo and Hantu when it's a Mimic, so if you have Hantu, for example, but the ghost is not behaving like Hantu, you have a Mimic.",
    ],
    evidence: ["Spirit Box", "Ultravioleta", "Temperatura Baixa", "*Fake Orbe"],
  },
  {
    name: "Moroi",
    hunt: "50% (normal)",
    speed:
      "Starts at 1.4m/s (little slow) | Gradually reach 2.1m/s (fast) the lower the team sanity is",
    behaviour: [
      "Curses players who use and get an answer from the Sipirt Box or Parabolic Microphone. This is cured by taking sanity pills.",
      "Passive sanity drain is doubled when cursed and will still drain when inside rooms with lights on.",
      "Faster when the average sanity is lower.",
      "Smudging during a hunt will repel the Moroi for twice as long (12s instead of the normal 6s).",
    ],
    strategies: [
      "If the Ghost answered someone on Spirit Box check their sanity, if it lows down fast.",
      "Pay attention to the ghost speed and your sanity, Moroi gets faster when the team average sanity is lower.",
      "You may not know what the normal ghost speed is like, so try to identify if it is getting different, most ghosts have a constant ghost speed.",
    ],
    evidence: ["*Spirit Box", "Escrita", "Temperatura Baixa"],
  },
  {
    name: "Deogen",
    hunt: "40% (late)",
    speed:
      "0.4m/s (slowest ghost) when close from the player | 3m/s (fastest ghost) when far from the player",
    behaviour: [
      "WARNING: IT'S IMPOSSIBLE TO HIDE FROM A DEOGEN, NEVER HIDE!!!",
      "Deogen can be the most dangerous ghost when you don't know it's them, but the also the most harmless when you know.",
      "They will be very fast when far, but the slowest ghost when close.",
      "Has a chance to perform a special Spirit Box sound when asked any question and when you are on top of the ghost, it sounds like a heavy breathing.",
      "Blinks very quickly during hunts, it means it is very visible, it's opposed to the Phantom.",
      "In my experience Deogens usually get really aggressive (interacts a lot around the house), when the average sanity gets around 50%, but this is not confirmed of being a fact.",
    ],
    strategies: [
      "You will hear the ghost running extremely fast and going directly to you (this is actually pretty scary) and then when it gets to you it will be extremely slow, if that happens and you are hiding LEAVE YOUR HIDING SPOT IMMEDIATLY.",
      "You actually can't miss it, Deogen and Revenant are the most obvious ghosts, you just need one hunt.",
      "If Deogen is a possibility don't hide, stay in an open area that you can loop it and with a smudge in your hand, if it is a Deogen it will walk really slow and you won't have to use the smudge, if it's not a Deo you can smudge and leave.",
      "Put some salt in the room, the Ghost will walk on it, follow the Footprint, when it stops use a Spirit Box. You might hear the special Spirit Box sound.",
    ],
    evidence: ["*Spirit Box", "Escrita", "D.O.T.S"],
  },
  {
    name: "Thaye",
    hunt: "Start 75% (early) | Gradually reach 35% (late)",
    speed: "Start 2.7m/s (very fast) | Gradually reach 1.0 (very slow)",
    behaviour: [
      "Thaye is the Aging Ghost, it will begin as an extremelly OP Ghost, but will gradually become weak because it will age.",
      "Initial interaction / Ghost event rate is 200%, -15% as it ages, final condition is 50% interaction rate",
      "-6% hunt sanity needed to begin a hunt as it ages, final condition is 35%",
      "-0.175m/s speed as it ages, final condition is 1.0m/s",
      "Has a chance to age every 1 to 2 minutes and every 30 seconds if the previous aging attempt failed.",
      "Aging succeeds if a player is close to the ghost when it attempts to age.",
      "Can age up to 10 times.",
      "When asking the Ouija Board their age, the response will change as the Thaye ages, so remember to say happy birthday.",
    ],
    strategies: [
      "If you get the Ouija Board you can ask the ghost their age, it costs very little sanity and then you can ask it later in game to see if it changed. Thaye age will change when you stay in the ghost room.",
      "Pay attetion to the ghost speed on the first hunt, Thaye will probably be really fast and hunt earlier, but this may change if you found the ghost room pretty soon and stayed there for some time, then spend some time in the ghost room and check if it will be slower.",
    ],
    evidence: ["Orbe", "Escrita", "D.O.T.S"],
  },
];

const ghostInfoBr: IghostInfo[] = [
  {
    name: "Spirit",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Spirits não podem atacar antes de 3:00 minutos a partir do momento que foi usado um incenso, enquanto outros fantasmas não podem atacar por 1:30 e o demônio não pode atacar por 1:00 (O exato momento que um incenso foi usado).",
      "Se um incenso for usado e não tiver passado os 3 minutos e outro incenso for usado o cronometro continua contando o primeiro incenso (informação não 100% confirmada).",
    ],
    strategies: [
      "Abaixe sua sanidade ao máximo (tente ficar com 0 para um teste mais garantido), assim o fantasma atacará com frequência, use um incenso durante o ataque (não precisa ser durante um ataque, mas dessa forma é mais garantido que o incenso acertou o fantasma) e ative um cronometro na mesma hora e aguarde. Se o fantasma atacar antes de 3 minutos pode descartar Spirit.",
    ],
    evidence: ["EMF 5", "Spirit Box", "Escrita"],
  },
  {
    name: "Wraith",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Não pode pisar em sal.",
      "Pode teletransportar para um jogador e causar EMF-2 ou EMF-5.",
    ],
    strategies: [
      "Coloque sal no local favorito do fantasma, de preferencia espalhe bem o sal, colocando e pontos diferentes no quarto e aguarde, se o fantasma não pisar no sal hora nenhuma pode se dizer que é um Wraith.",
      "Caso o fantasme pise no sal é 100% de certeza que não é um Wraith.",
      "Use sensores de movimento para ter certeza que o fantasma caminhou pelo sal e não deixou pegadas.",
      "Se você tiver um detector de EMF por perto e ele começou a apitar sem motivo (não escutou som de porta ou itens jogados), pode-se suspeitar que o Wraith usou sua habilidade de teletransporte em você.",
    ],
    evidence: ["EMF 5", "Spirit Box", "D.O.T.S"],
  },
  {
    name: "Phantom",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Nunca aparecerá em uma foto de fantasma.",
      "É menos visível durante ataques.",
      "Possui a habilidade de andar até um jogador não importa onde ele esteja, similar a habilidade do Wraith (Se não em engano usar essa habilidade causará EMF-2).",
    ],
    strategies: [
      "Tire foto do fantasma, pode ser durante uma aparição, ataque e até mesmo durante o D.O.T.S, se o fantasma desaparecer na mesma hora que tirou a foto significa que você está lidando com um Phantom.",
      "Caso incerto se o fantasma sumiu na hora da foto ou se foi coincidência, basta olhar o album de fotos, se a foto estiver lisa (sem efeito de glitch/falha da camera) e o fantasma não aparece na foto, mas a foto conta como fantasma no album, está confirmado, é um Phantom!",
      "O Phantom fica mais tempo invisível duranto o ataque, ou seja, todo fantasma fica piscando durante o ataque, porém o Phantom quando piscar vai ficar mais tempo sem aparecer.",
    ],
    evidence: ["Spirit Box", "Ultravioleta", "D.O.T.S"],
  },
  {
    name: "Poltergeist",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Pode jogar vários objetos ao mesmo tempo (a famosa PolterBomb).",
      "Pode jogar objetos mais longe que outros fantasmas.",
      "Tem 100% de chance de jogar um objeto a cada 0.5 segundos durante o ataque (se houver objeto próximo ao fantasma).",
    ],
    strategies: [
      "Polter Bomb: O teste mais conhecido do Poltergeist é preparar uma PolterBomb, isso é, monte uma pilha de objetos dentro do local favorito do fantasma, não precisa exagerar, 5 objetos já é o suficiente. Após isso só resta esperar, se o fantasma jogar todos os objetos pra tudo que é lado significa que você está lidando com um Poltergeist. Na dúvida você pode usar um EMF nível 3 para verificar se mais de um objeto foi realmente jogado.",
      "Polter Furacão: Se você sabe loopar o fantasma tente esse teste para descobrir o Poltergeist mais rápido. Coloque vários objetos em volta de algum local que você pode loopar o fantasma, como o balcão da cozinha de Tanglewood por exemplo. Aguarde o ataque e fique andando em circulos com o fantasma em volta dos objetos, se você perceber o fantasma jogando os objetos sem parar, pode-se dizer que é um Poltergeist.",
      "Polter Linha: Para mim esse é o melhor teste do Poltergeist, por ser o mais rápido que o PolterBomb e mais perceptível que o Polter Furacão. Coloque vários objetos enfileirados no chão em um local que você pode observar o fantasma vindo, como o corredor em frente ao sofá ou a garagem de Tanglewood. Deixe os itens enfileirados o caminho todo e aguarde um ataque, quando o fantasma estiver vindo preste atenção se ele vai jogar os itens sem parar (a cada meio segundo), lembre-se que todo fantasma pode jogar itens a cada 0.5 segundos, porém o Poltergeist é garantido 100% que nunca deixará de jogar enquanto tiver objetos por perto.",
      "Se você notar objetos sendo jogados muito longe, pode-se suspeitar do Poltergeist.",
      "Se o fantasma estiver interagindo com objetos muito frequentemente, pode-se suspeitar do Poltergeist.",
    ],
    evidence: ["Spirit Box", "Ultravioleta", "Escrita"],
  },
  {
    name: "Banshee",
    hunt: "50% da sanidade do alvo",
    speed: "1.6m/s (normal)",
    //check info
    behaviour: [
      "Toda partida a Banshee vai escolher um jogar como alvo até o fim da partida, esse alvo é escolhido de forma aleatória. Se esse jogador morrer ou sair do jogo a Banshee trocará de alvo para outro jogador aleatório.",
      "Banshee é o único fantasma que ataca baseado na sanidade do alvo e não na sanidade média da equipe, ou seja, se a sanidade média da equipe estiver abaixo de 50%, mas o jogador que for o alvo estiver com 100% é impossível a Banshee iniciar um ataque normal.",
      "Se o jogador que for o alvo estiver dentro da casa durante o ataque, é impossível a Banshee matar qualquer outro jogador, os jogadores que não são alvos podem tocar no fantasma durante o ataque que não vão morrer.",
      "Se o jogador que for o alvo não estiver dentro da casa durante o ataque a Banshee atacará normal, podendo escutar e matar qualquer jogador que estiver dentro da casa.",
      "Tem uma chance pequena de fazer um som único no microfone parabólico direcional (um grito) https://www.youtube.com/watch?v=3g17opOhOdw.",
      "Tem a habilidade de andar até o seu alvo não importa onde esteja (contanto que seja dentro da casa).",
    ],
    strategies: [
      "Se escutar o grito da Banshee no microfone direcional, pode marcar.",
      "Se você estiver distante do local favorito do fantasma e nota que ele interage frequentemente próximo a você, pode-se suspeitar que é um Banshee e você é o alvo, também é possível testar se o Banshee caminha até você com frequência usando sensores de movimento.",
      "AVISO: AS PRÓXIMAS ESTRATÉGIAS SÓ FUNCIONAM SE VOCÊ ESTIVER JOGANDO COM OUTROS JOGADORES!",
      "A melhor forma de descobrir se é um Banshee é com trabalho em equipe, todos os jogadores devem entrar na casa para esperarem um ataque, os jogadores precisam tentar atrair o fantasma durante o ataque, porém um de cada vez, ou seja, 1 jogador fica com o seu equipamento ligado em um local onde pode ser visto pelo fantasma enquanto os outros jogadores se escondem, mas lembre-se, para garantir que esse teste dê certo todo mundo deve ficar dentro da casa. Caso o fantasma persiga o jogador que não está escondido, tente fazer o teste novamente, porém com outra pessoa chamando o fantasma.",
      "Outra forma de descobrir é, caso ache que teve um ataque muito cedo você pode checar o monitor de sanidade no caminhão, se a sanidade média estiver acima de 50%, mas de um jogador estiver abaixo, pode ser um Banshee e o alvo é o jogador com a sanidade abaixo de 50%. Também da para verificar isso se o ataque for muito demorado e tiver um jogador com a sanidade mais alta que a sanidade média.",
    ],
    evidence: ["Ultravioleta", "Orbe", "D.O.T.S"],
  },
  {
    name: "Jinn",
    hunt: "50%",
    speed:
      "2.5m/s quando estiver vendo alguém distante (rápido) - 1.6m/s quando não está perseguindo (normal)",
    behaviour: [
      "Não pode desligar a energia (gerador).",
      "Só pode usar suas habilidades se a energia estiver ligada.",
      "Tem uma chance aleatória de drenar 25% de sanidade de todos os jogadores no mesmo comôdo do Jinn sem acontecer nenhum aparição ou interação. Quando ele usa essa habilidade é possível detectar EMF-2/5 no gerador. Isso só acontece se o gerador estiver ligado.",
      "Durante o ataque, é mais rápido quando está vendo alguém, porém está longe dessa pessoa e fica mais lento ao chegar perto, isso só acontece se o gerador estiver ligado.",
    ],
    strategies: [
      "Se o fantasma desligar o gerador é 100% de certeza que não é um Jinn.",
      "Na suspeita de um Jinn, deixe um aparelho detector de EMF em cima do gerador da casa, se ele começar a detectar EMF aleatóriamente, pode ser porque o Jinn usou sua habilidade de dreno.",
      "Durante um ataque fique em um local com bastante espaço em linha reta e fique na ponta contraria de onde o fantasma vai vir, chame a atenção dele ligando algum equipamento, quando ele estiver vindo preste atenção se sua velocidade é mais rápida quando o fantasma está longe de você e se diminui quando se aproxima. Um exemplo de onde testar isso é na garagem de Tanglewood, você pode ficar encostado no portão da garagem, ligue seu equipamento e preste atenção, se for um Jinn ele vai estar rápido passando pela lavanderia e vai diminuir quando estiver mais ou menos do lado do carro.",
    ],
    evidence: ["EMF 5", "Ultravioleta", "Temperatura Baixa"],
  },
  {
    name: "Mare",
    hunt: "60% Se a luz estiver desligada / 40% se a luz estiver ligada",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Chance maior de vagar para fora do quarto favorito se a luz estiver ligada.",
      "Aumenta a chance de atacar se a luz estiver desligada.",
      "Improvável iniciar um ataque dentro de um quarto que a luz está acesa (não é impossível).",
      "Pode atacar mais cedo que o normal se a luz do quarto estiver desligada.",
      "Nunca vai desligar uma luz.",
      "Um pouco mais comum de fazer a aparição de estourar lampâda do que os outros fantasmas.",
      "Pode desligar uma luz imediatamente que ela for ligada.",
    ],
    strategies: [
      "Se ao clicar em um interruptor para acender a luz o fantasma desliga-la na mesma hora, trata-se de uma Mare. Uma tecnica usada para tentar ativar essa habilidade é ficar ligando e desligando a luz do quarto favorito do fantasma repetidamente na esperança que ela use sua habilidade.",
      "Ligue a luz do quarto do fantasma e coloque um crucifixo nele, se o fantasma queimar iniciar um ataque dentro do quarto com a luz acesa, é um sinal que não é Mare, mas para garantir faça esse teste mais de uma vez, Mare pode atacar em quartos com luzes acesas, porém é mais provável que ela vague para outro quarto antes de tentar atacar.",
    ],
    evidence: ["Spirit Box", "Orbe", "Escrita"],
  },
  {
    name: "Revenant",
    hunt: "50%",
    speed:
      "1.1m/s se não estiver perseguindo (extremamente lento) / 3.0m/s se estiver perseguindo (extremamente rápido)",
    behaviour: [
      "Extremamente lento quando não está vendo ninguém.",
      "Estupidamente rápido quando está vendo alguém.",
    ],
    strategies: [
      "Revenant é um dos fantasmas mais fáceis de saber durante um ataque, perdendo apenas para o Deogen, quando Revenant não está vendo ninguém ele vai andar igual uma lesma, é impossível confundir, e se ele ver alguém... Ai ele vira o The Flash, não adianta correr se não tiver um incenso.",
    ],
    evidence: ["Orbe", "Escrita", "Temperatura Baixa"],
  },
  {
    name: "Shade",
    hunt: "35% (demorado)",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Shade não interage no quando está no mesmo quarto que algum jogador, porém ele ainda pode interagir se vagar para outro quarto, como interações acontecem dentro de uma distancia do fantasma, é possível que ele vá para o quarto do lado e derrube coisas que estão no mesmo quarto de algum jogador, então cuidado para não confundir.",
      "Shade nunca vai iniciar um ataque no mesmo quarto que estiver algum jogador.",
      "Não costuma fazer evento fantasma.",
      "Quando faz evento, tem 67% de chande dessa aparição ser uma fumaça indo em direção a algum jogador e 67% de chance de ser em forma de sombra.",
      "É o único fantasma que pode aparecer no circulo de invocação ou na caixinha de música em forma de sombra ao invés da forma física.",
    ],
    strategies: [
      "Shade normalmente não interage muito, porém não se precípite, a partidas que ele mete o louco e interage bastante, porém é quase impossível ele fazer isso no mesmo quarto que está algum jogador, a única excessão é no caso que comentei acima.",
      "Se possível, olhe a sanidade média da equipe depois de um ataque, se ela estiver acima de 35% é impossível ser um Shade.",
    ],
    evidence: ["EMF 5", "Escrita", "Temperatura Baixa"],
  },
  {
    name: "Demon",
    hunt: "70% / 100%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Chance rara de atacar em qualquer% de sanidade, inclusive 100%.",
      "Quando o Demon é atingido por um incenso, ele fica impossibilitado de atacar por 1:00 minutos, ao invés do normal de 1:30 minutos dos outros fantasmas.",
      "É afetado por crucifixos em uma distância maior que o normal. Tier 1: 4.5 metros ao invés de 3; Tier 2: 6 metros ao invés de 4; Tier 3: 7.5 metros ao invés de 5.",
    ],
    strategies: [
      "A forma mais garantida de descobrir se é um Demon é fazendo igual se faz com um Spirit, abaixe sua sanidade ao máximo (cuidado, Demons vão atacar sem parar), use um incenso no fantasma e inicie o cronomêtro (na mesma hora que o incenso toca no fantasma), se o fantasma atacar antes de 1:30 é garantido que você está lidando com um Demon.",
      "Se você for atacado assim que abrir a porta pode marcar Demon.",
      "Se você acha que foi atacado cedo, verifique a sanidade, caso esteja maior que 60% é muito provável que seja um Demon.",
      "Se os crucifixos estão queimando rapidamente, também é bem provável ser um Demon, já que o crucifixo protege uma área maior quando é um Demon.",
    ],
    evidence: ["Ultravioleta", "Escrita", "Temperatura Baixa"],
  },
  {
    name: "Yurei",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Tem a habilidade de fechar uma porta completamente, quando isso acontece a porta mexe bem mais rápido que um toque normal que os fantasmas fazem na porta e faz o som da porta sendo tocada 2 vezes ao mesmo tempo.",
      "É o único fantasma que pode interagir com a porta de entrada/saida da casa, sem ser em eventos ou ataques.",
      "Usar incenso no Yurei faz com que ele não possa vagar para fora de seu quarto favorito por 1:30 minutos.",
    ],
    strategies: [
      "O Yurei não pode sair do quarto favorito dele durante 1 minutos e 30 segundos quando é atingido por um incenso, então uma forma de testar isso é usar o incenso no fantasma, ativar um cronomêtro e vigia-lo, pode-se usar sensores de movimentos e sal para observar os movimentos do fantasma.",
      "O Yurei é um dos fantasmas mais chatos de descobrir sem ser por evidência, pois a habilidade que distingue ele de outros fantasmas é uma chance muito aleatória de conseguir ver, pois o Yurei vai bater uma porta com força. Sabe quando o fantasma toca em uma porta? Ela mexe devagarinho abrindo ou fechando, quando o Yurei usa a habilidade dele, a porta vai mover bem rápido e vai fechar completamente, além disso, é possível escutar a porta sendo tocada duas vezes, ao invés de uma.",
    ],
    evidence: ["Orbe", "Temperatura Baixa", "D.O.T.S"],
  },
  {
    name: "Oni",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Costuma fazer mais eventos (aparições) e quando faz um evento drena 20% de sanidade, ao invés de 10% igual outros fantasmas.",
      "É impossível fazer o evento de bola de ar (a aparição fantasma que é uma bola de fumaça que voa em direção a um jogador).",
      "Pisca mais rápido (fica mais visível) durante ataques.",
    ],
    strategies: [
      "Suspeite de Oni se o fantasma estiver fazendo muitas aparições, principalmente se elas começaram cedo na partida, enquanto a sanidade média ainda está alta. Também é possível ficar de olho na sanidade e verificar o quanto ela desce após ter acontecido uma aparição.",
      "Se você ver o evento de bola de ar pode descartar Oni com 100% de certeza.",
      "Durante um ataque, tente loopar o fantasma, preste atenção na sua piscada, o Oni tem uma piscada que funciona ao contrário do Phantom, ele pisca rapidamente ficando bem visível durante o ataque.",
    ],
    evidence: ["EMF 5", "Temperatura Baixa", "D.O.T.S"],
  },
  {
    name: "Yokai",
    hunt: "50% / 80% se alguém estiver falando no microfone por perto",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Pode atacar com a sanidade média da equipe em 80% para baixo se pelo menos um jogador estiver falando no mesmo quarto que o fantasma está.",
      "É conhecido por ser um fantasma burro, pois não consegue detectar um jogador mesmo se ele estiver falando ou com equipamentos ligados a uma distância maior que 2.5 metros.",
    ],
    strategies: [
      "Tente falar bastante estando dentro do quarto do fantasma, se o fantasma ficar mais agressivo suspeite do Yokai.",
      "A melhor forma de descobrir se é um Yokai é ligando seu equipamente eletronico durante o ataque porém estando em um lugar que o fantasma não te vê, como por exemplo agachado atrás do balcão da cozinha de Tanglewood ou atrás da porta da sala de Willow Street com a porta fechada (esse é o melhor local para fazer esse teste, pois é possível ver o fantasma já que a porta é de vidro, mas o fantasma não te vê). Fique com seus equipamento ligado, se o equipamente estiver sendo afetado pelo fantasma (piscando ou fazendo som) e o fantasma não for atrás de você, é certeza que é um Yokai. Vale lembrar que nenhum fantasma consegue detectar jogadores que estão em andares diferentes, então lembre-se de estar no mesmo andar que o fantasma para testar isso.",
    ],
    evidence: ["Spirit Box", "Orbe", "D.O.T.S"],
  },
  {
    name: "Hantu",
    hunt: "50%",
    speed:
      "1.4m/s fora do quarto favorito com o gerador ligado (um pouco lento) / 2.7m/s dentro do quarto favorito ou na casa inteira se o gerador estiver desligado (rápido)",
    behaviour: [
      "É um dos 5 fantasmas que podem mudar de velocidade durante o ataque (Hantu, Raiju, Revenant, Deogen e Moroi).",
      "Sempre estará rápido dentro de seu quarto favorito.",
      "Vai estar rápido em toda a casa se o gerador estiver desligado.",
      "Estará mais lento fora do quarto favorito se o gerador estiver ligado.",
      "É um dos 3 fantasmas que não ganha aceleração ao ficar perseguindo um jogador (Hantu, Thaye e Deogen).",
      "Não pode ligar a energia (gerador).",
      "Chance maior de desligar a energia.",
      "Durante o ataque é possível ver saindo fumaça da boca do fantasma (igual quando sai do jogador quando está dentro de um local frio).",
      "É obrigatório da temperatura baixa como evidência no modo pesadelo ou insano.",
    ],
    strategies: [
      "Se a energia estiver ligada e for um Hantu, você notará que o fantasma vai variar a velocidade durante o ataque, ele estará mais rápido dentro de seu quarto favorito e mais lento fora.",
      "O melhor jeito de testar o Hantu é deixando a energia ligada e deixar o fantasma te perseguir por um tempo, se o fantasma não ganhar aceleração em momento nenhum é um Hantu ou um Thaye (lembre-se de não tentar fazer isso dentro do quarto do fantasma, pois ele vai estar bem rápido lá dentro).",
      "Se você estiver tendo dificuldade de perceber se o fantasma está realmente lento e não consegue testar deixando ele te ver, tente desligar a energia, você claramente notará que ele estará bem rápido se realmente for um Hantu.",
    ],
    evidence: ["Ultravioleta", "Orbe", "*Temperatura Baixa"],
  },
  {
    name: "Goryo",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Não costuma vagar para muito longe de seu quarto favorito.",
      "É impossível mudar de quarto favorito (pode vagar para outros, mas não vai trocar o quarto).",
      "Só aparece no D.O.T.S pela camera.",
      "Não aparece no D.O.T.S se alguém estiver dentro do quarto favorito do fantasma.",
      "SEMPRE vai ter D.O.T.S como evidência no modo pesadelo ou insano.",
    ],
    strategies: [
      "AVISO: D.O.T.S é, na minha opnião, a evidência mais chata de conseguir, então tenha paciência.",
      "Goryo, junto com Yurei, é um fantasma bem chato de descobrir sem ser por evidência, normalmente é um fantasma que se descobre por eliminação, se perceber que o fantasma não mudou de quarto favorito o jogo inteiro, suspeite do Goryo.",
      "Se ninguém viu D.O.T.S pessoalmente, porém viu na camera, suspeite do Goryo. E claro, se alguém viu D.O.T.S pessoalmente, pode descartar Goryo.",
    ],
    evidence: ["EMF 5", "Ultravioleta", "*D.O.T.S"],
  },
  {
    name: "Myling",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Myling costuma fazer sons paranormais no microfone parabólico com mais frequência que outros fantasmas.",
      "Myling faz pouquissímo barulho durante ataques.",
    ],
    strategies: [
      "Escute atentamente ao som que o fantasma faz durante o ataque, tanto o barulho do fantasma quanto o barulho dos passos dele, os dois serão bem mais baixos que o normal caso seja um Myling.",
      "Uma dica boa para iniciantes que não sabem diferenciar a altura do som do Myling, coloque uma lanterna ligada no seu esconderijo (mas não segure ela para não chamar a atenção do fantasma), se for um Myling, você só escutará o som dele quando a lanterna estiver piscando, se for outro fantasma vai ser possível escutar o som antes da lanterna começar a piscar.",
    ],
    evidence: ["EMF 5", "Ultravioleta", "Escrita"],
  },
  {
    name: "Onryo",
    hunt: "50% / 100% se apagar 3 velas",
    speed: "1.6m/s (normal)",
    behaviour: [
      "AVISO: O Onryo é o fantasma mais controverso por ser o fantasma com as habilidades mais confusas, então pode ser que algumas informações não estejam corretas, porém tenho quase certeza que tudo que vou por aqui está correto, mas fique avisado.",
      "Onryo tem mais chance de apagar velas.",
      "Velas funcionam igual crucifixos para o Onryo, ou seja, o Onryo não pode iniciar um ataque perto de uma vela acesa, ao invés disso ele irá apagar a vela.",
      "Se tiver uma vela e um crucifixo próximos e o Onryo tentar atacar, a vela tem prioridade.",
      "O Onryo tem um contador de velas apagadas, quando esse contador chega em 3 o Onryo vai tentar atacar, independente da sanidade, ele pode atacar com 100% de sanidade se for após ter apagado 3 velas e então o contador reinicia.",
      "Quando o Onryo apaga a terceira vela do contador o ataque não é imediato, pode demorar até uns 5 segundos para tentar atacar.",
      "Se o quarto favorito do Onryo estiver com velas acesas o tempo todo, é provável que ele vague para outro quarto e tente atacar de lá.",
    ],
    strategies: [
      "A forma mais garantida de saber se é um Onryo é colocando velas em volta de um crucifixo deixando as velas sempre acesas, se o crucifixo queimar com as velas acesas em volta, pode descartar o Onryo.",
      "Se tentar fazer o teste contando quantas velas foram apagadas tente não colocar velas demais, pois assim você pode acabar perdendo a conta e o fantasma pode acabar tentando atacar, mas acaba apagando uma vela no lugar.",
    ],
    evidence: ["Spirit Box", "Orbe", "Temperatura Baixa"],
  },
  {
    name: "The Twins",
    hunt: "50%",
    speed:
      "1.4m/s (um pouco devagar) quando é o gêmeo principal | 1.7 (um pouco rápido) quando é o gêmeo secundário",
    behaviour: [
      "Um fantasma fica no quarto do favorito, enquanto o outro pode interagir em qualquer lugar da casa.",
      "O segundo gêmeo inicia ataque no último lugar que ele fez interação.",
      "O gêmeo principal tem 90% da velocidade de fantasma normal (1.6m/s) enquanto o gêmeo secundário tem 110% da velocidade normal, ou seja, a diferença é bem sútil, mas é perceptível.",
      "Pode fazer 2 interações ao mesmo tempo em lugares diferentes.",
      "É possível acontecer várias interações consecultivas, uma atrás da outra, isso normalmente significa que é Twins.",
      "Pode deixar marcas diferentes no monitor de atividade paranormal no caminhão (colocar imagem de exemplo aqui, não esquecer!).",
    ],
    strategies: [
      "Preste bastante atenção no som dos passos do fantasma, no ínicio é difícil perceber a diferença, mas com o tempo você vai pegar a manha, e também tente ouvir vários ataques, é mais fácil perceber a diferença de um ataque para o outro do que perceber se está lento ou rápido.",
      "Se você escutar duas interações ao mesmo tempo, por exemplo, uma porta mexeu e um copo caiu ao mesmo tempo, ou quase ao mesmo tempo, isso se chama twinteraction, ou interação dos gêmeos.",
      "Se ouvir o fantasma interagir em um local da casa, e pouco tempo depois interagiu em um local bem afastado, é provavélmente um Twins, já que o dificilmente o fantasma iria tão longe tão rápido.",
    ],
    evidence: ["EMF 5", "Spirit Box", "Temperatura Baixa"],
  },
  {
    name: "Raiju",
    hunt: "50% quando não há equipamento eletrônico ligado no quarto do fantasma | 65% quando há equipamento eletrônio ligado próximo ao fantasma",
    speed:
      "1.6m/s (normal) quando não há equipamento eletrônico ligado próximo ao fantasma | 2.5m/s (muito rápido) quando há equipamento eletrônico ligado próximo",
    behaviour: [
      "Pode atacar com 65% de sanidade média da equipe quando há equipamentos eletrônicos ligados próximo ao fantasma.",
      "Fica mais rápido quanto mais equipamentos eletrônicos estiver por perto.",
      "Consegue detectar equipamentos eletrônicos a uma distância maior que outros fantasmas.",
      "A energia da casa e luzes não contam como equipamentos eletrônicos, apenas os equipamentos que são trazidos pelos investigadores.",
      "Camêras de foto jogadas no chão não afetam o Raiju e camêras de vídeo se forem jogadas com o G e não com F também não afetam o Raiju, pois elas estão desligadas.",
    ],
    strategies: [
      "Raiju é bem fácil de descobrir, ligue vários equipamentos eletrônicos (provavélmente eles já estarão ligados dentro do quarto do fantasma, já que deixamos nossos aparelhos lá para nossa investigação), será fácil notar que o fantasma está rápido perto desses eletrônicos e quando ele sair de perto vai diminuir notóriamente sua velocidade.",
      "Na dúvida no teste anterior, tente dessa vez desligar todos os eletrônicos e perceba se o fantasma vai ficar mais lento.",
      "Raiju é um dos únicos 5 fantasmas que pode mudar de velocidade DURANTE o ataque (Raiju, Hantu, Moroi, Deogen e Revenant), então é fácil eliminar outras possibilidades.",
    ],
    evidence: ["EMF 5", "Orbe", "D.O.T.S"],
  },
  {
    name: "Obake",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Tem 75% de chance de não deixar marca ultravioleta ao pisar no sal, tocar em portas ou interagir com interruptores.",
      "Tem uma chance rara (16.7%) de deixar uma marca ultravioleta única.",
      "As marcas únicas do Obake são, mão de 6 dedos em portas e janelas, marca de 2 dedos em interruptores e marca de 5 dedos em teclados e portas de celas da prisão (não esquecer de colocar foto aqui, tenho screenshot na steam).",
      "Possui a habilidade de fazer marcas ultravioletas sumirem mais rapidamente, por exemplo, se uma marca fica ativa por 120 segundos, o Obake pode usar sua habilidade e fazer com que ela fique ativa por 60 segundos apenas.",
      "O Obake muda de forma pelo menos 1 vez durante ataques.",
      "O Obake SEMPRE vai ter ultravioleta como evidência nos modos pesadelo e insano.",
    ],
    strategies: [
      "Sempre tente procurar por ultravioleta quando o fantasma tocar em portas, janelas e interruptores, todos os fantasmas que tem ultravioleta como evidência tem 100% de chance de deixar a marca com excessão do Obake que é 75%, então se você verificou a porta que o fantasma tocou e não tem ultravioleta, mas depois ele toca de novo e dessa vez tem ultravioleta, signifca que é um Obake.",
      "Outra coisa que deve prestar atenção é na marca da ultravioleta, se você ver uma marca de mão com 6 dedos na porta ou janela ou 2 marcas de dedo no interruptor, é um Obake.",
      "Há um forma de descobrir se é Obake durante um ataque, mas para isso você precisa saber 'loopar' o fantasma, procure um lugar que seja possível fazer isso, como a cozinha de Tanglewood, fique loopando o fantasma pelo tempo que conseguir e preste bastante atenção no modelo do fantasma, em uma das piscadas que ele faz ele vai mudar o modelo, por exemplo, a mulher de roupa branca para o modela da criança, é algo bem rápido, então preste bastante atenção.",
    ],
    evidence: ["EMF 5", "*Ultravioleta", "Orbe"],
  },
  {
    name: "The Mimic",
    hunt: "???",
    speed: "???",
    behaviour: [
      "O Mimíco pode copiar as habilidades de todos os outros fantasmas, inclusive a habilidade de mostrar ultravioleta de 6 dedos do Obake ou de ficar rápido perto de eletrônicos igual o Raiju.",
      "O Mimíco vai mudar o fantasma que ele está imitando a cada 2 minutos no máximo, porém ele nunca pode mudar durante um ataque.",
      "O Mimíco não pode copiar evidências, porém ele tem a habilidade de SEMPRE mostrar Orbe Fantasma, até mesmo quando está em um jogo customizado de 0 evidências.",
    ],
    strategies: [
      "Se o fantasma está mudando de comportamento é muito provável que seja um Mimíco, se por exemplo, o fantasma está com a velociadde normal em um ataque e sem explicação em outro ataque ele fica rápido, pode marcar Mimíco.",
      "Se o fantasma deu evidência que não faz sentido, por exemplo, o fantasma deu Temperatura Baixa e deu uma marca ultravioleta de 6 dedos, é o Mímico.",
      "Se o fantasma deu mais evidências do que devia, por exemplo 4 evidências no modo profissional, ou 3 evidências no modo pesadelo, não preciso nem dizer... É um Mimíco.",
      "Se você conseguir as 3 evidências do Onryo (Orbe, Temperatura e Spirit Box) ou do Hantu (Orbe, Temperatura e Ultravioleta) lembre-se da possibilidade de ser um Mímico, então procure mais um pouco se há mais alguma evidência.",
    ],
    evidence: ["Spirit Box", "Ultravioleta", "Temperatura Baixa", "*Fake Orbe"],
  },
  {
    name: "Moroi",
    hunt: "50%",
    speed:
      "1.4m/s (Um pouco lento) quando a sanidade média está alta | gradualmente chega a 2.1m/s (rápido) quanto menor for a sanidade média",
    behaviour: [
      "Amaldiçoa os jogadores que escutarem a resposta no Spirit Box, essa maldição pode ser curada tomando remédio de sanidade.",
      "A sanidade diminui em dobro a todos os jogadores que estiverem amaldiçoados e continua diminuindo mesmo se estiver em lugares com a luz ligada.",
      "Fica mais rápido quanto menor for a sanidade média da equipe.",
      "Usar incenso no Moroi faz com que ele não consiga matar pelo dobro de tempo que afetaria outros fantasmas.",
      "Moroi SEMPRE vai ter Spirit Box como evidência nos modos pesadelo ou insano.",
    ],
    strategies: [
      "Se o fantasma respondeu alguém no Spirit Box e essa pessoa está com a sanidade mais baixa que todo o resto, pode-se suspeitar do Moroi.",
      "Se ao longo do jogo perceber que o fantasma está ficando cada vez mais rápido é um Moroi.",
      "Se está jogando no pesadelo ou insano e o fantasma matou alguém, ele provavelmente ficará mais rápido logo após matar, pois quando um jogador morre a sanidade média de cada jogador cai em 25% (se não me engano), então vai ser possível notar a diferença.",
      "Diminua a sanidade ao máximo e veja se o fantasma está rápido, se estiver na dúvida tome remédio de sanidade, use o objeto amaldiçoado para forçar um ataque e veja se ele fica lento.",
    ],
    evidence: ["*Spirit Box", "Escrita", "Temperatura Baixa"],
  },
  {
    name: "Deogen",
    hunt: "40%",
    speed:
      "0.4m/s (extremamente lento) quando perto | 3m/s (extremamente rápido) quando longe",
    behaviour: [
      "AVISO: É IMPOSSÍVEL SE ESCONDER DO DEOGEN, NÃO SE ESCONDA EM HIPOTÉSE ALGUMA E NÃO FIQUE PARADO!!!",
      "Deogen pode ser o fantasma mais perigoso quando você não sabe que é ele, e é o fantasma mais inofensivo quando se sabe que é ele, então na suspeita, fique atento!",
      "Ao atacar o Deogen vai correr a uma velocidade absurda em direção ao jogador mais próximo, assim que ele chegar perto ele vai ficar extremamente lento.",
      "Pode fazer um som único no Spirit Box quando a pessoa tenta usar o Spirit Box exatamente onde o fantasma está.",
      "Pisca muito rápido durante ataque, similar ao Oni e ao contrário do Phantom, é o fantasma mais visível durante ataques.",
      "Na minha experiência, Deogens costumam ser bem agressivos no início do jogo, fazendo muitos eventos e aparições antes de poder atacar, mas isso não é um comportamento caracteristico confirmado.",
      "SEMPRE vai ter Spirit Box como evidência nos modos pesadelo e insano.",
    ],
    strategies: [
      "Quando um ataque começar, se for o Deogen, você vai escutar ele EXTREMAMENTE rápido, é muito assustador de início, se você escutar ele vindo em sua direção, SAIA DO SEU ESCONDERIJO IMEDIATAMENTE e torça para que ele não te encurrale.",
      "O Deogen é o fantasma mais fácil de descobrir durante ataques, igual o Revenant, não tem como errar.",
      "Minha dica é, se o Deogen é uma possibilidade, mas você ainda não pôde ver um ataque, não se esconda, pegue um incenso e fique em um local aberto em que você possa loopar o fantasma, veja se é de fato um Deogen ou não.",
      "Coloque sal ou sensores de movimento para saber exatamente onde o fantasma está e tente usar a Spirit Box para conseguir escutar o som que só o Deogen (ou mímico) pode fazer.",
    ],
    evidence: ["*Spirit Box", "Escrita", "D.O.T.S"],
  },
  {
    name: "Thaye",
    hunt: "75% no inicio | gradualmente chega a 35%",
    speed:
      "2.7m/s (muito rápido) no inicio | gradualmente chega a 1.0 (muito lento)",
    behaviour: [
      "Thaye é o fantasma que envelhece, ele começa o jogo muito forte e vai ficando mais fraco ao longo que vai envelhecendo.",
      "O Thaye tenta evelhecer a cada 1 a 2 minutos e só consegue se ele tentar fazer isso quando tiver algum jogador próximo a ele, se não tiver niguém por perto ele não envelhece e tenta novamente depois de 30 segundos.",
      "Pode envelhecer até 10 vezes, a cada vez que ele envelhece a velocidade dele diminui, a quantidade de interações e apariçoes diminui, e a sanidade média necessária para poder atacar diminui.",
      "Quantidade de interação e aparição inicial: 200%, -15% a cada envelhecimento chegando a 50% na idade mais velha.",
      "Porcentagem de sanidade média necessária para ataque inicial 75%, -6% a cada evenlhecimento chegando a 35% na iadde mais velha.",
      "Velocidade do fantasma inicial 2.7m/s, -0.175m/s a cada envelhecimento chegando a 1.0m/s na idade mais velha.",
      "Quando pergunta no inicio do jogo a idade do fantasma no Tabuleiro Ouija ele fala uma idade, e ao passar um tempo no jogo e ele envelhecer a idade que ele responde no Tabuleiro Ouija também muda.",
    ],
    strategies: [
      "Se você tiver Tabuleiro Ouija como Objeto Amaldiçoado, pergunte sua idade, depois de um tempo pergunte novamente, se tiver mudado é um Thaye. Lembre-se de deseja-lo feliz aniversário!",
      "Se a velocidade dele tem diminuido ao longo do jogo, é um Thaye",
      "Na suspeita de um Thaye, fique bastante tempo dentro de seu quarto favorito para que ele envelheça, se for realmente um Thaye ele ficará mais lento com o tempo.",
    ],
    evidence: ["Orbe", "Escrita", "D.O.T.S"],
  },
];

export { ghostInfo, ghostInfoBr };
