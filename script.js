/* 
    ,
    {
        nome: "",
        descricao: "",
        preview: "",
        link: "",
    }
*/

var listaProjetos = [
    {
        nome: "Mentalista",
        descricao: "Jogo simples baseado em adivinhar um número utilizando lógica com o menor número de tentativas possíveis.",
        preview: "https://shots.codepen.io/cauamp/pen/eYjPpYN-512.webp?version=1675336753",
        link: "https://codepen.io/cauamp/full/BaPqQLw"
    },
    {
        nome: "Conversor de temperataura",
        descricao: "Ferramenta que converter valores entre as escalas de temperatura Kelvin, Celsius e Fahrenheit.",
        preview: "https://shots.codepen.io/cauamp/pen/Yzjjmzo-512.webp?version=1675610017",
        link: "https://codepen.io/cauamp/full/Yzjjmzo",
    },
    {
        nome: "Alura Flix",
        descricao: "Catalogo de filmes simulado que admite modificações do usuário.",
        preview: "https://shots.codepen.io/cauamp/pen/gOjQwbE-512.webp?version=167573500",
        link: "https://codepen.io/cauamp/full/gOjQwbE"
    }
]

listaProjetos.forEach(projeto => {
    document.getElementById("Projects").innerHTML += `
    <div class="projeto">
        <img class="projeto-print" src="${projeto.preview}"
        alt = "Preview do Projeto ${projeto.nome}">
        <div class="projeto-textos">
            <div class="projeto-cabecalho">
                <h3 class="projeto-nome">${projeto.nome}</h3>
                <a class="projeto-link" href="${projeto.link}"
                    target="_blank">
                    <img src="assets/external-link.png"
                        alt="Link externo para o projeto">
                </a>
            </div>
            <p class="projeto-corpo">${projeto.descricao}
            </p>
        </div>
    </div>
    `
    ;
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'pt', includedLanguages: 'en,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

$(".translate-button").on('click', e =>{
    $("#google_translate_element").show();
    document.querySelector('.goog-te-gadget-simple').click();

})

$(document).on('scroll', e =>{
    $(".skiptranslate").is(":visible") ? 
    $("#google_translate_element").hide()  + $(".translate-button").hide() 
    : $(".translate-button").show();

})


if((navigator.language || navigator.browserLanguage || navigator.userLanguage) == "pt-BR"){
    $(".translate").hide()
}