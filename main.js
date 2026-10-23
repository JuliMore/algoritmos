function sumar() {
    let n1, n2, suma;

    alert("Este algoritmo suma dos numero ingresados");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el sundo valor"));

    suma = n1 + n2;
    alert("El resultado de la suma es: "+ suma);
}

function operacionesBasicas(){
    let n1,n2, s, r, m, d;

    alert("Este algortimo que hace operaciones basicas");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));

    s = n1 + n2;
    r = n1 - n2;
    m = n1 * n2;
    d = n1 / n2;
    alert("El resultado de la suma es: "+ s );
    alert("El resultado de la resta es: " + r );
    alert("El resultado de la multiplicaciones: " + m );
    alert("El resultado de la division es: " + d );
}   

function conversionLongitudes(){
    let m, cm, km;

    alert("Este algoritmo realiza la covercion de unidades de longitud");
    m = parseFloat(prompt("Ingrese los metros"));

    cm = m / 100;
    km = m * 1000;
    alert("El resultado en centimetros es: "+ cm );
    alert("El resultado en kilometros es: "+ km);
}

function conversionTemperatura(){
    let g, f, k;

    alert("Este algoritmo realiza la conversion  de unidades de temperatura");
    g = parseFloat(prompt("Ingrese los grados"));

    k = g + 273,15;
    f = ( g * 1,8 ) + 32;
    alert("El resultado en kelvin es: " + k);
    alert("El resultado en farenheit es: " + f);

}

function areaYperimetro(){
    let b, al, ar, p;

    alert("Este algoritmo es para encontrar el area y su perimetro");
    b = parseFloat(prompt("Ingrese la base"));
    al = parseFloat(prompt("Ingrese la altura"));

    ar = b * al;
    p = 2 * ( b * al );

    alert("El resultado en area es: " + ar);
    alert("El resultado del perimetro es: " + p);
}

function promedioDeTresNumeros(){
    let n1, n2, n3, su, pro;

    alert("Este algoritmo determina el promedio de tres numeros");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));
    n3 = parseFloat(prompt("Ingrese el tercer numero"));

    su = n1 + n2+ n3;
    pro = su / 3;

    alert("El resultado de la suma es: " + su);
    alert("El promedio es: " + pro);

}

function conversioTiempo(){
    let seg, mi, ho;

    alert("Este algoritmo hace la conversion de tiempo"),
    seg = parseFloat(prompt("Ingrese los segundos"));

    min = seg / 60;
    ho = seg / 3600;

    alert("El resultado es minutos es: " + min);
    alert("El resultado en horas es: " + ho);
}

function conversionPeso(){
    let kl, gr, li, to;

    alert("Este algoritmo hace la conversion de tiempo");
    kl = parseFloat(prompt("Ingrese los kilogramos"));

    gr = kl * 1000;
    li = kl * 2;
    to = kl / 1000;

    alert("El resulato en gramos es: " + gr);
    alert("El resulato en libras es: " + li);
    alert("El resulato en gramos es: " + to);
}

function pesoPlanetas(){
    let pe, lu, mer, ve, mar, ju, sa, ura, nep;

    alert("Este algortimo da el peso en todos los planetas");
    pe = parseFloat(prompt("Ingrese el peso"));

    lu = ( pe * 1,62) / 9,8;
    mer = ( pe * 3,70) / 9,8;
    ve = ( pe * 8,87) / 9,8;
    mar = ( pe * 3,71) / 9,8;
    ju = ( pe * 24,70) / 9,8;
    sa = ( pe * 10,44) / 9,8;
    ura = ( pe * 8,69) / 9,8;
    nep = ( pe * 11,15) / 9,8;

    alert("El peso en la luna es: " + lu);
    alert("El peso en mercurio es: " + mer);
    alert("El peso en venus es: " + ve);
    alert("El peso en marte es: " + mar);
    alert("El peso en jupiter es: " + ju);
    alert("El peso en saturno es: " + sa);
    alert("El peso en urano es: " + ura);
    alert("El peso en neptuno es: " + nep);
}

function calculoCompra(){
    let pre1, cant1, pre2, cant2, pre3, cant3, sub1, sub2, sub3, total;

    alert("Este algoritmo realiza el calculo de una compra");
    pre1 = parseFloat(prompt("Ingrese el precio del primer valor"));
    cant1 = parseFloat(prompt("Ingrese la cantidad del primer producto"));
    pre2 = parseFloat(prompt("Ingrese el precio del segundo valor"));
    cant2 = parseFloat(prompt("Ingrese la cantidad del segundo producto"));
    pre3 = parseFloat(prompt("Ingrese el precio del tercer valor"));
    cant3 = parseFloat(prompt("Ingrese la cantidad del tercer producto"));

    sub1 = pre1 * cant1;
    sub2 = pre2 * cant2;
    sub3 = pre3 * cant3;
    total = sub1 + sub2 + sub3;

    alert("EL total de la compra es:" + total);
}

