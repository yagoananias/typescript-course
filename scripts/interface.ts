interface IEndereco {
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
}

let endereco: IEndereco;

endereco = {
  logradouro: "Rua dos bobos",
  numero: 1000,
  bairro: "Ipe",
  cidade: "Bernô"
}