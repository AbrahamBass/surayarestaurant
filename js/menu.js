const Hamburguesa = "../json/hamburguesa.json";
const HotDog = "../json/hotDog.json";
const Pollo = "../json/pollo.json";
const Bebida = "../json/bebidas.json";
const Postre = "../json/postres.json";
const Ensalada = "../json/ensaladas.json";
const Desayunos = "../json/desayunos.json";
const Pizza = "../json/pizzas.json";
const Nachos = "../json/nachos.json";

const container_foods = document.getElementById("session-foods");
const titleNavItems = document.querySelectorAll(".title-nav-food");
const containersItemsFood = document.querySelectorAll(".single-container-food");

const render = (item) => {
  const container_food = document.createElement("div");

  const title_price_food = document.createElement("p");
  title_price_food.className = "dollar";
  title_price_food.innerText = `$ ${item.precio}`;

  const img_food = document.createElement("img");
  img_food.className = "img-food";
  img_food.src = item.img;

  container_food.appendChild(img_food);
  container_food.appendChild(title_price_food);

  container_foods.appendChild(container_food);

  container_food.addEventListener("click", () => {
    const urlParams = new URLSearchParams({
      img: item.img,
      precio: item.precio,
      titulo: item.titulo,
      descripcion: item.descripcion
    });
    window.location.href = `detalle.html?${urlParams.toString()}`;
  });
};

const path = async (url) => {
  container_foods.innerHTML = "";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((item) => {
        render(item);
      });
    });
};

const setActiveNavItem = (clickedItem) => {
  titleNavItems.forEach((item) => {
    item.classList.remove("active");
  });

  clickedItem.classList.add("active");
};

titleNavItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickedItem = event.target;
    setActiveNavItem(clickedItem);

    switch (clickedItem.textContent) {
      case "Hamburguesas":
        path(Hamburguesa);
        break;
      case "Hot Dog":
        path(HotDog);
        break;
      case "Pollos":
        path(Pollo);
        break;
      case "Bebidas":
        path(Bebida);
        break;
      case "Postres":
        path(Postre);
        break;
      case "Ensaladas":
        path(Ensalada);
        break;
      case "Desayunos":
        path(Desayunos);
        break;
      case "Pizzas":
        path(Pizza);
        break;
      case "Nachos":
        path(Nachos);
        break;
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  fetch(Hamburguesa)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((item) => {
        render(item);
      });
    });
});
