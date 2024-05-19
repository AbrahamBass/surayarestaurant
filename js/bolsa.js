const btn = document.getElementById("btn-siguiente");
const btnClose = document.getElementById("icon-close");

let totalNav = 0;

document.addEventListener("DOMContentLoaded", () => {
    const containerRender = document.getElementById("container-foods");
    const total = document.getElementById("total");

    let bag = localStorage.getItem('bag');
    if (bag) {
        let array = JSON.parse(bag);
        if (array.length > 0) {
            let tl = 0;
            array.forEach((item, index) => {
                const divFood = document.createElement("div");
                divFood.className = "container-food-single";

                const h2 = document.createElement("h2");
                h2.textContent = item.titulo;
                h2.className = "titulo-food";

                divFood.appendChild(h2);

                const h2Price = document.createElement("h2");
                h2Price.textContent = item.precio;
                h2Price.className = "titulo-food";

                const img = document.createElement("img");
                img.src = "../img/svg/trash.svg";
                img.style.height = "30px";
                img.style.cursor = "pointer";

                // Add event listener to delete the item
                img.addEventListener("click", () => {
                    array.splice(index, 1); // Remove the item from the array
                    localStorage.setItem('bag', JSON.stringify(array)); // Update localStorage
                    containerRender.removeChild(divFood); // Remove the div from DOM
                    updateTotal(); // Recalculate the total
                });

                const divFoodPrice = document.createElement("div");
                divFoodPrice.className = "container-price-food";

                divFoodPrice.appendChild(h2Price);
                divFoodPrice.appendChild(img);

                divFood.appendChild(divFoodPrice);

                containerRender.appendChild(divFood);

                let cleanString = item.precio.replace(/\./g, '');
                tl += parseFloat(cleanString);
                totalNav += parseFloat(cleanString);
            });
            total.textContent = `$ ${tl}`;
        } else {
            addNoProductsMessage(containerRender);
        }
    } else {
        addNoProductsMessage(containerRender);
    }
});

btn.addEventListener("click", () => {
    let bag = localStorage.getItem('bag');
    if (bag) {
        let array = JSON.parse(bag);
        if (array.length > 0) {
            const urlParams = new URLSearchParams({
                total: totalNav
            });
            window.location.href = `pago.html?${urlParams.toString()}`;
        } else {
            alert("No puedes continuar, porque no tienes productos agregados.");
        }
    } else {
        alert("No te has registra/iniciado para poder continuar.");
    }
});

btnClose.addEventListener("click", () => {
    window.location.href = "../index.html";
});

function updateTotal() {
    const containerRender = document.getElementById("container-foods");
    const total = document.getElementById("total");
    let bag = localStorage.getItem('bag');
    if (bag) {
        let array = JSON.parse(bag);
        let tl = 0;
        array.forEach((item) => {
            let cleanString = item.precio.replace(/\./g, '');
            tl += parseFloat(cleanString);
        });
        total.textContent = `$ ${tl}`;
        totalNav = tl;

        if (array.length === 0) {
            addNoProductsMessage(containerRender);
        }
    } else {
        total.textContent = "$ 0";
        totalNav = 0;
        addNoProductsMessage(containerRender);
    }
}

function addNoProductsMessage(container) {
    container.innerHTML = ''; // Clear the container
    const h2 = document.createElement("h2");
    h2.textContent = "Sin Productos";
    h2.className = "titulo-total";
    container.appendChild(h2);
}
