//Array somente de strings
const filmesCategorias: string[] = ["Comédia", "Drama", "Romance", "Aventura"];

//Array de strings OU de numeros
const filmesCategorias: string[] | number[] = ["Comédia", "Drama", "Romance", "Aventura"];

//Array de string E de numeros
const filmesCategorias: (string | number)[] = ["Comédia", "Drama", "Romance", "Aventura", 10];

//filmesCategorias.push("Ação");

//Array de string E de numeros
const filmesAnos: Array<number | string> = [];

for( let ano = 2000; ano <= new Date().getFullYear(); ano++) {
  filmesAnos.push(ano);
}

console.log(filmesAnos);