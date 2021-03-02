interface IProduto {
  nome: string;
  preco: number;
  descricao?: string;
  dataValidade: Date;
}

const produtoDados: IProduto = {
  nome: "Notebook",
  preco: 7500,
  descricao: "I7 10ª geração",
  dataValidade: new Date(2022, 11, 5)
}