//My Code

function descendingOrder(n){
   digits = n.toString().split("");
   realDigits = digits.map(Number);
   for(i=0; i<realDigits.length; i++) {
       for(y=0; y<realDigits.length;y++) {
           if(realDigits[y+1]>realDigits[y]) {
             var a = realDigits[y];
             realDigits[y] = realDigits[y+1];
             realDigits[y+1] = a;
            }
        }
   }
return Number(realDigits.join(""));
}

//Best Codes

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}


function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}
