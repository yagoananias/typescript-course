interface IModel {
  id: number;
  created_at: number;
  updated_at: number;
}

interface IPessoa extends IModel {
  nome: string;
  idade: number; 
}

interface IUsuario extends IPessoa {
  email: string;
  senha: string;
}