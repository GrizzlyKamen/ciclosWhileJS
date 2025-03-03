function tablaDeMultiplicar (num) {
    iterador = 1
    do {
        console.log(`${num} * ${iterador}  = ${num * iterador}`);
        iterador++;
    } while(iterador <= 10);
};

console.log(tablaDeMultiplicar(5))