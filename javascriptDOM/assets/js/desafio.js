const A = 1;
const B = 1000;

const total = soma(A,B);
console.log(total);


//Escreva o seu código no espaço em branco
function soma(inicio, fim){
    let valor = 0;
   if(verLimites(inicio) && verLimites(fim)){ 
     if(inicio < fim ){
       for(let i = inicio; i <= fim; ++i ){
         valor = valor + i;
       }
     }
   }
     return valor;
}

function verLimites(valor){
 if(valor >= 1 && valor <= 10**9){
   return true;
 }else{
   return false;
 }
 
}