interface Iequipments {
  name: string;
  basicInfo: string[];
  tips: string[];
  findEvidence: boolean;
  test: boolean;
}

export const equipments: Iequipments[] = [
  {
    name: "Video Camera",
    basicInfo: [
      "Simple video camera that has night vision, which can be use to find Ghost Orbs evidence in the ghost room, note that the only way to see ghost orbs is with the camera and with night vision on, you can see while holding the camera or looking at the monitor inside the truck.",
    ],
    tips: [
      "The best way to find ghost orbs is by holding the camera and having a look around the ghost room, check every corner.",
    ],
    findEvidence: true,
    test: false,
  },
  {
    name: "D.O.T.S Projector",
    basicInfo: [
      "D.O.T.S is used to find evidence, just put it in the ghost room and you will be able to see a ghost green hologram like running on the D.O.T.S light, note that this is one of the most boring evidences to get since the ghost may take too long to go through it. This projector is also useful for ilumination.",
    ],
    tips: [
      "Two D.O.T.S are better than one, but remember to put them far from eachother!",
      "D.O.T.S are also useful for ilumination, so if you don't need the D.O.T.S anymore you can put it strategically to get a better view of something you want like a hiding spot, a path to the hiding spot or to get a better look at the ghost when it's hunting.",
    ],
    findEvidence: true,
    test: true,
  },
  {
    name: "EMF Reader",
    basicInfo: [
      "EMF Reader will always make a sound when the ghost does something, there are 5 possible readings:",
      "EMF1: No reading.",
      "EMF2: The ghost touched something, this can be a door, doll, lightswitch, phone, lamp and etc.",
      "EMF3: The ghost threw something.",
      "EMF4: The ghost made an event, that can be showing itself, red light, airball, breaking light bubs and etc.",
      "EMF5: That means evidence, if the ghost has EMF5 as evidence, any of the above types of EMFs has a 25% chance of showing EMF5 instead of the proper reading.",
    ],
    tips: [
      "If you hear something being thrown run there and put that EMF Reader to work.",
      "EMF is really useful for taking photos, while the EMF is beeping you can still take a picure of what the ghost interacted with.",
    ],
    findEvidence: false,
    test: false,
  },
  {
    name: "Flashlight",
    basicInfo: [
      "Weak flashlight that has a yellow-ish color. Not very useful as the strong flashlight, but it can be nice to make the game more scary.",
    ],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Ghost Writing Book",
    basicInfo: [
      "There is no trick here, just put the book inside the ghost room, sometimes it takes forever and sometimes the Ghost writes it pretty fast.",
    ],
    tips: [
      "For the book to work the ghost has to interact with it, so try getting all the objects out of the ghost room, like shoes, plates, cups and etc. there'll be a higher chance the ghost will interact with the book, since it won't have many other options.",
      "If you see the ghost throwing the book you can be sure there won't be any Ghost Writing, notice that this probably don't work on nightmare or any difficulty that has less than 3 evidences.",
    ],
    findEvidence: true,
    test: false,
  },
  {
    name: "Spirit Box",
    basicInfo: [
      `Spirit Box is really simple, just turn it on and ask questions to the Ghost in the Ghost Room you don't need to say the Ghost name, just ask the question, the best way is to ask questions fast so you get an answer quickly, I like asking "Where are you?", "Are you here?", "How old are you?" and "What do you want?".`,
      "It's a commom misconception that Spirit Box drains sanity, that's not true.",
    ],
    tips: [
      "It's best to try for Spirit Box alone in the ghost room if you are playing on professional difficulty or above.",
      "You can let the Spirit Box on on the ground and the Ghost may respond to it even if no on is around or asking questions.",
    ],
    findEvidence: true,
    test: true,
  },
  {
    name: "UV Light",
    basicInfo: [""],
    tips: [""],
    findEvidence: true,
    test: true,
  },
  {
    name: "Photo Camera",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Candle",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Crucifix",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Glowstick",
    basicInfo: [""],
    tips: [""],
    findEvidence: true,
    test: true,
  },
  {
    name: "Head Mounted Camera",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Lighter",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Motion Sensor",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Parabolic Microphone",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Salt",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Sanity Pills",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Smudge Sticks",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Sound Sensor",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Strong Flashlight",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Thermometer",
    basicInfo: [""],
    tips: [""],
    findEvidence: true,
    test: false,
  },
  {
    name: "Tripod",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
];

export const equipmentsBr: Iequipments[] = [
  {
    name: "Câmera de Vídeo",
    basicInfo: [
      "Câmera de Vídeo que vêm com a função de visão noturna que pode ser usada para encontrar a evidência de Orbe Fantasma dentro do local favorito do fantasma. É possível ver a Orbe Fantasma enquanto segura a câmera com a visão noturna ativada ou colocando apoiada em algum local ou tripé.",
      "Simple video camera that has night vision, which can be use to find Ghost Orbs evidence in the ghost room, note that the only way to see ghost orbs is with the camera and with night vision on, you can see while holding the camera or looking at the monitor inside the truck.",
    ],
    tips: [
      "The best way to find ghost orbs is by holding the camera and having a look around the ghost room, check every corner.",
    ],
    findEvidence: true,
    test: false,
  },
  {
    name: "D.O.T.S Projector",
    basicInfo: [
      "D.O.T.S is used to find evidence, just put it in the ghost room and you will be able to see a ghost green hologram like running on the D.O.T.S light, note that this is one of the most boring evidences to get since the ghost may take too long to go through it. This projector is also useful for ilumination.",
    ],
    tips: [
      "Two D.O.T.S are better than one, but remember to put them far from eachother!",
      "D.O.T.S are also useful for ilumination, so if you don't need the D.O.T.S anymore you can put it strategically to get a better view of something you want like a hiding spot, a path to the hiding spot or to get a better look at the ghost when it's hunting.",
    ],
    findEvidence: true,
    test: true,
  },
  {
    name: "EMF Reader",
    basicInfo: [
      "EMF Reader will always make a sound when the ghost does something, there are 5 possible readings:",
      "EMF1: No reading.",
      "EMF2: The ghost touched something, this can be a door, doll, lightswitch, phone, lamp and etc.",
      "EMF3: The ghost threw something.",
      "EMF4: The ghost made an event, that can be showing itself, red light, airball, breaking light bubs and etc.",
      "EMF5: That means evidence, if the ghost has EMF5 as evidence, any of the above types of EMFs has a 25% chance of showing EMF5 instead of the proper reading.",
    ],
    tips: [
      "If you hear something being thrown run there and put that EMF Reader to work.",
      "EMF is really useful for taking photos, while the EMF is beeping you can still take a picure of what the ghost interacted with.",
    ],
    findEvidence: false,
    test: false,
  },
  {
    name: "Flashlight",
    basicInfo: [
      "Weak flashlight that has a yellow-ish color. Not very useful as the strong flashlight, but it can be nice to make the game more scary.",
    ],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Ghost Writing Book",
    basicInfo: [
      "There is no trick here, just put the book inside the ghost room, sometimes it takes forever and sometimes the Ghost writes it pretty fast.",
    ],
    tips: [
      "For the book to work the ghost has to interact with it, so try getting all the objects out of the ghost room, like shoes, plates, cups and etc. there'll be a higher chance the ghost will interact with the book, since it won't have many other options.",
      "If you see the ghost throwing the book you can be sure there won't be any Ghost Writing, notice that this probably don't work on nightmare or any difficulty that has less than 3 evidences.",
    ],
    findEvidence: true,
    test: false,
  },
  {
    name: "Spirit Box",
    basicInfo: [
      `Spirit Box is really simple, just turn it on and ask questions to the Ghost in the Ghost Room you don't need to say the Ghost name, just ask the question, the best way is to ask questions fast so you get an answer quickly, I like asking "Where are you?", "Are you here?", "How old are you?" and "What do you want?".`,
      "It's a commom misconception that Spirit Box drains sanity, that's not true.",
    ],
    tips: [
      "It's best to try for Spirit Box alone in the ghost room if you are playing on professional difficulty or above.",
      "You can let the Spirit Box on on the ground and the Ghost may respond to it even if no on is around or asking questions.",
    ],
    findEvidence: true,
    test: true,
  },
  {
    name: "UV Light",
    basicInfo: [""],
    tips: [""],
    findEvidence: true,
    test: true,
  },
  {
    name: "Photo Camera",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Candle",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Crucifix",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Glowstick",
    basicInfo: [""],
    tips: [""],
    findEvidence: true,
    test: true,
  },
  {
    name: "Head Mounted Camera",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Lighter",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Motion Sensor",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Parabolic Microphone",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Salt",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Sanity Pills",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Smudge Sticks",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
  },
  {
    name: "Sound Sensor",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Strong Flashlight",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
  {
    name: "Thermometer",
    basicInfo: [""],
    tips: [""],
    findEvidence: true,
    test: false,
  },
  {
    name: "Tripod",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
  },
];
