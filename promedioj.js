//promedio

// 1 ejemplo

/*const lista1 = [
    100,
    200,
    300,
    400,
    500,
];*/

/*let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {

    sumaLista1 = sumaLista1 + lista1[i];
}

const promediolista1 = sumaLista1 / lista1.length;*/

// ---------------------------------------------------


//2 ej 


function calcularMediaAritmetica(lista) {

    /*let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {

        sumaLista = sumaLista + lista[i];
    }*/

    const sumaLista = lista.reduce(

        function(valorAcumulado = 0, nuevoElemento) { // reduce suma el valor acumulado + el sgte(nuevo elemento) si el primer valor es 1 se suma con el nuevo ej 3 1+3 =4 y lo mantinene en el acumulador para sumarlo con el nuevo actual
            return valorAcumulado + nuevoElemento;


        }
    );

    const promediolista = sumaLista / lista.length;
    return promediolista;


}