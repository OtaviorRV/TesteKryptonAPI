"use strict";
const dados = [
  {
    atividade: "tomar café da manhã",
    hora: "06:30",
  },
  {
    atividade: "correr",
    hora: "06:45",
  },
  {
    atividade: "tomar banho",
    hora: "07:15",
  },
  {
    atividade: "transito",
    hora: "07:40",
  },
  {
    atividade: "ler emails",
    hora: "08:15",
  },
  {
    atividade: "ir para cada dos avós",
    hora: "09:00",
  },
  {
    atividade: "almoço em família",
    hora: "12:00",
  },
  {
    atividade: "ver filme em casa",
    hora: "14:00",
  },
  {
    atividade: "tomar banho",
    hora: "17:00",
  },
  {
    atividade: "arrumar para aniversario",
    hora: "17:20",
  },
  {
    atividade: "transito",
    hora: "17:45",
  },
  {
    atividade: "comemoração do aniversario",
    hora: "18:30",
  },
  {
    atividade: "transito",
    hora: "21:30",
  },
  {
    atividade: "ligar video game",
    hora: "22:00",
  },
  {
    atividade: "descansar",
    hora: "23:00",
  },
];

exports.get = (req, res, next) => {
  if (req.params.page === undefined || req.params.page < 0) {
    req.params.page = 1;
  }

  let novosdados = dados.slice((req.params.page - 1) * 5, 5 * req.params.page);

  res.status(201).send(novosdados);
};
