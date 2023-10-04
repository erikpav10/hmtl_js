
function validarFormulario() {
    var campoA = document.getElementById("entrada-lado-a").value;
    var campoB = document.getElementById("Entrada-lado-b").value;

    if (campoA < campoB) {
    // Ação a ser executada caso a validação seja bem-sucedida
    var paragraph = document.getElementById("texto");
    var text = document.createTextNode("Validação bem-sucedida! O número em 'a' é menor que o número em 'b'.");

    paragraph.appendChild(text);

    
    console.log("Validação bem-sucedida! O número em 'a' é menor que o número em 'b'.");
    
    } else {
    // Ação a ser executada caso a validação falhe
    var paragraph = document.getElementById("texto");
    var text = document.createTextNode("Erro de validação! O número em 'a' deve ser menor que o número em 'b'.");

    paragraph.appendChild(text);
    console.log("Erro de validação! O número em 'a' deve ser menor que o número em 'b'.");
    }
}
