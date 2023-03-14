function join(array) {
    let elements = "";
    for(let i = 0; i < array.length; i++) {
        elements += array[i];
        if( i < array.length - 1) {
            elements += " ";
        }                             
    }
    return elements;  
}
console.log(join(["Este","es","el","ejercicio","sobre","join"]))
