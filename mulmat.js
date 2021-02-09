//Matrices de prueba
var matriz1 = [
    [1, 0, 1],
    [1, 1, 1]
];
  
var matriz2 = [
   [0, 0, 1],
   [1, 1, 0],
   [1, 0, 0]
];

var matriz3 = [
    [1, 0, 0],
    [0, 0, 1]
];
  
var matriz4 = [
   [1],
   [0],
   [1]
];

var matriz5 = [
    [3, -1],
    [2, 1]
];

var matriz6 = [
    [1/5, 1/5],
    [-2/5, 3/5]
];

//Se manda a llamar la función con una variable que almacenará
//el resultado retornado de la función
var opc = mulmat(matriz6, matriz1);

//== Función que hace la multiplicación ==
/*
Se puede poner una función al en cualquier lugar ya que, las funciones
siempre se cargan primero sin importar su lugar en el documento
*/
function mulmat(matriz_a, matriz_b){
    
    //Comprueba visualmente el orden de las matrices
    console.log("La matriz_a es de: "+matriz_a.length+"*"+matriz_a[0].length);
    console.log("La matriz_b es de: "+matriz_b.length+"*"+matriz_b[0].length);

    //Inicio de la multiplicacion de matrices y guardado en la matriz respuesta
    if(matriz_a[0].length == matriz_b.length){

        //Avisa visualmente si es viable la multiplicación
        console.log("Sí se puede multiplicar");

        //Creacion de las filas de la matriz con el "resultado"
        var matriz_res = new Array(matriz_a.length);

        //Creación de las columnas de la matriz "resultado"
        for(var i = 0;i<matriz_res.length;i++){
            matriz_res[i] = new Array(matriz_b[0].length);
        }

        //Comprobación visual del orden de la matriz resultado
        console.log("La matriz_res es de: "+matriz_res.length+"*"+matriz_res[0].length);

        //Creación de la variable para las sumas
        var base = 0;
        
        //Bucle para el recorrido de las columnas
        for(var i=0;i<matriz_a.length;i++){

            //Bucle recorrido para las filas
            for(var j=0;j<matriz_b[0].length;j++){

                //Reinicio del la variable para las siguientes sumas
                base = 0;

                //Bucle recorrido por cada elemento de las filas y columnas
                for(var k=0;k<matriz_a[0].length;k++){

                    //Multiplica los elementos de las matrices y guarda la suma
                    base += (matriz_a[i][k] * matriz_b[k][j]);
                }

                //Redondea el número a un solo decimal para evitar errores
                //con valores fraccionarios ****
                base = Math.round(parseFloat(base)*100)/100;
                if(base == -0)
                    base = 0;

                //Almacena el resultado de la operacion en su posicion correspondiente
                matriz_res[i][j] = base;
            }
        }

        //Retorna la matriz con el resultado
        return matriz_res;
    } else {
        
        //Avisa visualmente que la operación no es viable
        console.log("No se puede multiplicar");
    }
  }
