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
        descricao: "Simple game based on guess a number using logic.",
        preview: "https://shots.codepen.io/cauamp/pen/eYjPpYN-512.webp?version=1675336753",
        link: "https://codepen.io/cauamp/full/BaPqQLw"
    },
    {
        nome: "Conversor de temperataura",
        descricao: "Tool to convert temperature between Kelvin, Celsius and Fahrenheit measurement systems.",
        preview: "https://shots.codepen.io/cauamp/pen/Yzjjmzo-512.webp?version=1675610017",
        link: "https://codepen.io/cauamp/full/Yzjjmzo",
    },
    {
        nome: "Alura Flix",
        descricao: "Simulated movies catalog that allows user modifications.",
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