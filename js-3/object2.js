let persona = {
    nombre: "Laura",
    edad: 28,
    ciudad: "Sincelejo",
    profesion: "Ingeniera"
}
console.log(persona);
function presentacion (persona) {
    return `Hola mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en la ciudad de ${persona.ciudad}.`;
};
let mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies = ["bailar", "leer", "montar bicicleta"];
console.log(persona.hobbies);
for (let i = 0; i < persona.hobbies.length; i++) {
    const hobbies = persona.hobbies[i];
    console.log(hobbies);
}
