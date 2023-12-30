export interface Iequipments {
  name: string;
  basicInfo: string[];
  tips: string[];
  findEvidence: boolean;
  test: boolean;
  tier?: string;
  media?: {
    title: string;
    media: string;
    caption?: string;
  }[];
}

export const equipments: Iequipments[] = [
  {
    name: "Câmera de Vídeo",
    basicInfo: [
      "A câmera de vídeo pode ser usada para achar Orbes Fantasma quando a visão noturna está ativada.",
      "Orbe Fantasma é uma bolinha branca que fica flutuando e só é possível vê-la dentro do quarto favorito do fantasma",
      "Elas podem sumir por um tempo e aparecer de novo depois.",
    ],
    tips: [
      "A melhor forma de achar Orbe Fantasma é segurando a câmera com a visão noturna ativada e andando pelo quarto olhando cada canto por alguns segundos. Se mesmo assim não achar nenhuma Orbe é bom deixar a câmera em um local que ela consiga ver boa parte do quarto para que você cheque depois pelo caminhão.",
    ],
    findEvidence: true,
    test: false,
    tier: "III > II > I",
    media: [
      {
        title: "Encontrando Orbe Fantasma",
        media: "https://www.youtube.com/embed/pcEA5KPntxk",
      },
      {
        title: "Quebrando a porta para ver Orbe melhor",
        media: "https://www.youtube.com/embed/JvKMHNokUgY",
        caption:
          "É possível utilizar a técnica de quebrar a porta para ficar mais fácil de encontrar Orbe Fantasma e D.O.T.S.",
      },
    ],
  },
  {
    name: "Projetor D.O.T.S",
    basicInfo: [
      // "D.O.T.S is used to find evidence, just put it in the ghost room and you will be able to see a ghost green hologram like running on the D.O.T.S light, note that this is one of the most boring evidences to get since the ghost may take too long to go through it. This projector is also useful for ilumination.",
    ],
    tips: [
      // "Two D.O.T.S are better than one, but remember to put them far from eachother!",
      // "D.O.T.S are also useful for ilumination, so if you don't need the D.O.T.S anymore you can put it strategically to get a better view of something you want like a hiding spot, a path to the hiding spot or to get a better look at the ghost when it's hunting.",
    ],
    findEvidence: true,
    test: true,
    tier: "III >= II > I",
  },
  {
    name: "Detector de EMF",
    basicInfo: [
      // "EMF Reader will always make a sound when the ghost does something, there are 5 possible readings:",
      // "EMF1: No reading.",
      // "EMF2: The ghost touched something, this can be a door, doll, lightswitch, phone, lamp and etc.",
      // "EMF3: The ghost threw something.",
      // "EMF4: The ghost made an event, that can be showing itself, red light, airball, breaking light bubs and etc.",
      // "EMF5: That means evidence, if the ghost has EMF5 as evidence, any of the above types of EMFs has a 25% chance of showing EMF5 instead of the proper reading.",
    ],
    tips: [
      // "If you hear something being thrown run there and put that EMF Reader to work.",
      // "EMF is really useful for taking photos, while the EMF is beeping you can still take a picure of what the ghost interacted with.",
    ],
    findEvidence: false,
    test: false,
    tier: "III > II > I",
  },
  {
    name: "Lanterna",
    basicInfo: [
      // "Weak flashlight that has a yellow-ish color. Not very useful as the strong flashlight, but it can be nice to make the game more scary.",
    ],
    tips: [""],
    findEvidence: false,
    test: false,
    tier: "III > II > I",
  },
  {
    name: "Livro de Escrita",
    basicInfo: [
      // "There is no trick here, just put the book inside the ghost room, sometimes it takes forever and sometimes the Ghost writes it pretty fast.",
    ],
    tips: [
      // "For the book to work the ghost has to interact with it, so try getting all the objects out of the ghost room, like shoes, plates, cups and etc. there'll be a higher chance the ghost will interact with the book, since it won't have many other options.",
      // "If you see the ghost throwing the book you can be sure there won't be any Ghost Writing, notice that this probably don't work on nightmare or any difficulty that has less than 3 evidences.",
    ],
    findEvidence: true,
    test: false,
    tier: "III > II > I",
  },
  {
    name: "Spirit Box",
    basicInfo: [
      // `Spirit Box is really simple, just turn it on and ask questions to the Ghost in the Ghost Room you don't need to say the Ghost name, just ask the question, the best way is to ask questions fast so you get an answer quickly, I like asking "Where are you?", "Are you here?", "How old are you?" and "What do you want?".`,
      // "It's a commom misconception that Spirit Box drains sanity, that's not true.",
    ],
    tips: [
      // "It's best to try for Spirit Box alone in the ghost room if you are playing on professional difficulty or above.",
      // "You can let the Spirit Box on on the ground and the Ghost may respond to it even if no on is around or asking questions.",
    ],
    findEvidence: true,
    test: true,
    tier: "III > II > I",
  },
  {
    name: "Lanterna UV",
    basicInfo: [""],
    tips: [""],
    findEvidence: true,
    test: true,
    tier: "III >= I > II",
  },
  {
    name: "Câmera de Foto",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
    tier: "III > II > I",
  },
  {
    name: "Vela",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
    tier: "III > II > I",
  },
  {
    name: "Crucifixo",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
    tier: "III > II > I",
  },
  {
    name: "Câmera de Cabeça",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
    tier: "II > III > I",
  },
  {
    name: "Isqueiro",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
    tier: "III > II > I",
  },
  {
    name: "Sensor de Movimento",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
    tier: "III > II > I",
  },
  {
    name: "Microfone Direcional",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
    tier: "III > II > I",
  },
  {
    name: "Sal",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
    tier: "II > III > I",
  },
  {
    name: "Remédio de Sanidade",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
    tier: "III > II > I",
  },
  {
    name: "Repelente - Incenso",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: true,
    tier: "II > III > I",
  },
  {
    name: "Sensor de Som",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
    tier: "III > II > I",
  },
  {
    name: "Termomêtro",
    basicInfo: [""],
    tips: [""],
    findEvidence: true,
    test: false,
    tier: "I > III > I",
  },
  {
    name: "Tripé",
    basicInfo: [""],
    tips: [""],
    findEvidence: false,
    test: false,
    tier: "III > II > I",
  },
];
