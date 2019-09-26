/*
  	Dado un array nxn, devuelve los elementos ordenados de fuera hacia dentro
	en espiral en el sentido de las agujas del reloj.

	Ejemplo:
	array = [[1,2,3],
             [4,5,6],
             [7,8,9]]
	snail(array) #=> [1,2,3,6,9,8,7,4,5]

	Nota: El objetivo NO es ordenar los elementos de menor a mayor, sino recorrer
	la matriz en espiral.
	Nota: La matriz 0x0 se representa como [[]]
*/

export default function snail(array) {
    var result = [];

    var run = function(array) {
        // si el array está vacio, he terminado
        if (array.length == 0) {
            return;
        }

        // Obtengo la primera fila del array
        result = result.concat(array.shift());

        // Si el array solo tiene una fila, he terminado
        if (array.length > 0) {
            // Se hace la matriz transpuesta,
            // se hace un reverse y entonces se vuelve a ejecutar ya que en la primera fila están los que hay que sacar
            return run(transpose(array).reverse());
        } else {
            return;
        }
    }

    // Obtener la matriz transpuesta ( filas x columnas)
    var transpose = function(mat) {
        return mat[0].map((col, i) => mat.map(row => row[i]));
    }

    run(array);
    return result;
}

module.exports = snail;
