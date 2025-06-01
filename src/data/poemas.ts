
export interface Poema {
  id: string;
  title: string;
  subtitle?: string;
  inspiradoEm: string;
  tema: 'earth' | 'water' | 'sage';
  verses: string[];
  excerpt: string;
  nota?: string;
  contexto?: string;
}

export const poemas: Poema[] = [
  {
    id: "reflexos",
    title: "Reflexos no Espelho",
    subtitle: "Uma conversa silenciosa",
    inspiradoEm: "Olhos d'água",
    tema: "water",
    excerpt: "Quando olho no espelho e vejo / não só meu rosto, mas histórias...",
    verses: [
      "Quando olho no espelho e vejo",
      "não só meu rosto, mas histórias",
      "de quem veio antes de mim,",
      "nas lágrimas que descem",
      "como rios ancestrais.",
      "",
      "Meus olhos carregam oceanos",
      "de memórias que não são minhas,",
      "mas que pulsa na minha veia",
      "como sangue e resistência.",
      "",
      "Cada gota que escorre",
      "é uma narrativa guardada,",
      "um grito abafado que encontra voz",
      "na coragem de existir.",
      "",
      "Sou o eco de vozes silenciadas,",
      "a força de quem não se curvou,",
      "e neste espelho de água",
      "vejo não só quem sou,",
      "mas quem sempre fomos."
    ],
    nota: "Este poema busca capturar a força das memórias ancestrais presentes no conto que dá nome ao livro.",
    contexto: "Inspirado na potência das lágrimas como símbolo de resistência e memória coletiva."
  },
  {
    id: "terra-fertil",
    title: "Terra Fértil",
    subtitle: "Sobre raízes e florescimento",
    inspiradoEm: "Duzu-Querença",
    tema: "earth",
    excerpt: "Minhas mãos conhecem a terra / que alimenta e que acolhe...",
    verses: [
      "Minhas mãos conhecem a terra",
      "que alimenta e que acolhe,",
      "a mesma que testemunhou",
      "plantios e colheitas de sonhos.",
      "",
      "Duzu sabia que toda semente",
      "precisa de tempo e paciência,",
      "que o amor também é cultivo",
      "e que algumas flores",
      "só nascem na adversidade.",
      "",
      "Eu aprendi com a terra",
      "que resistir é também florescer,",
      "que mesmo no solo mais árido",
      "uma raiz forte encontra",
      "seu caminho para a luz.",
      "",
      "E quando as estações mudam",
      "e os ventos sopram contrários,",
      "permaneço plantada",
      "nesta terra de histórias",
      "que é minha e de todas nós."
    ],
    nota: "Inspirado na força e determinação de Duzu-Querença e sua conexão com a terra.",
    contexto: "Uma reflexão sobre enraizamento, pertencimento e a força que vem da conexão com nossas origens."
  },
  {
    id: "vozes-sussurradas",
    title: "Vozes Sussurradas",
    subtitle: "Um coro de histórias",
    inspiradoEm: "Zaíta esqueceu de guardar os brinquedos",
    tema: "sage",
    excerpt: "Há vozes que ecoam suaves / nas brincadeiras interrompidas...",
    verses: [
      "Há vozes que ecoam suaves",
      "nas brincadeiras interrompidas,",
      "nos sonhos guardados",
      "em caixas de memórias.",
      "",
      "Zaíta me ensinou que crescer",
      "não é sempre escolha,",
      "que às vezes a infância",
      "se arruma rapidamente",
      "na gaveta da necessidade.",
      "",
      "Mas na pressa de guardar os brinquedos",
      "algo sempre escapa:",
      "um riso solto no vento,",
      "uma esperança teimosa",
      "que insiste em brincar.",
      "",
      "E eu celebro essas pequenas fugas,",
      "esses momentos roubados",
      "onde a criança interior",
      "sussurra baixinho:",
      "'Ainda estou aqui, ainda resisto.'"
    ],
    nota: "Uma homenagem às crianças que precisaram crescer cedo demais.",
    contexto: "Reflexão sobre a preservação da essência infantil mesmo diante das adversidades."
  }
];

export const getPoemaById = (id: string): Poema | undefined => {
  return poemas.find(poema => poema.id === id);
};
