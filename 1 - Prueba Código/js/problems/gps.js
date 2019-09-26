/*
	¡El GPS se ha roto y tenemos que llegar a un sitio!

	Por suerte, tienes un mapa y tu algoritmo sigue intacto. Eso sí, tu mapa es
	un poco	extraño: todas las intersecciones están etiquetadas con números enteros
	diferentes y las  carreteras que las conectan están etiquetadas con el tiempo
	que se tarda en recorrerlas expresado en minutos.

	Te encuentras en la intersección etiquetada como "start" y tu destino es la
	interescción etiquetada como "finish".

	Dispondrás del número total de intersecciones y un array de carreteras, cada
	una de ellas con las propiedades: "from", "to" (las interesecciones están
	etiquetadas con números enteros menores que el número de intersecciones) y
	"drivingTime". Las carreteras sólo pueden ser usadas para ir desde "from" a
	"to". No hay carreteras de doble sentido.

	Completa la función para que devuelva un array de intersecciones de la ruta
	más rápida desde "start" hasta "finish" (ambas incluidas).

	Si hay vairas rutas iguales, coge cualquiera. Si no hay rutas, devuelve null.

	Ejemplo:

	var roads = [
	    {from: 0, to: 1, drivingTime: 5},
	    {from: 0, to: 2, drivingTime: 10},
	    {from: 1, to: 2, drivingTime: 10},
	    {from: 1, to: 3, drivingTime: 2},
	    {from: 2, to: 3, drivingTime: 2},
	    {from: 2, to: 4, drivingTime: 5},
	    {from: 3, to: 2, drivingTime: 2},
	    {from: 3, to: 4, drivingTime: 10}
	];
	navigate(5, roads, 0, 4);
	// devolvería [0, 1, 3, 2, 4]. Tiempo más rápido is 5 + 2 + 2 + 5 = 14 minutes

*/
export default function navigate(numberOfIntersections, roads, start, finish) {
    if (start === finish) return [start];

    const pathMap = {};
    const visited = {};

    let curr = start;
    while (curr !== undefined) {
        visited[curr] = true;

        roads.filter(r => r.from === curr).forEach(r => {
            const path = pathMap[curr]
                ? {time: pathMap[curr].time + r.drivingTime, routes: pathMap[curr].routes.concat([r.to])}
                : {time: r.drivingTime, routes: [start, r.to]};

            if (!pathMap[r.to] || pathMap[r.to].time > path.time)
                pathMap[r.to] = path;

        });

        let nextCurr;
        let fastestTime;
        for (let p in pathMap) {
            p = Number(p);
            if (!visited[p] && (!fastestTime || pathMap[p].time < fastestTime)) {
                nextCurr = p;
                fastestTime = pathMap[p].time;
            }
        }
        curr = nextCurr;
    }

    console.log(pathMap);

    return (pathMap[finish] && pathMap[finish].routes.length <= numberOfIntersections)
        ? pathMap[finish].routes
        : null;
}

module.exports = navigate;
