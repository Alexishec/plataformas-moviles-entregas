function suma(n1, n2){
return n1+n2;
}

var resta = function(x,y){
    return x-y;
}


var multiplicacion =(n,m)=>{
    return n*m;
}

function cubo(n1){
    return n1*n1*n1;
}

var residuos = function (x,y){
    
    return x % y;
}

var s=suma(7,7);
var r=resta(10,5);
var m=multiplicacion(5,5);
var c=cubo(4);
var res=residuos(10,7);
var salto="<br>"

console.log(s);console.log(" suma",salto);
document.write(s);document.write(" suma",salto);


console.log(r);console.log(" resta",salto);
document.write(r);document.write(" resta",salto);


console.log(m);console.log(" multiplicacion",salto)
document.write(m);document.write(" multiplicacion",salto);

console.log(c);console.log(" Elevado al cubo",salto);
document.write(c);document.write(" Elevado al cubo",salto);

console.log(res);console.log(" Residuo",salto);
document.write(res);document.write(" Residuo",salto);