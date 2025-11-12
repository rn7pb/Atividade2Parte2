
// Questão 1
const usuario = {
  nome: "Ana Silva",
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"],
  ativo: true
};

const jsonString = JSON.stringify(usuario);
const usuarioRecuperado = JSON.parse(jsonString);

console.log("JSON String:", jsonString);
console.log("Objeto recuperado:", usuarioRecuperado);
