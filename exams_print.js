import { Exame } from './exam_class.js';

const pesos = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };

const resposta = {
  pessoa: 'Professor',
  gabarito: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
};

const exame = new Exame(resposta, pesos);

exame.adiciona({
  aluno: 'Alice',
  gabarito: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
});

console.log(`Media das notas: ${exame.media_notas()}`);

console.log(`Menor nota: ${exame.menor()}`);

console.log(`Maior nota: ${exame.maior()}`);

console.log(`Notas abaixo de 7.0: ${exame.menor_que(7)}`);

console.log(`Notas acima de 7.0: ${exame.maior_que(7)}`);

console.log(`Lista de notas: ${exame.listar_notas()}`)

exame.adiciona({
  aluno: 'Bob',
  gabarito: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
});

console.log(`Media das notas: ${exame.media_notas()}`);

console.log(`Menor nota: ${exame.menor()}`);

console.log(`Maior nota: ${exame.maior()}`);

console.log(`Notas abaixo de 7.0: ${exame.menor_que(7)}`);

console.log(`Notas acima de 7.0: ${exame.maior_que(7)}`);

console.log(`Lista de notas: ${exame.listar_notas()}`)