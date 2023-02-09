function Trial(){
    let subtotal = `a`
    for(let i = 0;i<arguments.length;i++){
        if( arguments[i] == "a"){
            subtotal += arguments[i]
        }
    }
    return subtotal
     

}

console.log(Trial("a",2))

function midpoint() {
    return (
      (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
    );
  }
  
  console.log(midpoint(3, 1, 4, 1, 5));
