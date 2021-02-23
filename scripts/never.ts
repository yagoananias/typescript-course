function showError(message: string) {

  throw new Error(message);

}

showError("Algo deu errado");