function calculoSalario (){
    let pagodiario, salarioMensual, diasTrabajdos, pagoDiario, pagoPeriodo, totalPagar, valorAdicional;

    alert (" Este algortimo realiza el calculo de un salario");
    salarioMensual = parseFloat(prompt("ingrese el primer valor"));
    diasTrabajdos = parseFloat(prompt("ingrese los dias trabajados"));
    valorAdicional = parseFloat(prompt("ingrese el valor adicional"));

    pagoDiario = salarioMensual/30;
    pagoPeriodo = pagoDiario * diasTrabajdos;
    totalPagar = pagoPeriodo + valorAdicional;

    alert ("El total a pagar es: " + totalPagar);

    }

    function facturaServicio (){
        let consumo, valorunidad, porcentajeimpuesto, subtotal, impuesto, total;
        
        alert (" Este algortimo realiza el calculo de la factura de servicio");
        consumo = parseFloat( prompt("ingrese el consumo"));
        valorunidad = parseFloat( prompt("ingrese el valor por unidad"));
        porcentajeimpuesto = parseFloat (prompt("ingrese el valor del porcentaje"));

        subtotal = consumo * valorunidad;
        impuesto = subtotal * porcentajeimpuesto;
        total = subtotal * impuesto;

        alert ("El subtotal es:" + subtotal);
        alert ("El impuesto es:" + impuesto);
        alert ("El total es:" + total);


    }

    function costoviaje(){

        let distancia, consumoPromedio, precioConsumo, litros, costo;

        alert ("Este algortimo realiza el costo de un costo de un viaje");
        distancia = parseFloat(prompt("ingresa la distancia"));
        consumoPromedio = parseFloat(prompt("ingresa el promedio del consumo de gasolina"));
        precioConsumo = parseFloat(prompt("ingresa el consumo de gasoloina"));

        litros = distancia/consumoPromedio 
        costo= litros * precioConsumo

        alert ("El costo aproximado es de:" + costo);
    }

    function tiempoviaje(){

        let tiempo, velocidad, distancia;

        alert("Este algortimo realiza el calculo de tiempo de un viaje");
         distancia = parseFloat(prompt("ingresa la distancia"));
         velocidad = parseFloat(prompt("ingresa la velocidad"));

        tiempo = distancia/velocidad;

        alert ("el timepo del viaje fue aproximadamanete de:" + tiempo);
        }


        function sistemasnotas(){
            let n1, n2, n3, nf;

            alert("Este algortimo realiza un sistemas de notas");
            n1 = parseFloat(prompt("ingresa la primera nota "));
            n2 = parseFloat(prompt("ingresa la segunda nota "));
            n3 = parseFloat(prompt("ingresa la tercera nota nota "));
        
            nf = (n1*0.20)+(n2*0.30)+(n3*0.50);

            alert ("la nota final es:" + nf);

        
    }

        function conversionMonedas(){

        let pesos, dolares, eruos;

        alert("Este algortimo realiza un sistema de conversion de monedas");
        pesos = parseFloat(prompt("ingresa el valor de pesos"));
        
        dolares = pesos / 3.178,00;
        euros = pesos / 3.567,58;

        alert ("el dolar en pesos son:" + dolares);
        alert ("el euro en pesos son:" + euros);

    }

    //Algoritmos Condicionales

function numeropositivo(){

    let numero
    alert ("Algortimo que muestre el numero positivo");

    numero = parseFloat(prompt("ingrese el numero"));

    if (numero > 0) {

     alert("El numero es positivo")

    }else{
    alert("No es positivo")
   }
}


