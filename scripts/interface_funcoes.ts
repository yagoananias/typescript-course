interface ISoma {
  (num1: number, num2: number): number
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1: number, numero2: number): number => {
  return numero1 + numero2;
}