const enviar = document.getElementById("enviar")
const btnClose = document.getElementById("icon-close")

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const total = params.get('total');

    const totalh2 = document.getElementById("total")
    totalh2.textContent = `$ ${total}`
});

enviar.addEventListener("click", () => {
    const ciudad = document.getElementById("ciudad").value
    const direccion = document.getElementById("direccion").value

    if(!ciudad && !direccion){
        alert("Los datos de envios deben estar llenos.")
    }else{
        alert("El pedido se envio correctamente a la direccion de entrega. pronto llegara su pedido.")
        localStorage.removeItem("bag")
        localStorage.setItem('bag', '[]')
        window.location.href = `../index.html`;
    }


})

btnClose.addEventListener("click", () => {
    window.location.href = "../index.html"
})
