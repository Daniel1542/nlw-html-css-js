// Definição das perguntas para o quiz
const perguntas = [
  {
    pergunta: "Qual é o nome do protagonista principal na saga do Senhor dos Anéis?",
    respostas: [
      "Aragorn",
      "Frodo",
      "Gandalf"
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o criador do Um Anel no universo de O Senhor dos Anéis?",
    respostas: [
      "Sauron",
      "Saruman",
      "Gollum"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a cidade principal dos elfos na saga?",
    respostas: [
      "Rivendell",
      "Lothlórien",
      "Gondolin"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da espada que Aragorn herda e utiliza na trilogia?",
    respostas: [
      "Sting",
      "Narsil",
      "Andúril"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é conhecido como o Rei dos Nazgûl?",
    respostas: [
      "Witch-king",
      "Ringwraith",
      "Balrog"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da criatura que guia Frodo e Sam até Mordor?",
    respostas: [
      "Gimli",
      "Gollum",
      "Treebeard"
    ],
    correta: 1
  },
  {
    pergunta: "O que a Sociedade do Anel busca destruir durante a jornada?",
    respostas: [
      "A Pedra de Orthanc",
      "O Olho de Sauron",
      "O Anel Um"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da árvore gigante que ajuda os personagens na trilogia?",
    respostas: [
      "Entwood",
      "Fangorn",
      "Mirkwood"
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o mago que lidera a Sociedade do Anel?",
    respostas: [
      "Gandalf",
      "Radagast",
      "Saruman"
    ],
    correta: 0
  },
  {
    pergunta: "O que Frodo usa para se tornar invisível?",
    respostas: [
      "Poção de invisibilidade",
      "Capa da Invisibilidade",
      "Anel Um"
    ],
    correta: 2
  }
];

// Seleção de elementos HTML
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

// Inicialização de variáveis
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

// Atualização do total de respostas corretas exibido na tela

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    // Define o texto da resposta
    dt.querySelector('span').textContent = resposta
    // Configuração do input com o nome, valor e evento de mudança

    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    // Adiciona a instância de resposta à pergunta

    quizItem.querySelector('dl').appendChild(dt)
  }

  // Remove o elemento de termo que não é mais necessário
  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
