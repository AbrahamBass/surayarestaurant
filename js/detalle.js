document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const img = params.get('img');
    const precio = params.get('precio');
    const titulo = params.get('titulo');
    const descripcion = params.get('descripcion');

    const divImg = document.getElementById("container-img")
    const titleFood = document.getElementById("title-food")
    const priceFood = document.getElementById("price-food")
    const descriptionFood = document.getElementById("description-food")

    priceFood.textContent = `$ ${precio}`
    titleFood.textContent = titulo
    descriptionFood.textContent = descripcion

    const tagImg = document.createElement("img")
    tagImg.className = "img-food-single"
    tagImg.src = img

    divImg.appendChild(tagImg)

  });