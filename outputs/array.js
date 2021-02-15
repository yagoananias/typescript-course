var filmesCategorias = ["Comédia", "Drama", "Romance", "Aventura"];
//filmesCategorias.push("Ação");
var filmesAnos = [];
for (var ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}
console.log(filmesAnos);
