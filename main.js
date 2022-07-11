// Evaluacion a proveedores de acuerdo a 3 calificaciones. Puntualidad / Calidad / Cantidad
// Nota > 95% => Aprobado
// Nota 90 > 95% => Condicional
// Nota < 90% => Suspendido

let proveedor = prompt("Cual es el nombre del proveedor");
    alert(`Cargue los datos del:  ${proveedor}`);

let piezasPedidas = parseInt(prompt("Cantidad de piezas pedidas"));
let piezasEntregadas = parseInt(prompt("Cantidad de piezas entregadas"));
let piezasAprobadas = parseInt(prompt("Cantidad de piezas sin defectos"));
let puntialidad = prompt("Entrego en fecha programada si o no?");


function cantidad(piezasEntregadas, piezasPedidas) {
    let cantidad = piezasPedidas / piezasEntregadas;
    console.log(cantidad);
    return resultado1 
}

function calidad(piezasEntregadas, piezasAprobadas) {
    let calidad = piezasAprobadas / piezasEntregadas;
    console.log(calidad);
    return resultado2 
}

function puntual() {
    if (entregaPuntual = si) {0.10}
    else {0.70}
    return resultado3 
}

function evaluacion(resultado1*resultado2*resultado3*100) {
    if (evaluacion < 90) {alert("el proveedor debe ser suspendido")}
    else if (evaluacion > 95) {alert("el proveedor es condicional")}
    else if (evaluacion < 95) {alert("el proveedor esta aprobado")}
}





