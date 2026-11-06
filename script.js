const modal = document.getElementById("modal");
const imagemModal = document.getElementById("imagemModal");
const legendaModal = document.getElementById("legendaModal");
const fecharMOdal = document.getElementById("fecharMOdal");
const imagens = document.querySelectorAll("main > section:not(#introducao) figure img");

imagens.forEach(function(imagem) {
    imagem.addEventListener("click", function() {
        modal.classList.add("ativo");
        imagemModal.src = imagem.src;
        imagemModal.alt = imagem.alt;
        legendaModal.textContent = imagem.nextElementSibling.textContent;
    });
});

fecharMOdal.addEventListener("cliak", function() {
    modal.classList.remove("ativo");
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("ativo");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.classList.remove("ativo");
    }
});