function parImpar(){
    let numero;

    alert("Este algortimo determia si el numero es par o impar");
    numero = parseFloat(prompt("ingresa el numero"));

    if (numero % 2 == 0){
        alert("El numero es par")
        
    }else{
        alert("El numero es impar")
    }
    
    }
    function mayornumeros(){ 
        let n1, n2;

        alert("Este algortimo determina el mayor de dos numeros")
        n1 = parseFloat(prompt("ingrese el primer numero"));
        n2 = parseFloat(prompt("ingrese el segundo numero"));
    
        if (n1 === n2){
            alert("los numeros son iguales");
        }else if (n1>n2) {
            alert ("El numero mayor es" + n1);

        } else {  

            alert("es menor" + n2);
        }
    }
    
    function descuentoCompra(){

        let valor, decuento, total;

        alert("Este algortimo determina el descuento de una compra")

        valor = parseFloat(prompt("ingrese el valor"));
        descuento = valor*0.10
        
        if (valor>=200000){
            alert("el descuento fue aplicado y quedo en:" + descuento);
        
         }else{
            alert("No se aplico descuento y quedo en:" + valor)
            
        }
    }

    function temperaturaCiudad(){  
        let  temperatura;

        alert("Este algoritmo muestra el clima de la ciudad");
        temperatura = parseFloat(prompt("ingrese la temperatura"));

        if (temperatura>30){
            alert("La temperatura de la ciudad es alta");
    
        }else{ 
            alert("La temperatura de la ciudad es baja")
             }
     }

     function mayorDedad(){
     let edad

     alert ("Este algortimo determina si es mayor de edad");
     edad = parseFloat(prompt("ingrese el valor"));

     if (edad>17){
        alert(" Es mayor de edad");
        }else{ 
            alert("La persona es menor de edad")
    }
   }

   function retiroDinero(){ 
    let saldo, retiro, nuevoSaldo;

    alert("Este algortimo hace que el retiro de dinero de un nuevo saldo");
    saldo = parseFloat(prompt("Ingrese el valor del saldo"));
    retiro = parseFloat(prompt("Ingrese el valor a retirar"));

    if (retiro<=saldo){
        nuevoSaldo = saldo - retiro
        alert("El saldo restante es de" + nuevoSaldo)
    }else{
        alert("Monto a retirar no disponible")

 }
 }
 
 function costoEnvio(){
    let valor, costoEnvio, total;

    alert("Este algoritmo determina si el envio tiene costo o no");
    valor = parseFloat(prompt("Ingrese el valor"));

    if (valor>=150000){
        costoEnvio = 0
        alert("El envio no tuvo costo y quedo en:" + valor);
    }else{ 
        costoEnvio = 12000
        alert("El costo del envio fue de:" + costoEnvio);
        alert("El costo final es de:" + (valor + costoEnvio));

  }
  }

  function menormayor(){
    let n1, n2;

    alert("Este algortimo determina el numero mayor o menor");
    n1 = parseFloat(prompt("Ingrese el primer valor"));
    n2 = parseFloat(prompt("Ingrese el segundo valor"));

    if (n1 === n2){
        alert("Los numeros son iguales");

    }else if (n1>n2){
        alert("El numero mayor es:" + n1);
        alert("El numero menor es:" + n2);
    
    }else{ 
        alert("El numero mayor es:" + n2);
        alert("EL numero menor es" + n1);
    }
    }

    function  tarifaParqueadero(){
        let horas, tarifa;

        alert("Este algoritmo determina la tarifa de parqueadero");

        horas= parseFloat(prompt("ingrese las horas"));

        if (horas<=1){
            tarifa=5000
            alert("la tarifa es de:" + tarifa);
          }else if (horas<=3){
            tarifa = 10000
            alert("La tarifa es de" + tarifa);
            }else if (horas<=6){;
                tarifa = 18000
                alert("La tarifa es de " + tarifa)
            }else{ 
                tarifa= 25000
                alert("La tarifa es de" + tarifa)
        }
    }

    function tarifaTransporte(){
        let edad, pasaje;

        alert("Este algoritmo determina la tarifa de transporte");

        edad = parseFloat(prompt("Ingrese su edad"));

        if (edad>5){
            tarifa = 0
            alert("el pasaje quedo en:"+ tarifa);

        } else if (edad<17){
            tarifa = 2000
            alert("El pasaje quedo en:" + tarifa);
         } else if (edad<59){
            tarifa = 2500
            alert("la tarifa es de" + tarifa)
         }else{ 
            tarifa= 3500
            alert("la tarifa es de" + tarifa)
        }

        }
        
        function velocidad(){

            let velocidad;

            alert("Este algoritmo determina la velocidad");
            
            velocidad = parseFloat(prompt("ingrese la velocidad"));

            if (velocidad>100){
                alert("La velocidad es muy alta");
            
            }else if(velocidad>80){
                alert("La velocidad es alta");
            }else if (velocidad>59){
                alert("La velocidad es moderada");
            }else{
                alert("La velocidad es baja");
            }
        }

        function meses(){

            let mes, dias;

            alert("Este algortimo determina cuantos dias tiene un mes");

            dias = 31
           mes = parseFloat(prompt("Ingrese el mes"));

    if (mes == 2) {
        dias = 28;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 4) {
        dias = 30;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 6) {
        dias = 30;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 9) {
        dias = 30;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 11) {
        dias = 30;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 1) {
        dias = 31;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 3) {
        dias = 31;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 5) {
        dias = 31;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 7) {
        dias = 31;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 8) {
        dias = 31;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 10) {
        dias = 31;
        alert("El mes tiene: " + dias + " dias");
    }else if (mes == 12) {
        dias = 31;
        alert("El mes tiene: " + dias + " dias");
    }else {
        alert("El mes no es valido");
    }
        }

        function NumeroMes(){
            let mes;

            alert("Algortimo que determina el mes por el numero ingresado");

            mes =parseFloat(prompt("Ingrese el numero del mes"));

            switch (mes) {
                case 1:
                    alert("Enero");
                    break;
                case 2:
                    alert("Febrero");
                    break;
                case 3:
                    alert("Marzo");
                    break;
                case 4:
                    alert("abril");
                    break;
                case 5:
                    alert("mayo");
                    break;
                case 6:
                    alert("Junio");
                    break;
                case 7:
                    alert("Julio");
                    break;
                case 8:
                    alert("Agosto");
                    break;
                case 9:
                    alert("Septiembre");
                    break;
                case 10:
                    alert("Octubre");
                    break;
                case 11:
                    alert("Noviembre");
                    break;
                case 12:
                    alert("Diciembre");
                    break;
                default: 
                alert("No existe un mes con este numero");
                    break;
            }
        }

        function atraccion(){

            let mide, edad;

        alert("Este algortimo determina si puede ingresar a una atraccion");

       edad = parseFloat(prompt("Ingrese la edad"));
    mide = parseFloat(prompt("Ingrese la estatura"));

    if (edad >= 12 && mide > 1.39) {
        alert("Puede ingresar");
    } else {
        alert("No puede ingresar");
    }
    
    }
    
    function descuentoCliente(){

        let cliente, descuento, valor, total;
        

        alert("Este algoritmo determina un descuento segun el cliente");

       valor = parseFloat(prompt("Ingrese el valor"));
    cliente = prompt("Ingrese el tipo de cliente (normal o frecuente)");

    if (valor >= 20000) {
    if (cliente == "normal") {
            descuento = valor * 0.05;          
            total = valor - descuento;
            alert("El descuento es: " + descuento + "Total a pagar: " + total);
    }else if (cliente == "frecuente") {
            descuento = valor * 0.10;          
            total = valor - descuento;
            alert("El descuento es: " + descuento + "Total a pagar: " + total);
    }else {
            alert("Tipo de cliente no valido. No se agrega descuento");
        }
    }else {
        alert("El valor es menor a 20000. No se agrega descuento");
    }
    }
    function cajero(){

        let saldo, retiro, nuevoSaldo;

        alert("Este algortimo determina un cajero automatico segun su saldo");

        saldo = parseFloat(prompt("Ingrese el valor de saldo"));
        retiro = parseFloat(prompt("Ingresa el valor a retirar"));

    if (retiro <= 0) {
        alert("No se puede retirar 0");
    }else if (retiro % 10000 !== 0) {
        alert("Solo se pueden retirar multiplos de 10000");
    }else if (retiro > saldo) {
        alert("Saldo insuficiente");
    }else {
        nuevoSaldo = saldo - retiro;
        alert("Su nuevo saldo es: " + nuevoSaldo);
    }

    }
    function validacion(){
        let contra, user;
        const usuario = "admin";
        const pass = "1234";
        contra = "admin1234";
        alert("Este algortimo valida una contraseña");
        user =(prompt("Ingrese el usuario"));
        contra =(prompt("Ingresa la contraseña"));

    if (user == usuario && contra == pass){ 
        alert ("Bienvenido");
     }else{
        alert ("Contraseña o usuario incorrecto");
    }
}
    function bisiesto(){ 
        let año;
        alert ("Este algortimo determina si un año es bisiesto");
        año = parseFloat(prompt("Ingrese el año"));

    if (año % 400 == 0) {
        alert("El año " + año + " es bisiesto");
    }else if (año % 100 == 0) {
        alert("El año " + año + " no es bisiesto");
    }else if (año % 4 == 0) {
        alert("El año " + año + " es bisiesto");
    }else {
        alert("El año " + año + " no es bisiesto");
    }
}
    function triangulo(){
        let n1, n2, n3;
        alert ("Este algoritmo determina si es un triangulo o no");

        n1 = parseFloat(prompt("Ingrese el primer valor"));
        n2 = parseFloat(prompt("Ingrese el segundo valor"));
        n3 = parseFloat(prompt("Ingrese el tercer valor"));
        
        if (n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1) {
        
        if (n1 == n2 && n2 == n3) {
            alert("El triangulo es equilatero");
        }else if (n1 == n2 || n1 == n3 || n2 == n3) {
            alert("El triangulo es isosceles");
        } else {
            alert("El triangulo es escaleno");}

        } else {
        alert("No es un triangulo");
    }


    }

    function calculadora() {
    let n1, n2, operacion, resultado;

    alert("Este algoritmo es una calculadora");

    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));
    operacion = parseFloat(prompt("Ingrese la operacion: 1 = Suma 2 = Resta 3 = Multiplicacion 4 = Division"));

    if (operacion == 1) {
        resultado = n1 + n2;
        alert("El resultado de la suma es: " + resultado);
    }else if (operacion == 2) {
        resultado = n1 - n2;
        alert("El resultado de la resta es: " + resultado);
    }else if (operacion == 3) {
        resultado = n1 * n2;
        alert("El resultado de la multiplicacion es: " + resultado);
    }else if (operacion == 4) {
        if (n2 != 0) {
            resultado = n1 / n2;
            alert("El resultado de la division es: " + resultado);
    }else {
            alert("No se puede dividir por cero");
        }
    }else {
        alert("Opcion no valida");
    }
}
    function equipaje() {
    let peso;

    alert("Este algoritmo determina la tarifa de equipaje");

    peso = parseFloat(prompt("Ingrese el peso de la maleta en kg"));

    if (peso <= 23) {
        alert("No tiene costo adicional");
    }else if (peso >= 23.1 && peso <= 30) {
        alert("Se cobra $50.000");
    }else if (peso >= 30.1 && peso <= 40) {
        alert("Se cobra $100.000");
    }else if (peso > 40) {
        alert("No se permite transportar la maleta");
    }else {
        alert("Peso no valido");
    }
}

    function facturaCompra() {
    let valor, descuento, valorConDescuento, iva, total;

    alert("Este algoritmo genera una factura de compra");

    valor = parseFloat(prompt("Ingrese el valor de la compra"));

    if (valor < 100000) {
        descuento = 0;
    }else if (valor >= 100000 && valor <= 299999) {
        descuento = valor * 0.05;
    }else if (valor >= 300000 && valor <= 499999) {
        descuento = valor * 0.10;
    }else if (valor >= 500000) {
        descuento = valor * 0.15;
    }else {
        alert("Valor no válido");
        descuento = 0;
    }

    valorConDescuento = valor - descuento;
    iva = valorConDescuento * 0.19;
    total = valorConDescuento + iva;

    alert("Subtotal: $" + valor);
    alert("Descuento: $" + descuento);
    alert("Valor con descuento: $" + valorConDescuento);
    alert("IVA (19%): $" + iva);
    alert("Total a pagar: $" + total);
}
    function sistemaRiesgo(){

        let edad, ingreso;
        
        alert("Algortimo de sistema de credito");
        edad = parseFloat(prompt("Ingrese la edad"));

        ingresos = parseFloat(prompt("Ingrese los ingresos mensuales"));

    if (edad < 18) {
        alert("No elegible");
    }else if (edad >= 18 && edad <= 25) {
    if (ingresos >= 2000000) {
            alert("Elegible");
     }else {
            alert("No elegible");
        }
    }else if (edad > 25) {
    if (ingresos >= 1500000) {
            alert("Elegible");
     }else {
            alert("No elegible");
        }
    }else {
        alert("Edad no válida");
    }
    }

    function mayorMenorIgual() {
    let n1, n2, n3, mayor, menor;

    alert("Este algoritmo determina el mayor, el menor y si hay iguales");

    n1 = parseFloat(prompt("Ingrese el primer número"));
    n2 = parseFloat(prompt("Ingrese el segundo número"));
    n3 = parseFloat(prompt("Ingrese el tercer número"));

    if (n1 >= n2 && n1 >= n3) {
        mayor = n1;
    }else if (n2 >= n1 && n2 >= n3) {
        mayor = n2;
    }else {
        mayor = n3;
    }

    if (n1 <= n2 && n1 <= n3) {
        menor = n1;
    }else if (n2 <= n1 && n2 <= n3) {
        menor = n2;
    }else {
        menor = n3;
    }

    alert("El mayor es: " + mayor);
    alert("El menor es: " + menor);

    if (n1 == n2 || n1 == n3 || n2 == n3) {
        alert("Existen valores iguales");
    }else {
        alert("No hay valores iguales");
    }
}

    function parqueaderoE() {
    let tipo, horas, tarifa, total;

    alert("Este algoritmo calcula el valor del parqueadero");

    tipo = parseFloat(prompt("Ingrese el tipo de vehiculo: 1 = Automovil 2 = Motocicleta"));
    horas = parseFloat(prompt("Ingrese las horas de estacionamiento"));

    if (horas <= 0) {
        alert("Error: Las horas deben ser mayores a 0");
    }else if (tipo == 1) {
        tarifa = 5000;
        total = tarifa * horas;

        if (horas > 5) {
            total = total - (total * 0.10);
        }

        alert("Tipo de vehiculo: Automovil - Total a pagar: $" + total);
    }else if (tipo == 2) {
        tarifa = 3000;
        total = tarifa * horas;

        if (horas > 5) {
            total = total - (total * 0.10);
        }

        alert("Tipo de vehiculo: Motocicleta - Total a pagar: $" + total);
    }else {
        alert("Tipo de vehiculo no valido");
    }
}

