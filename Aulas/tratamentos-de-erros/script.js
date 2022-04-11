function validArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if (typeof arr !== 'object')
            throw new TypeError('Array precisa ser do tipo object');

        if (typeof num !== 'number')
            throw new TypeError('Array precisa ser do tipo number');

        if (arr.length !== num) throw new RangeError('Tamanho inválido!');

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else  if (e instanceof ReferenceError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof ReferenceError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else {
            console.log("tipo de erro não esperado:" + e);
        }
    }
}

console.log(validArray([], 5));