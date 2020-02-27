const paverte = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1412];

const prueba1 = function(valor) {
    let x = [];
    valor.forEach(element => {
        if (typeof(element)==="number") {
            x.push(element*4);
        };
    });
   x = x.filter(function (elementos) {
       if(elementos > 8){
           return elementos;
       }
   });

   console.log(x);
};

prueba1(paverte);