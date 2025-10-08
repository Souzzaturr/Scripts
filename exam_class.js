export class Exame {
  constructor(resposta, peso) {
    this.resposta = resposta;
    this.pesos = peso;
    this.provas = [];
  }

  adiciona(prova) {
    prova.nota = Object.keys(prova.gabarito).reduce((total, q) => {
      return (
        total + (prova.gabarito[q] === this.resposta.gabarito[q] ? this.pesos[q] : 0)
      );
    }, 0);

    this.provas.push(prova);
  }

  media_notas() {
    let soma = Object.values(this.provas).reduce(
      (soma, prova) => soma + prova.nota,
      0
    );

    return soma / this.provas.length;
  }

  menor(count = 1) {
    let lista_notas = this.provas.map((prova) => prova.nota);

    lista_notas.sort((a, b) => a - b);

    return lista_notas.slice(0, count);
  }

  maior(count = 1) {
    let lista_notas = this.provas.map((prova) => prova.nota);

    lista_notas.sort((a, b) => a - b);

    return lista_notas.slice(-count);
  }

  menor_que(numero) {
    let lista_notas = this.provas.map((prova) => prova.nota);

    return lista_notas.filter((nota) => nota < numero);
  }

  maior_que(numero) {
    let lista_notas = this.provas.map((prova) => prova.nota);

    return lista_notas.filter((nota) => nota > numero);
  }

  lista_notas() {
    let notas_list = [];

    this.provas.forEach( (prova) => notas_list.push(prova.nota) );

    return notas_list
  }
}