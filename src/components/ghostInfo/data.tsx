export interface IghostInfo {
  name: string;
  hunt: string;
  speed: string;
  behaviour: string[];
  strategies: string[];
  evidence: string[];
  media?: {
    title: string;
    embed: string;
    caption?: string;
  }[];
}

export const ghostInfoBr: IghostInfo[] = [
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
    media: [
      {
        title: "Phantom desaparecendo quando tira foto",
        embed: "https://www.youtube.com/embed/XrTrVJ7JN9M",
        caption:
          "Phantom nunca irá aparecer em uma foto (a não ser que bug), quando ele estiver fazendo Evento Fantasma ou passando no D.O.T.S, tente tirar uma foto dele.",
      },
      {
        title: "Phantom desaparecendo quando tira foto no D.O.T.S",
        embed: "https://www.youtube.com/embed/TPjKpB5jA3s",
      },
      {
        title: "Loopando o Phantom durante o ataque",
        embed: "https://www.youtube.com/embed/zG3--hvvUkk",
        caption:
          "Phantom fica mais tempo invisível que outros fantasmas durante ataques.",
      },
    ],
  },
  {
    name: "Poltergeist",
    hunt: "50%",
    speed: "1.6m/s (normal)",
    behaviour: [
      "Pode jogar vários objetos ao mesmo tempo (a famosa PolterBomb), isso faz com que os jogadores perto percam sanidade no valor de 2 * a quantidade de objetos que foram jogados.",
      "Pode jogar objetos mais longe que outros fantasmas.",
      "Tem 100% de chance de jogar um objeto a cada 0.5 segundos durante o ataque (se houver objeto próximo ao fantasma).",
    ],
    strategies: [
      "Polter Bomb: O teste mais conhecido do Poltergeist é preparar uma PolterBomb, isso é, monte uma pilha de objetos dentro do local favorito do fantasma, não precisa exagerar, 5 objetos já é o suficiente. Após isso só resta esperar, se o fantasma jogar todos os objetos pra tudo que é lado significa que você está lidando com um Poltergeist. Na dúvida você pode usar um EMF nível 3 para verificar se mais de um objeto foi realmente jogado.",
      "Círculo de objetos: Se você sabe loopar o fantasma tente esse teste para descobrir o Poltergeist mais rápido. Coloque vários objetos em volta de algum local que você pode loopar o fantasma, como o balcão da cozinha de Tanglewood por exemplo. Aguarde o ataque e fique andando em circulos com o fantasma em volta dos objetos, se você perceber o fantasma jogando os objetos sem parar, pode-se dizer que é um Poltergeist.",
      "Linha de objetos no chão: Para mim esse é o melhor teste do Poltergeist, por ser o mais rápido que o PolterBomb e mais perceptível que o Polter Furacão. Coloque vários objetos enfileirados no chão em um local que você pode observar o fantasma vindo, como o corredor em frente ao sofá ou a garagem de Tanglewood. Deixe os itens enfileirados o caminho todo e aguarde um ataque, quando o fantasma estiver vindo preste atenção se ele vai jogar os itens sem parar (a cada meio segundo), lembre-se que todo fantasma pode jogar itens a cada 0.5 segundos, porém o Poltergeist é garantido 100% que nunca deixará de jogar enquanto tiver objetos por perto.",
      "Se você notar objetos sendo jogados muito longe, pode-se suspeitar do Poltergeist.",
      "Se o fantasma estiver interagindo com objetos muito frequentemente, pode-se suspeitar do Poltergeist.",
    ],
    evidence: ["Spirit Box", "Ultravioleta", "Escrita"],
    media: [
      {
        title: "Polgergeist jogando objetos enfileirados no chão",
        embed: "https://www.youtube.com/embed/pYpb1JO0wSM?si=v2w7q88iKur6_GkC",
        caption:
          "Fazendo uma linha de objetos no chão, e chamando o fantasma em minha direção para observar como ele está jogando os objetos.",
      },
      {
        title: "Polter Furacão",
        embed: "https://www.youtube.com/embed/wQqbMRtyYcA?si=S_X6DaRG6E_FP3RQ",
        caption:
          "Colocando vários objetos em volta de um local que eu posso loopar (fazer o fantasma andar em circulos) para observar a forma que o fantasma joga os objetos.",
      },
      {
        title: "Lançando vários objetos ao mesmo tempo.",
        embed: "https://www.youtube.com/embed/QD8FUyvMNdk",
        caption:
          "Poltergeist exibindo sua habilidade de jogar múltiplos objetos de uma vez.",
      },
    ],
  },
  {
    name: "Banshee",
    hunt: "50% da sanidade do alvo",
    speed: "1.6m/s (normal)",
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
    media: [
      {
        title: "Grito da Banshee",
        embed: "https://www.youtube.com/embed/k29T-ztGX1Y",
      },
      {
        title: "Banshee seguindo jogador",
        embed: "https://www.youtube.com/embed/NqV3DT4NYaM?si=kKS_oTZ4DKebcaFD",
        caption:
          "Usando múltiplos sensores de movimento, para ver a Banshee usando sua habilidade de caminhar em minha direção. No vídeo o quarto do fantasma é o banheiro da entrada da casa de Tanglewood.",
      },
    ],
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
    media: [
      {
        title: "Mare desligando a luz",
        embed: "https://www.youtube.com/embed/mUPc0lakaQQ",
        caption:
          "A Mare tem uma chance de desligar o interriptor quase que imediatamente após um jogador ligar.",
      },
    ],
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
    media: [
      {
        title: "Dois toques na porta",
        embed: "https://www.youtube.com/embed/H0Dkr67KtCk?si=j2rgKqO9yWQ5bd4u",
        caption:
          "O Yurei tem a habilidade de fechar uma porta completamente, ao invés de movê-la lentamente como os outros fantasma. Quando ele usa essa habilidade é possível escutar o som de toque na porta duas vezes ao mesmo tempo, se usar o EMF Tier 3 verá que ele detectará duas vezes o EMF na porta.",
      },
    ],
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
