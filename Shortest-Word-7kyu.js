//My Code

function findShort(s){
  
  words = s.split(" ");
  shortest = words[0].length;
  
  for( i=1 ; i < words.length ; i++) {
    
    if(shortest > words[i].length) {
        shortest = words[i].length;
        }
}
return shortest;
}

//Best Codes

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
