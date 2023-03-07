const robotron = document.querySelector('#robotron');   

robotron.addEventListener("click", (evento) => {
    console.log(evento);
});

function dizOi(nome) {
    console.log(nome);
    console.log("Bemvindo ao Robotron");
}

dizOi("Pedro")


// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
// const braco = document.querySelector("#braco");

// const controle = document.querySelectorAll(".controle-ajuste");
const controle = document.querySelectorAll("[data-controle]");


controle.forEach( (element) => {
    element.addEventListener("click", (event) => {
        // console.log(event.target);
        // console.log(event);
        // console.log(event.target.textContent);
        // manipulaDados(event.target.textContent, event.target.parentNode);
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatisticas(event.target.dataset.controle, event.target.dataset.peca);
    })
});


// somar.addEventListener("click", () => {
//     manipulaDados("somar");
// })

// subtrair.addEventListener("click", () => { 
//     manipulaDados("subtrair"); 
// })

function manipulaDados(operacao, controle) {
    // const peca = controle.querySelector(".controle-contador")
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}



const estatisticas = document.querySelectorAll("[data-estatistica]");
// console.log(estatisticas);

function atualizaEstatisticas(operacao, peca) {
    // console.log(pecas[peca]);

    estatisticas.forEach(element => {
        // console.log(element.dataset.estatistica)
        // console.log(element.textContent)
        const estatistica = element.dataset.estatistica;
        console.log(estatistica);
        const estatistiCurrentValue = parseInt(element.textContent);
        console.log(estatistiCurrentValue);
        const estatisticaUpdateValue = pecas[peca][estatistica];
        console.log(estatisticaUpdateValue);
        console.log(operacao);
        if (operacao === "+") {
            element.textContent = estatistiCurrentValue + estatisticaUpdateValue;
        } else {
            element.textContent = estatistiCurrentValue - estatisticaUpdateValue;
        }
        // console.log(pecas[peca][estatistica] )
    });
}


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
