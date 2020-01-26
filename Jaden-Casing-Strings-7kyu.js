//My Code

String.prototype.toJadenCase = function () {
  
  charArray = this.split("");
  
  for (i=0; i<charArray.length ; i++) { 
  
  charArray[0] = charArray[0].toUpperCase();
  
  if ( charArray[i] === " ") {
      a= ++i;
      charArray[a] = charArray[a].toUpperCase();
    } 
  }
  str = charArray.join("");  
  return str;
  
};


//Best Codes

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};
