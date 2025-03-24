console.log("hola desde consola");
alert("hola desde alerta");
document.writeln("<h1 style='color:red'>hola desde writer JS</h1>");

const Suma=()=>{
    try{
        let num1=parseInt(prompt("numero1: "));
        let num2=parseInt(prompt("numero: "));
        let Suma=num1+num2;
       alert("la suma es: "+Suma);
        


    }catch(e){
        alert("Debes de introducir numeros numericos");
    }

}
const resta=()=>{
    try{
        let num1=parseInt(prompt("numero1: "));
        let num2=parseInt(prompt("numero: "));
        let resta=num1-num2;
       alert("la resta es: "+resta);
        


    }catch(e){
        alert("Debes de introducir numeros numericos");
    }

}
const divicion=()=>{
    try{
        let num1=parseInt(prompt("numero1: "));
        let num2=parseInt(prompt("numero: "));
        let divicion=num1/num2;
       alert("la divicion es: "+divicion);
        


    }catch(e){
        alert("Debes de introducir numeros numericos");
    }

}
const multiplicacion=()=>{
    try{
        let num1=parseInt(prompt("numero1: "));
        let num2=parseInt(prompt("numero: "));
        let multiplicacion=num1*num2;
       alert("la multiplicacion es: "+multiplicacion);
        


    }catch(e){
        alert("Debes de introducir numeros numericos");
    }

}