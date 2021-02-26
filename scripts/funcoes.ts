function mostrarMensagem(texto: string | number | object): boolean {

  console.log(texto);

  return true;

}

mostrarMensagem("Yaguim");

const show = (codigo: number): number | Date | object => {

  return new Date();
  
}