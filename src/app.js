/* eslint-disable */
// Se deshabilita el linter para evitar errores de linting

// Esta función se ejecuta cuando la ventana se ha cargado completamente
window.onload = () => {
  // Se actualiza el contenido del elemento con id "excuse" con una excusa generada aleatoriamente
  document.querySelector("#excuse").innerHTML = generadorExcusas();
  console.log("Excuse Generator");
};

// Esta función genera una excusa aleatoria combinando elementos de diferentes arrays
let generadorExcusas = () => {
  // Arrays de diferentes partes de la excusa
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  // Se elige un índice aleatorio para cada parte de la excusa
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  // Se concatena la excusa utilizando los elementos seleccionados aleatoriamente
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
