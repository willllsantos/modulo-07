const form = document.getElementById("container");
const campos = document.querySelectorAll(".required");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    comparar();
    
});

function comparar() {
    const campoA = parseInt(document.querySelector(".campoA").value);
    const campoB = parseInt(document.querySelector(".campoB").value);

if (!isNaN(campoA) && !isNaN(campoB)) {
    if (campoB > campoA) {
        alert("Formulário válido: B é maior que A.");
        document.querySelector(".campoA").value = ""
        document.querySelector(".campoB").value = ""
    } else {
        alert("Formulário inválido: B deve ser maior que A.");
} 
} else {
        alert("Por favor, insira valores numéricos em ambos os campos.");
    }
}
