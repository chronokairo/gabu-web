const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta atual
app.use(express.static(__dirname));

// Redireciona / para index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Dados dos heróis (exemplo simplificado)
const heroes = [
    {
        name: "Superman",
        alias: "Clark Kent / Kal-El",
        origin: "Krypton",
        team: "Liga da Justiça",
        category: "justice-league",
        powerLevel: "Ômega",
        powers: ["Superforça", "Voo", "Visão de Calor", "Invulnerabilidade", "Super Velocidade"],
        weakness: "Kryptonita, Magia",
        firstAppearance: "Action Comics #1 (1938)",
        description: "O Último Filho de Krypton, Superman é um dos heróis mais poderosos e inspiradores do universo DC. Criado por Jerry Siegel e Joe Shuster, ele estabeleceu o modelo para todos os super-heróis que viriam depois.",
        abilities: "Força praticamente ilimitada, capacidade de voar a velocidades supersônicas, visão de calor, visão de raio-X, super audição, sopro congelante e invulnerabilidade a quase todos os ataques físicos.",
        primaryColor: "#1976d2",
        secondaryColor: "#e53935",
        backHistory: "Kal-El foi enviado de Krypton para a Terra, onde foi criado como Clark Kent. Descobriu seus poderes e se tornou o Superman, símbolo de esperança e justiça."
    },
    {
        name: "Batman",
        alias: "Bruce Wayne",
        origin: "Gotham City",
        team: "Família Bat",
        category: "bat-family",
        powerLevel: "Humano+",
        powers: ["Intelecto Genial", "Artes Marciais", "Tecnologia Avançada", "Detetive", "Estratégia"],
        weakness: "Humano, Obsessão",
        firstAppearance: "Detective Comics #27 (1939)",
        description: "O Cavaleiro das Trevas de Gotham City, Batman combate o crime usando sua inteligência superior, habilidades de combate e tecnologia avançada. Criado por Bob Kane e Bill Finger.",
        abilities: "Mestre em artes marciais, detetive excepcional, gênio em tecnologia, estrategista brilhante e possui recursos financeiros praticamente ilimitados.",
        primaryColor: "#212121",
        secondaryColor: "#fbc02d",
        backHistory: "Após testemunhar o assassinato de seus pais, Bruce Wayne jurou combater o crime em Gotham, tornando-se o Batman, o Cavaleiro das Trevas."
    },
    {
        name: "Mulher-Maravilha",
        alias: "Diana Prince / Princesa Diana",
        origin: "Themyscira",
        team: "Liga da Justiça",
        category: "justice-league",
        powerLevel: "Semideus",
        powers: ["Superforça", "Voo", "Laço da Verdade", "Braceletes Indestrutíveis", "Imortalidade"],
        weakness: "Armas Perfurantes, Magia Negra",
        firstAppearance: "All Star Comics #8 (1941)",
        description: "Princesa das Amazonas e embaixadora da paz, Diana é uma das heroínas mais poderosas e respeitadas do universo DC. Criada por William Moulton Marston.",
        abilities: "Força sobre-humana, velocidade e agilidade excepcionais, imortalidade, laço mágico que força a verdade e braceletes indestrutíveis que deflexem projéteis.",
        primaryColor: "#c62828",
        secondaryColor: "#ffd600",
        backHistory: "Princesa das Amazonas, Diana deixou Themyscira para ser uma heroína no mundo dos homens, tornando-se a Mulher-Maravilha."
    },
    {
        name: "Flash",
        alias: "Barry Allen",
        origin: "Central City",
        team: "Liga da Justiça",
        category: "justice-league",
        powerLevel: "Ômega",
        powers: ["Super Velocidade", "Viagem no Tempo", "Força da Velocidade", "Intangibilidade", "Cura Acelerada"],
        weakness: "Gelo Extremo, Drenagem da Força da Velocidade",
        firstAppearance: "Showcase #4 (1956)",
        description: "O Homem Mais Rápido do Mundo, Barry Allen obteve seus poderes após ser atingido por um raio em seu laboratório. Criado por Robert Kanigher e Carmine Infantino.",
        abilities: "Velocidade sobre-humana, capacidade de vibrar através de objetos sólidos, viajar no tempo, criar tornados e cura acelerada.",
        primaryColor: "#f44336",
        secondaryColor: "#ffd600",
        backHistory: "Barry Allen ganhou super velocidade após um acidente com produtos químicos e um raio, tornando-se o Flash, o homem mais rápido do mundo."
    },
    {
        name: "Aquaman",
        alias: "Arthur Curry",
        origin: "Atlântida",
        team: "Solo",
        category: "solo",
        powerLevel: "Atlante",
        powers: ["Superforça", "Natação Supersônica", "Teleparia Aquática", "Respiração Aquática", "Tridente"],
        weakness: "Desidratação, Ambientes Áridos",
        firstAppearance: "More Fun Comics #73 (1941)",
        description: "Rei dos Sete Mares, Arthur Curry é o soberano de Atlântida e protetor dos oceanos. Criado por Paul Norris e Mort Weisinger.",
        abilities: "Força sobre-humana, capacidade de respirar underwater, comunicação telepática com vida marinha, natação em velocidades supersônicas.",
        primaryColor: "#009688",
        secondaryColor: "#ffd600",
        backHistory: "Arthur Curry, filho da rainha Atlanna, descobre sua herança atlante e se torna o rei dos mares, Aquaman."
    },
    {
        name: "Lanterna Verde",
        alias: "Hal Jordan",
        origin: "Coast City",
        team: ["Liga da Justiça", "Tropa dos Lanternas Verdes"],
        category: ["justice-league", "green-lantern-corps"],
        powerLevel: "Cósmico",
        powers: ["Anel de Poder", "Construtos de Energia", "Voo", "Proteção Espacial", "Tradução Universal"],
        weakness: "Cor Amarela, Força de Vontade",
        firstAppearance: "Showcase #22 (1959)",
        description: "Piloto de teste que se tornou um dos Lanternas Verdes mais respeitados do universo. Criado por John Broome e Gil Kane.",
        abilities: "Anel de poder alimentado pela força de vontade, capaz de criar qualquer construto imaginável, voo espacial e proteção contra ambientes hostis.",
        primaryColor: "#43a047",
        secondaryColor: "#00e676",
        backHistory: "Hal Jordan foi escolhido pelo anel dos Lanternas Verdes, tornando-se protetor do setor espacial 2814."
    },
    {
        name: "Robin",
        alias: "Tim Drake",
        origin: "Gotham City",
        team: ["Família Bat", "Jovens Titãs"],
        category: ["bat-family", "teen-titans"],
        powerLevel: "Humano",
        powers: ["Acrobacia", "Artes Marciais", "Detetive", "Tecnologia", "Estratégia"],
        weakness: "Humano, Inexperiência",
        firstAppearance: "Batman #436 (1989)",
        description: "O terceiro Robin e atual Red Robin, Tim Drake é conhecido por sua inteligência excepcional e habilidades de detetive. Criado por Marv Wolfman e Pat Broderick.",
        abilities: "Acrobacia excepcional, artes marciais, habilidades de detetive, conhecimento em tecnologia e estratégia táctica.",
        primaryColor: "#d32f2f",
        secondaryColor: "#388e3c",
        backHistory: "Tim Drake deduziu a identidade do Batman e se tornou o terceiro Robin, ajudando a proteger Gotham."
    },
    {
        name: "Batgirl",
        alias: "Barbara Gordon",
        origin: "Gotham City",
        team: "Família Bat",
        category: "bat-family",
        powerLevel: "Humano",
        powers: ["Artes Marciais", "Ginástica", "Hacker", "Memória Eidética", "Liderança"],
        weakness: "Humana, Lesões Passadas",
        firstAppearance: "Detective Comics #359 (1967)",
        description: "Filha do Comissário Gordon, Barbara é uma das heroínas mais competentes de Gotham. Criada por Gardner Fox e Carmine Infantino.",
        abilities: "Especialista em artes marciais, ginástica excepcional, habilidades de hacker de elite, memória fotográfica e liderança natural.",
        primaryColor: "#6a1b9a",
        secondaryColor: "#ffd600",
        backHistory: "Barbara Gordon, filha do Comissário Gordon, assume o manto de Batgirl após salvar Bruce Wayne de um ataque."
    },
    {
        name: "Cyborg",
        alias: "Victor Stone",
        origin: "Detroit",
        team: "Jovens Titãs",
        category: "teen-titans",
        powerLevel: "Ciborgue",
        powers: ["Força Sobre-humana", "Interface Tecnológica", "Canhão Sônico", "Voo", "Regeneração"],
        weakness: "EMPs, Vírus de Computador",
        firstAppearance: "DC Comics Presents #26 (1980)",
        description: "Metade homem, metade máquina, Victor Stone é um dos heróis mais tecnologicamente avançados do universo DC. Criado por Marv Wolfman e George Pérez.",
        abilities: "Força cibergética, interface com qualquer tecnologia, canhão sônico, sistemas de voo e capacidade de regeneração de partes mecânicas.",
        primaryColor: "#607d8b",
        secondaryColor: "#00bcd4",
        backHistory: "Victor Stone sofreu um acidente e foi salvo por tecnologia experimental, tornando-se o Cyborg."
    },
    {
        name: "Shazam",
        alias: "Billy Batson",
        origin: "Fawcett City",
        team: "Solo",
        category: "solo",
        powerLevel: "Mágico",
        powers: ["Sabedoria de Salomão", "Força de Hércules", "Resistência de Atlas", "Poder de Zeus", "Coragem de Aquiles", "Velocidade de Mercúrio"],
        weakness: "Magia, Palavra Mágica",
        firstAppearance: "Whiz Comics #2 (1940)",
        description: "Jovem que pode se transformar no herói mais poderoso do mundo ao pronunciar a palavra mágica. Criado por Bill Parker e C.C. Beck.",
        abilities: "Poderes dos deuses antigos: sabedoria, força, resistência, poder divino, coragem e velocidade sobre-humanas.",
        primaryColor: "#fbc02d",
        secondaryColor: "#d32f2f",
        backHistory: "Billy Batson recebe poderes mágicos ao pronunciar 'SHAZAM', tornando-se um dos heróis mais poderosos da Terra."
    },
    {
        name: "Raven",
        alias: "Rachel Roth",
        origin: "Azarath",
        team: "Jovens Titãs",
        category: "teen-titans",
        powerLevel: "Mágico",
        powers: ["Magia das Trevas", "Telepatia", "Telecinese", "Teletransporte", "Cura Empática"],
        weakness: "Trigon, Emoções Intensas",
        firstAppearance: "DC Comics Presents #26 (1980)",
        description: "Filha do demônio Trigon, Rachel usa seus poderes sombrios para o bem. Criada por Marv Wolfman e George Pérez.",
        abilities: "Manipulação de energia sombria, telepatia, telecinese, teletransporte através de dimensões e cura empática.",
        primaryColor: "#512da8",
        secondaryColor: "#37474f",
        backHistory: "Rachel Roth, filha do demônio Trigon, luta para controlar seus poderes sombrios e proteger seus amigos."
    },
    {
        name: "Starfire",
        alias: "Koriand'r",
        origin: "Tamaran",
        team: "Jovens Titãs",
        category: "teen-titans",
        powerLevel: "Alienígena",
        powers: ["Voo", "Rajadas de Energia", "Superforça", "Absorção de Linguagem", "Resistência"],
        weakness: "Emoções Negativas, Metal Tamaraniano",
        firstAppearance: "DC Comics Presents #26 (1980)",
        description: "Princesa alienígena de Tamaran, Starfire trouxe alegria e poder para os Jovens Titãs. Criada por Marv Wolfman e George Pérez.",
        abilities: "Voo supersônico, projeção de energia estelar, força sobre-humana, absorção de linguagens através do toque e resistência excepcional.",
        primaryColor: "#ff9800",
        secondaryColor: "#e040fb",
        backHistory: "Koriand'r fugiu de Tamaran após ser capturada, encontrando refúgio e amizade entre os Jovens Titãs."
    }
];

