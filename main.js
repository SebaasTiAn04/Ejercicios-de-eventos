//1

/* 
const form = document.forms[0];

let centimetros = document.querySelector(".centimetros");
let kilogramos = document.querySelector(".kilogramos");
let resultado = document.getElementById("resultado")

let estatura = form[2].value;

form.addEventListener("submit", (e) =>{
    let estatura = (centimetros.value / 100) * (centimetros.value/ 100);
    let peso = kilogramos.value;
    e.preventDefault();
    resultado.value = peso / estatura;
}) */

//-----------------------------------------------------------------------------------
//2
/* 
let peso = document.querySelector(".peso");
let dolar = document.querySelector(".dolar");

peso.addEventListener("keyup", ()=>{
    dolar.value = peso.value /140;
})

dolar.addEventListener("keyup", () =>{
    peso.value = dolar.value * 140;
}) */



//-----------------------------------------------------------------------------------
//3


let notas = [
    {
        id: 1,
        titulo: "sacar la basura",
        texto: "mi mama me va a retar si no lo hago",
        realizada: false
    },
    {
        id: 2,
        titulo: "Limpiar la casa",
        texto: "Terminar en 1 hora",
        realizada: false
    },
    {
        id: 3,
        titulo: "Comprar leche",
        texto: "antes de las 21:00 p.m",
        realizada: false
    }
];

let idGlobal = (notas.length-1).id;

let $div = document.querySelector(".contenedor");
let $main = document.querySelector("main");
let $titulo = document.getElementById('titulo')
let $nota = document.getElementById('nota')
let $guardar = document.getElementById('guardar')


function crearNota(){
    $div.classList.add("bg-warning", "col-10")
    const form = document.createElement("form")
    form.classList.add("d-flex")
    form.innerHTML = `
            <div class="mb-4 col-9">
                <fieldset class="mb-4 col-12">
                    <h3>Nueva nota</h3>
                    <input type="text" class="form-control" placeholder="Titulo" id="titulo" >
                    </fieldset>

                    <fieldset class="mb-4 col-12">
                    <textarea class="form-control" id="nota" placeholder="Escriba su nota aqui" rows="7"></textarea>
                    </fieldset>
            </div>
            <div class="mb-4 col-3 d-flex flex-column justify-content-end">
                <input class="bg-success m-2" type="submit" value="Guardar" id="guardar" class="p-2 m-3 float-end">
                <input class="bg-danger m-2"  type="submit" value="Borrar" class="p-2 m-3 float-end">
            </div>
    `
    $div.appendChild(form)
    $main.appendChild($div);
}
    
crearNota()

function agregarNota(ti, te){
    const nota = {
        titulo: ti,
        texto: te,
        realizada: false
    }
    notas.push(nota);
    const containerNota = document.createElement("div")
    containerNota.classList.add("d-flex" ,"bg-primary", "col-4")
    containerNota.innerHTML = `
                                    <h2>${ti}</h2>
                                    <p>${te}</p>
                            `
    $main.appendChild(containerNota);
}

$guardar.addEventListener("submit", (e) =>{
    guardar()
})

console.log(notas)
function guardar(){
    if($titulo != undefined){
        if($nota != undefined){
            agregarNota($titulo, $nota);
        }
    }
}


