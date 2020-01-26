//My Terrible Code

function disemvowel(str) {
charArray = [...str];
for (i=0; i<charArray.length ; i++) {
  if ( charArray[i] === "a" || charArray[i] === "e"|| charArray[i] === "ı" || charArray[i] === "i" || charArray[i] === "o" || charArray[i] === "ö" || charArray[i] === "u" || charArray[i] === "ü"
       || charArray[i] === "A" || charArray[i] === "E"|| charArray[i] === "I" || charArray[i] === "İ" || charArray[i] === "O" || charArray[i] === "Ö" || charArray[i] === "U" || charArray[i] === "Ü") {

      charArray.splice(i,1);     
      i -= i;    
      }
}
  str = charArray.join("");
  return str;
}


//Best Codes

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

disemvowel = str => str.replace(/[aeiou]/gi,'');


function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
