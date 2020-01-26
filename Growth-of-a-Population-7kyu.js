//My Code

function nbYear(p0, percent, aug, p) {
    var i = 0;   
    while ( p0 < p){   
    p0 = p0 + p0 * (percent/100) + aug       
    i= i+1;   
    } 
    return i;
}
