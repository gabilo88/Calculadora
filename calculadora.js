function iniciarCalcularora(){
    
    let actuar = "continuar";
    
    while(actuar === "continuar")
    { 
            let num1 =  parseInt(prompt("Ingreso número 1: "));
            let num2 = parseInt(prompt("Ingreso número 2: "));
            let operacion = prompt("Ingrese la operación a realizar (sumar,restar,multiplicar,dividir): ");
            
            let resu = realizarOperacion(num1,num2,operacion)
            alert("Resultado Operacion: " + resu);

            actuar = prompt("¿Desea continuar realizando otra opeación?: (continuar/salir): ");
    }

    alert("¡¡Gracias por operar conmigo!! Nos vemos pronto :) ");
}


function realizarOperacion(a, b, op){   
    let resultado;

        //DEFINICIÓN DE QUE OPERACION DEBE LLAMAR LA FUNCION
        if(op==="sumar"){
            resultado= suma(a,b)
        } 
        else{  
            if(op==="restar"){
                resultado = resta(a,b)
            }
            else{
                if(op==="multiplicar"){
                    resultado = multiplicacion(a,b)
                }
                else{
                    if(op==="dividir"){
                        resultado = division(a,b)                              
                    }
                    else{
                        alert('Operacion no válida');
                    } // else de la división
                }//else de la multiplicacion
            }//else de la resta
        } // else de la suma
        
    return resultado;
}

///DEFINICION DE FUNCIONES
function suma(a,b){
    return a + b;
}

function resta(a,b){
    return a - b;
}

function multiplicacion(a,b){
    return a * b;
}

function division(a, b) {
if (b === 0) {
    return 'Error: El divisor no puede ser 0';
} else {
    return a / b;
}
}      