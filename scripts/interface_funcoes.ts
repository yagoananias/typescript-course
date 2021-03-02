interface ISoma {
  (num1: number, num2: number): number
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1: number, numero2: number): number => {
  return numero1 + numero2;
}

interface ICalculos {
  somar(a: number, b: number): number;
  subtrair(a: number, b: number): number;
  multiplicar(a: number, b: number): number;
  dividir(a: number, b: number): number;
}

let calculadora: ICalculos;

calculadora = {
  dividir: (numero1: number, numero2: number) => {
    return numero1 / numero2;
  },
  multiplicar: function (numero1: number, numero2: number) {
    return numero1 * numero2;
  },
  somar: (numero1: number, numero2: number) => {
    return numero1 + numero2;
  },
  subtrair: (numero1: number, numero2: number) => {
    return numero1 - numero2;
  }
}