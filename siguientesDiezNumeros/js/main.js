function diezNumSiguientes (zim){
    iterador = 1;
    console.log(`Tu número es ${zim}, y sus 10 números siguientes son:`)
    while (iterador <= 10){
        console.log(`${zim + iterador}`);
        iterador++;
    };
};

console.log(diezNumSiguientes(2));