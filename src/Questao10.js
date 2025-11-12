
// Questão 10
function parseJSONSafe(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erro) {
    console.log("Erro ao converter JSON:", erro.message);
    return null;
  }
}

const jsonInvalido = '{nome: "João", "idade": 30}';
console.log(parseJSONSafe(jsonInvalido));
