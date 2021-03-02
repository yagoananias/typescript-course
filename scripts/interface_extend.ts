interface IModel {
  id: number;
  created_at: number;
  updated_at: number;
}

interface IPessoa extends IModel {
  nome: string;
  idade?: number; 
}

interface IUsuario extends IPessoa {
  email: string;
  senha: string;
}

const yago: IUsuario = {
  id: 1,
  created_at: new Date().getTime(),
  updated_at: new Date().getTime(),
  nome: "Yago",
  idade: 28,
  email: "contato@yagoananias.com.br",
  senha: "root",
}