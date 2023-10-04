function seguridad(str : string) : number{
    const arr = str.split('');
    
    let contador : number = 0;
    if (arr.some(elem => /[a-zA-Z]/.test(elem)) && arr.some(elem => /\d/.test(elem))){
        contador += 1;
    }
    if (/\d{3}/.test(str)){
        contador -= 1;
    }
    if (arr.length>20){
        contador += 2;
    }
    if (arr.length<10){
        contador -= 1;
    }
    if (arr.some(char => /[ ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ _` {  } ~ ]/.test(char))){
        contador += 1;
    }
    return contador;

}
const frase = "fafwefasfewfsdfvzewfzsefwol3a345@*";
console.log(seguridad(frase));