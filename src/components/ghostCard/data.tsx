interface IGhostCard {
  name: string;
  shortInfo: string;
  evidence: string[];
  speed: string;
  hunt: string;
}

const ghostCard: IGhostCard[] = [
  {
    name: "Spirit",
    shortInfo: "A not so special ghost that doesn't like smudges.",
    evidence: ["EMF 5 - ", "Spirit Box - ", "Writing"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Wraith",
    shortInfo: "A ghost that can teleport to you and hates salt.",
    evidence: ["EMF 5 - ", "Spirit Box - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Phantom",
    shortInfo:
      "A ghost not photogenic at all, it will never appear in a photo.",
    evidence: ["Spirit Box - ", "Fingerprints - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Poltergeist",
    shortInfo: "This ghost loves throwing things.",
    evidence: ["Spirit Box - ", "Fingerprints - ", "Writing"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Banshee",
    shortInfo:
      "This ghost may scream in your parabolic ear and only has one friend.",
    evidence: ["Fingerprints - ", "Orbs - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Jinn",
    shortInfo: "This ghost will NEVER turn the breaker off.",
    evidence: ["EMF 5 - ", "Fingerprints - ", "Freezing"],
    speed: "varies, normal, fast, All",
    hunt: "normal, All",
  },
  {
    name: "Mare",
    shortInfo: "This ghost hates lights, so keep yours on!",
    evidence: ["Spirit Box - ", "Orbs - ", "Writing"],
    speed: "normal, All",
    hunt: "early, later, varies, All",
  },
  {
    name: "Revenant",
    shortInfo: "This ghost is not dangerous... If it doesn't see you.",
    evidence: ["Orbs - ", "Writing - ", "Freezing"],
    speed: "varies, verySlow, veryFast, All",
    hunt: "normal, All",
  },
  {
    name: "Shade",
    shortInfo: "Very shy ghost, it doesn't enjoy big groups of friends.",
    evidence: ["EMF 5 - ", "Writing - ", "Freezing"],
    speed: "normal, All",
    hunt: "late, All",
  },
  {
    name: "Demon",
    shortInfo: "It will probably kill you before you know.",
    evidence: ["Fingerprints - ", "Writing - ", "Freezing"],
    speed: "normal, All",
    hunt: "early, All",
  },
  {
    name: "Yurei",
    shortInfo: "Strong ghost that loves the smell of a smudge stick burning.",
    evidence: ["Orbs - ", "Freezing - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Oni",
    shortInfo: "Most visible ghost there is, it loves to show off.",
    evidence: ["EMF 5 - ", "Freezing - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Yokai",
    shortInfo: "Kinda dumb ghost that hates hearing people talking.",
    evidence: ["Spirit Box - ", "Orbs - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "early, normal, varies, All",
  },
  {
    name: "Hantu",
    shortInfo: "This ghost loves being in cold places.",
    evidence: ["Fingerprints - ", "Orbs - ", "*Freezing"],
    speed: "varies, fast, little slow, All",
    hunt: "normal, All",
  },
  {
    name: "Goryo",
    shortInfo: "Cannot perform a long roam and only show D.O.T.S on camera.",
    evidence: ["EMF 5 - ", "Fingerprints - ", "*D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Myling",
    shortInfo: "Very quiet ghost.",
    evidence: ["EMF 5 - ", "Fingerprints - ", "Writing"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Onryo",
    shortInfo:
      "Loves blowing candles so much that it may hug you after you give enough candles.",
    evidence: ["Spirit Box - ", "Orbs - ", "Freezing"],
    speed: "normal, All",
    hunt: "early, normal, varies, All",
  },
  {
    name: "The Twins",
    shortInfo: "They might do stuff together.",
    evidence: ["EMF 5 - ", "Spirit Box - ", "Freezing"],
    speed: "varies, little fast, little slow, All",
    hunt: "normal, All",
  },
  {
    name: "Raiju",
    shortInfo: "Very fast when around eletronic equipment.",
    evidence: ["EMF 5 - ", "Orbs - ", "D.O.T.S"],
    speed: "varies, slow, veryFast, All",
    hunt: "early, normal, All",
  },
  {
    name: "Obake",
    shortInfo:
      "Probably the most loved ghost by the community, this ghost has 6 fingers and may be gender fluid.",
    evidence: ["EMF 5 - ", "*Fingerprints - ", "Orbs"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "The Mimic",
    shortInfo: "This Ghost can copy any other ghost characteristics.",
    evidence: ["Spirit Box - ", "Fingerprints - ", "Freezing ", "*Fake Orbs"],
    speed: "varies, All",
    hunt: "varies, All",
  },
  {
    name: "Moroi",
    shortInfo:
      "When your mom say not to talk to strangers, it's this ghost she's worry about.",
    evidence: ["*Spirit Box - ", "Writing - ", "Freezing"],
    speed: "varies, fast, slow, All",
    hunt: "normal, All",
  },
  {
    name: "Deogen",
    shortInfo: "Best ghost, nothing else to add here.",
    evidence: ["*Spirit Box - ", "Writing - ", "D.O.T.S"],
    speed: "varies, veryFast, verySlow, All",
    hunt: "late, All",
  },
  {
    name: "Thaye",
    shortInfo: "Very fast early game, very slow late game.",
    evidence: ["Orbs - ", "Writing - ", "D.O.T.S"],
    speed: "varies, veryFast, verySlow, All",
    hunt: "early, normal, late, varies, All",
  },
];

const ghostCardBr: IGhostCard[] = [
  {
    name: "Spirit",
    shortInfo:
      "Não pode atacar por 3:00 minutos ao ser atingido por um incenso.",
    evidence: ["EMF 5 - ", "Spirit Box - ", "Escrita"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Wraith",
    shortInfo: "Pode teletransportar para o jogador e NUNCA vai pisar no sal.",
    evidence: ["EMF 5 - ", "Spirit Box - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Phantom",
    shortInfo: "Não aparece em fotos e é difícil ve-lo durante ataques.",
    evidence: ["Spirit Box - ", "Ultravioleta - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Poltergeist",
    shortInfo: "Pode jogar vários objetos ao mesmo tempo.",
    evidence: ["Spirit Box - ", "Ultravioleta - ", "Escrita"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Banshee",
    shortInfo:
      "Pode gritar no microfone direcional e tem apenas um jogador como alvo.",
    evidence: ["Ultravioleta - ", "Orbes - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Jinn",
    shortInfo:
      "NUNCA vai desligar o gerador e só usa habilidades quando o mesmo está ligado.",
    evidence: ["EMF 5 - ", "Ultravioleta - ", "Temperatura Baixa"],
    speed: "varies, normal, fast, All",
    hunt: "normal, All",
  },
  {
    name: "Mare",
    shortInfo: "Odeia luz e NUNCA vai ligar uma.",
    evidence: ["Spirit Box - ", "Orbes - ", "Escrita"],
    speed: "normal, All",
    hunt: "early, later, varies, All",
  },
  {
    name: "Revenant",
    shortInfo:
      "Extremamente rápido quando te vê e extremamente lento quando não vê.",
    evidence: ["Orbes - ", "Escrita - ", "Temperatura Baixa"],
    speed: "varies, verySlow, veryFast, All",
    hunt: "normal, All",
  },
  {
    name: "Shade",
    shortInfo: "Um fantasma tímido que não interage perto de jogadores.",
    evidence: ["EMF 5 - ", "Escrita - ", "Temperatura Baixa"],
    speed: "normal, All",
    hunt: "late, All",
  },
  {
    name: "Demon",
    shortInfo: "Esse fantasma não gosta de brincar, tome cuidado.",
    evidence: ["Ultravioleta - ", "Escrita - ", "Temperatura Baixa"],
    speed: "normal, All",
    hunt: "early, All",
  },
  {
    name: "Yurei",
    shortInfo:
      "Pode fechar portas por completo e adora o cheirinho de incenso.",
    evidence: ["Orbes - ", "Temperatura Baixa - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Oni",
    shortInfo: "Adora aparecer, é fácil de enxerga-lo durante ataques.",
    evidence: ["EMF 5 - ", "Temperatura Baixa - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Yokai",
    shortInfo:
      "Fantasma meio surdo que odeia quando tem gente falando por perto.",
    evidence: ["Spirit Box - ", "Orbes - ", "D.O.T.S"],
    speed: "normal, All",
    hunt: "early, normal, varies, All",
  },
  {
    name: "Hantu",
    shortInfo:
      "Mais rápido no frio e mais devagar no quente, cuidado ao deixar o gerador desligado.",
    evidence: ["Ultravioleta - ", "Orbes - ", "*Temperatura Baixa"],
    speed: "varies, fast, little slow, All",
    hunt: "normal, All",
  },
  {
    name: "Goryo",
    shortInfo:
      "NUNCA vai trocar o quarto favorito e dificilmente vai vagar para fora dele.",
    evidence: ["EMF 5 - ", "Ultravioleta - ", "*D.O.T.S"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Myling",
    shortInfo: "É muito silencioso durante ataques.",
    evidence: ["EMF 5 - ", "Ultravioleta - ", "Escrita"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "Onryo",
    shortInfo:
      "Odeia velas e vai querer te matar se você colocar muitas! Não pode atacar perto de velas acesas.",
    evidence: ["Spirit Box - ", "Orbes - ", "Temperatura Baixa"],
    speed: "normal, All",
    hunt: "early, normal, varies, All",
  },
  {
    name: "The Twins",
    shortInfo: "Parece que tem mais de um fantasma na casa.",
    evidence: ["EMF 5 - ", "Spirit Box - ", "Temperatura Baixa"],
    speed: "varies, little fast, little slow, All",
    hunt: "normal, All",
  },
  {
    name: "Raiju",
    shortInfo: "Muito rápido perto de equipamentos eletrônicos ligados.",
    evidence: ["EMF 5 - ", "Orbes - ", "D.O.T.S"],
    speed: "varies, normal, veryFast, All",
    hunt: "early, normal, All",
  },
  {
    name: "Obake",
    shortInfo:
      "Pode mudar de forma durante ataques e deixar marcas ultravioleta especiais.",
    evidence: ["EMF 5 - ", "*Ultravioleta - ", "Orbes"],
    speed: "normal, All",
    hunt: "normal, All",
  },
  {
    name: "The Mimic",
    shortInfo:
      "Pode copiar habilidade e comportamentos de qualquer outro fantasma.",
    evidence: [
      "Spirit Box - ",
      "Ultravioleta - ",
      "Temperatura Baixa ",
      "*Fake Orbes",
    ],
    speed: "varies, All",
    hunt: "varies, All",
  },
  {
    name: "Moroi",
    shortInfo: "Pode te amaldiçoar se você escutar a voz dele.",
    evidence: ["*Spirit Box - ", "Escrita - ", "Temperatura Baixa"],
    speed: "varies, fast, slow, All",
    hunt: "normal, All",
  },
  {
    name: "Deogen",
    shortInfo: "É impossível se esconder dele,  mas é muito fácil fugir.",
    evidence: ["*Spirit Box - ", "Escrita - ", "D.O.T.S"],
    speed: "varies, veryFast, verySlow, All",
    hunt: "late, All",
  },
  {
    name: "Thaye",
    shortInfo:
      "Muito rápido no ínicio do jogo e muito devagar ao longo da partida.",
    evidence: ["Orbes - ", "Escrita - ", "D.O.T.S"],
    speed: "varies, veryFast, verySlow, All",
    hunt: "early, normal, late, varies, All",
  },
];

export { ghostCard, ghostCardBr };