//Algortimos De bucles

    function contarNum(){
      let ini, fin;
    alert("Algortimo que cuenta numeros segun ponga el usuario");

    ini = parseInt(prompt("Ingrese el valor inicial"));
    fin = parseInt(prompt("Ingrese el valor final"));

    for(let i=ini; i<=fin; i++){
        console.log(i);
    }
}

function cuentacero(){
    let n1;
    alert("Algoritmo que cuente los numeros hacia atras");

    n1 = parseInt(prompt("Ingrese el primer valor"));

    for(let i=n1; i>0; i--){
        console.log(i);
        
    }
    console.log("La cuenta ha terminado");
}

function numerospar(){
    let n1;
    alert("Algoritmo que muestre los numero pares");

    n1 = parseInt(prompt("Ingrese el primer valor"));

    for(let i=1; i<=n1; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}

function numerosimpares() {
    let n1;

    alert("Algoritmo que muestre los numeros impares");

    n1 = parseInt(prompt("Ingrese el numero limite"));

    for (let i = 1; i <= n1; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

function sumanumeros() {
    let n1, suma;
    suma = 0;

    alert("Algoritmo que sume los numeros del 1 hasta Numero");

    n1 = parseInt(prompt("Ingrese el numero N"));

    for (let i = 1; i <= n1; i++) {
        suma = suma + i;
    }

    console.log("La suma es: " + suma);
}

function tablamultiplicar() {
    let n1;

    alert("Algoritmo que muestre la tabla de multiplicar");

    n1 = parseInt(prompt("Ingrese el numero"));

    for (let i = 1; i <= 10; i++) {
        console.log(n1 + " x " + i + " = " + (n1 * i));
    }
}

function contarpafimpares() {
    let n1, pares = 0, impares = 0;

    alert("Algoritmo que cuente pares e impares");

    n1 = parseInt(prompt("Ingrese el numero limite"));

    for (let i = 1; i <= n1; i++) {
        if (i % 2 == 0) {
            pares = pares + 1;
        } else {
            impares = impares + 1;
        }
    }

    console.log("Cantidad de pares: " + pares);
    console.log("Cantidad de impares: " + impares);
}

function promedionumeros() {
    let cantidad, numero, suma, promedio;
    suma = 0;

    alert("Algoritmo que calcule el promedio de numeros");

    cantidad = parseInt(prompt("Cuantos numeros desea ingresar?"));

    for (let i = 1; i <= cantidad; i++) {
        numero = parseFloat(prompt("Ingrese el numero " + i));
        suma = suma + numero;
    }

    promedio = suma / cantidad;

    console.log("Cantidad de numeros ingresados: " + cantidad);
    console.log("Suma: " + suma);
    console.log("Promedio: " + promedio);
}

function numeromayor() {
    let cantidad, numero, mayor;

    alert("Algoritmo que determine el numero mayor");

    cantidad = parseInt(prompt("Cuantos numeros desea ingresar?"));

    for (let i = 1; i <= cantidad; i++) {
        numero = parseFloat(prompt("Ingrese el numero " + i));

        if (i == 1) {
            mayor = numero;
        } else if (numero > mayor) {
            mayor = numero;
        }
    }

    console.log("El numero mayor es: " + mayor);
}

function numeromenor() {
    let cantidad, numero, menor;

    alert("Algoritmo que determine el numero menor");

    cantidad = parseInt(prompt("Cuantos numeros desea ingresar?"));

    for (let i = 1; i <= cantidad; i++) {
        numero = parseFloat(prompt("Ingrese el numero " + i));

        if (i == 1) {
            menor = numero;
        } else if (numero < menor) {
            menor = numero;
        }
    }

    console.log("El numero menor es: " + menor);
}

function clasificacionnumeros() {
    let cantidad, numero, positivos = 0, negativos = 0, ceros = 0;

    alert("Algoritmo que clasifique numeros");

    cantidad = parseInt(prompt("Cuantos numeros desea ingresar?"));

    for (let i = 1; i <= cantidad; i++) {
        numero = parseFloat(prompt("Ingrese el numero " + i));

        if (numero > 0) {
            positivos = positivos + 1;
        } else if (numero < 0) {
            negativos = negativos + 1;
        } else {
            ceros = ceros + 1;
        }
    }

    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Ceros: " + ceros);
}

function estadisticasventas() {
    let cantidad, valor, total = 0, mayor = 0, promedio;

    alert("Algoritmo de estadisticas de ventas");

    cantidad = parseInt(prompt("Ingrese la cantidad de ventas"));

    for (let i = 1; i <= cantidad; i++) {
        valor = parseFloat(prompt("Ingrese el valor de la venta " + i));
        total = total + valor;

        if (i == 1 || valor > mayor) {
            mayor = valor;
        }
    }

    promedio = total / cantidad;

    console.log("Total de ventas: " + total);
    console.log("Promedio de ventas: " + promedio);
    console.log("Venta de mayor valor: " + mayor);
}

function numeroshastacero() {
    let numero, cantidad = 0, suma = 0, promedio;

    alert("Algoritmo de numeros hasta cero");

    numero = parseFloat(prompt("Ingrese un numero (0 para terminar)"));

    while (numero != 0) {
        cantidad = cantidad + 1;
        suma = suma + numero;
        numero = parseFloat(prompt("Ingrese un numero (0 para terminar)"));
    }

    if (cantidad > 0) {
        promedio = suma / cantidad;
        console.log("Cantidad de numeros: " + cantidad);
        console.log("Suma: " + suma);
        console.log("Promedio: " + promedio);
    } else {
        console.log("No se ingresaron numeros");
    }
}

function validacioncontraseña() {
    let contraseña, correcta = "1234";

    alert("Algoritmo de validacion de contraseña");

    contraseña = prompt("Ingrese la contraseña");

    while (contraseña != correcta) {
        alert("Contraseña incorrecta. Intente de nuevo");
        contraseña = prompt("Ingrese la contraseña");
    }

    alert("Contraseña correcta. Acceso permitido");
}

function menuopciones() {
    let opcion = 0;

    while (opcion != 4) {
        opcion = parseInt(prompt("MENU 1. Mostrar mensaje  2. Mostrar informacion  3. Realizar una operacion 4. Salir"));

        if (opcion == 1) {
            alert("Hola, este es un mensaje");
        } else if (opcion == 2) {
            alert("Informacion del sistema");
        } else if (opcion == 3) {
            alert("Operacion realizada");
        } else if (opcion == 4) {
            alert("Saliendo del sistema");
        } else {
            alert("Opcion no valida");
        }
    }
}

function cajeroautomatico() {
    let saldo = 500000, opcion = 0, valor;

    while (opcion != 4) {
        opcion = parseInt(prompt("CAJERO AUTOMATICO 1. Consultar saldo 2. Retirar dinero 3. Depositar dinero 4. Salir"));

        if (opcion == 1) {
            alert("Su saldo es: $" + saldo);
        } else if (opcion == 2) {
            valor = parseFloat(prompt("Ingrese el valor a retirar"));

            if (valor <= 0) {
                alert("El valor debe ser mayor a cero");
            } else if (valor > saldo) {
                alert("Saldo insuficiente");
            } else {
                saldo = saldo - valor;
                alert("Retiro exitoso. Nuevo saldo: $" + saldo);
            }
        } else if (opcion == 3) {
            valor = parseFloat(prompt("Ingrese el valor a depositar"));
            saldo = saldo + valor;
            alert("Deposito exitoso. Nuevo saldo: $" + saldo);
        } else if (opcion == 4) {
            alert("Gracias por usar el cajero");
        } else {
            alert("Opcion no valida");
        }
    }
}

function sistemanotas() {
    let cantidad, nota, aprobados = 0, reprobados = 0, suma = 0, mayor, menor, promedio;

    alert("Algoritmo de sistema de notas");

    cantidad = parseInt(prompt("Ingrese la cantidad de estudiantes"));

    for (let i = 1; i <= cantidad; i++) {
        nota = parseFloat(prompt("Ingrese la nota del estudiante " + i));
        suma = suma + nota;

        if (nota >= 3.0) {
            aprobados = aprobados + 1;
        } else {
            reprobados = reprobados + 1;
        }

        if (i == 1) {
            mayor = nota;
            menor = nota;
        } else {
            if (nota > mayor) {
                mayor = nota;
            }
            if (nota < menor) {
                menor = nota;
            }
        }
    }

    promedio = suma / cantidad;

    console.log("Cantidad de estudiantes: " + cantidad);
    console.log("Aprobados: " + aprobados);
    console.log("Reprobados: " + reprobados);
    console.log("Promedio del grupo: " + promedio);
    console.log("Nota mas alta: " + mayor);
    console.log("Nota mas baja: " + menor);
}

function adivinarnumero() {
    let secreto = 7, intento = 0, intentos = 0;

    alert("Algoritmo de adivinar el numero");

    while (intento != secreto) {
        intento = parseInt(prompt("Adivine el numero secreto"));
        intentos = intentos + 1;

        if (intento < secreto) {
            alert("El numero secreto es mayor");
        } else if (intento > secreto) {
            alert("El numero secreto es menor");
        } else {
            alert("Acertaste!");
        }
    }

    console.log("Cantidad de intentos: " + intentos);
}

function registroproductos() {
    let cantidad, nombre, precio, disponible, totalInventario = 0;
    let mayorPrecio = 0, menorPrecio = 0, nombreMayor = "", nombreMenor = "";

    alert("Algoritmo de registro de productos");

    cantidad = parseInt(prompt("Ingrese la cantidad de productos"));

    for (let i = 1; i <= cantidad; i++) {
        nombre = prompt("Ingrese el nombre del producto " + i);
        precio = parseFloat(prompt("Ingrese el precio del producto " + i));
        disponible = parseInt(prompt("Ingrese la cantidad disponible"));

        totalInventario = totalInventario + (precio * disponible);

        if (i == 1) {
            mayorPrecio = precio;
            menorPrecio = precio;
            nombreMayor = nombre;
            nombreMenor = nombre;
        } else {
            if (precio > mayorPrecio) {
                mayorPrecio = precio;
                nombreMayor = nombre;
            }
            if (precio < menorPrecio) {
                menorPrecio = precio;
                nombreMenor = nombre;
            }
        }
    }

    console.log("Cantidad total de productos: " + cantidad);
    console.log("Valor total del inventario: " + totalInventario);
    console.log("Producto con mayor precio: " + nombreMayor);
    console.log("Producto con menor precio: " + nombreMenor);
}

function acumuladorlimite() {
    let numero, suma = 0, cantidad = 0, promedio;

    alert("Algoritmo acumulador hasta 100");

    while (suma < 100) {
        numero = parseFloat(prompt("Ingrese un numero"));
        suma = suma + numero;
        cantidad = cantidad + 1;
    }

    promedio = suma / cantidad;

    console.log("Cantidad de numeros: " + cantidad);
    console.log("Suma acumulada: " + suma);
    console.log("Promedio: " + promedio);
}

function sistemacompras() {
    let nombre, precio, cantidad, subtotal = 0, descuento = 0, iva, total, productos = 0, respuesta = "si";

    alert("Algoritmo de sistema de compras");

    while (respuesta == "si") {
        nombre = prompt("Ingrese el nombre del producto");
        precio = parseFloat(prompt("Ingrese el precio"));
        cantidad = parseInt(prompt("Ingrese la cantidad"));

        subtotal = subtotal + (precio * cantidad);
        productos = productos + 1;

        respuesta = prompt("Desea agregar otro producto? (si/no)");
    }

    if (subtotal < 100000) {
        descuento = 0;
    } else if (subtotal >= 100000 && subtotal <= 299999) {
        descuento = subtotal * 0.05;
    } else if (subtotal >= 300000 && subtotal <= 499999) {
        descuento = subtotal * 0.10;
    } else if (subtotal >= 500000) {
        descuento = subtotal * 0.15;
    }

    iva = (subtotal - descuento) * 0.19;
    total = (subtotal - descuento) + iva;

    console.log("Subtotal: " + subtotal);
    console.log("Descuento: " + descuento);
    console.log("IVA: " + iva);
    console.log("Total a pagar: " + total);
    console.log("Cantidad de productos: " + productos);
}

        