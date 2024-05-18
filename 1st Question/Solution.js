function getPathValue(obj, path){
    const keys = path.split('.');
    let current = obj;
    for(let key of keys){
        if(current === undefined){
            return undefined;
        }

        current = current[key];
    }
    return current;
}


var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

console.log(getPathValue(obj, 'a.b.c')); // 12
console.log(getPathValue(obj, 'a.b.j')); // false
console.log(getPathValue(obj, 'a.b.d')); // undefined
console.log(getPathValue(obj, 'a.c')); // undefined
console.log(getPathValue(obj, 'a.b.c.d')); // undefined
console.log(getPathValue(obj, 'a.b.c.d.e')); // undefined
console.log(getPathValue(obj, 'a.b.j.k')); //undefined
console.log(getPathValue(obj, 'a.k')); //null