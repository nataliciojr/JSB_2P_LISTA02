var diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

var hoje  = new Date();

var diaDaSemana = diasDaSemana[hoje.getDay()];

document.write(`Hoje é ${diaDaSemana}`);