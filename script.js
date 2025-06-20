let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
// document = HTML
// QuerySelector = Selecionador de item dentro do HTML



function mudarVisual(cor, imagem) {

    tenis.classList.add("troca-efeito")
    
    body.style.background = cor
    

    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);
}

//1000 = milisegundos => 1 segundo
// 500 = meio segundo