// Rota API para heróis
app.get('/api/heroes', (req, res) => {
    res.json(heroes);
});

// Dados das HQs clássicas
const hqs = [
    {
        title: "Action Comics #1 (1938)",
        description: "Primeira aparição do Superman",
        url: "https://www.dc.com/comics/action-comics-1938/action-comics-1"
    },
    {
        title: "Detective Comics #27 (1939)",
        description: "Primeira aparição do Batman",
        url: "https://www.dc.com/comics/detective-comics-1937/detective-comics-27"
    },
    {
        title: "All Star Comics #8 (1941)",
        description: "Primeira aparição da Mulher-Maravilha",
        url: "https://www.dc.com/comics/all-star-comics-1940/all-star-comics-8"
    },
    {
        title: "Showcase #4 (1956)",
        description: "Primeira aparição do Flash (Barry Allen)",
        url: "https://www.dc.com/comics/showcase-1956/showcase-4"
    },
    {
        title: "More Fun Comics #73 (1941)",
        description: "Primeira aparição do Aquaman",
        url: "https://www.dc.com/comics/more-fun-comics-1935/more-fun-comics-73"
    },
    {
        title: "Showcase #22 (1959)",
        description: "Primeira aparição do Lanterna Verde (Hal Jordan)",
        url: "https://www.dc.com/comics/showcase-1956/showcase-22"
    },
    {
        title: "Batman #436 (1989)",
        description: "Primeira aparição de Tim Drake (Robin)",
        url: "https://www.dc.com/comics/batman-1940/batman-436"
    },
    {
        title: "Detective Comics #359 (1967)",
        description: "Primeira aparição da Batgirl",
        url: "https://www.dc.com/comics/detective-comics-1937/detective-comics-359"
    },
    {
        title: "DC Comics Presents #26 (1980)",
        description: "Primeira aparição de Cyborg, Raven e Starfire",
        url: "https://www.dc.com/comics/dc-comics-presents-1978/dc-comics-presents-26"
    },
    {
        title: "Whiz Comics #2 (1940)",
        description: "Primeira aparição de Shazam",
        url: "https://www.dc.com/comics/whiz-comics-1940/whiz-comics-2"
    }
];

// Rota API para HQs
app.get('/api/hqs', (req, res) => {
    res.json(hqs);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});