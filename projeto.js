console.clear();
const prompt = require('prompt-sync')();
console.log(' "Um pai de família" ');
console.log();
console.log(
    '   Um pai de família, depois de ter se esforçao muito para entregar uma vida mais digna pra sua família que tanto ama, finalmente chega ao fim de sua jornada. A vida foi dificio e ele teve que se esforçar muito pro cumprir com suas obrigações e que no fim acabou dando tudo certo.',
);
console.log();

const pergunta01 = prompt(
    'A sua família tem confiado na capacidade do pai de família como provedor do lar? ',
);
const pergunta02 = prompt(
    'O pai de família tem se esforçado para dar o melhor pra sua família? ',
);
const pergunta03 = prompt(
    'O pai de família tem conseguido realizar todos os sonhos mutuos da sua família? ',
);
const pergunta04 = prompt(
    'O pai de famíla tem conseguido dar uma boa educação pra sua filha? ',
);
const pergunta05 = prompt(
    'O  pai de familia continua lutando para realizar os sonhos mutuos de sua família? ',
);
var sim1 = 0;
var sim2 = 0;
var sim3 = 0;
var sim4 = 0;
var sim5 = 0;
if (pergunta01 == 'sim') {
    var sim1 = 1;
}
if (pergunta02 == 'sim') {
    var sim2 = 1;
}
if (pergunta03 == 'sim') {
    var sim3 = 1;
}
if (pergunta04 == 'sim') {
    var sim4 = 1;
}
if (pergunta05 == 'sim') {
    var sim5 = 1;
}

const soma = sim1 + sim2 + sim3 + sim4 + sim5;

if (soma == 0) {
    console.log('Você falhou miseravelmente.');
} else if (soma <= 2) {
    console.log('Você falhou, mas conseguiu fugir da situação.');
} else if (soma == 3) {
    console.log(
        'Você chegou perto de conseguir alcançar seu objetivo, mas acabou falhando por pouco.',
    );
} else if (soma == 4) {
    console.log(
        'Depois de muito esforço você conquistou seu objetivo, embora não de maneira perfeita.',
    );
} else if (soma == 5) {
    console.log(
        'Você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações.',
    );
}
