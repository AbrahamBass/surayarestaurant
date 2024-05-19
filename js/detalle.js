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

    let bag = localStorage.getItem('bag')
    if(bag){
      let parce = JSON.parse(bag)
      parce.forEach((item) => {
        if(item.titulo == titulo){
          const btnAddFood = document.getElementById("btn-add-food")
          btnAddFood.textContent = "Añadido a la Bolsa"
        }
      })
    }

  });

const btnAdd = document.getElementById("btn-add-food")

btnAdd.addEventListener("click", () => {
  let user = localStorage.getItem('user')
  if(!user){
    alert("No puedes añadir un producto, sin iniciar sesion:(")
  }else{
    if(btnAdd.textContent !== 'Añadido a la Bolsa'){
      const params = new URLSearchParams(window.location.search);

      const img = params.get('img');
      const precio = params.get('precio');
      const titulo = params.get('titulo');
      const descripcion = params.get('descripcion');

      const data = {
        img,
        precio,
        titulo,
        descripcion
      }

      let bag = localStorage.getItem('bag')

      if(bag){
        let array = JSON.parse(bag)
        array = [...array, data]
        localStorage.setItem('bag', JSON.stringify(array))
        location.reload();
      }
    }else{
      alert("Ya existe en la Bolsa el producto:)")
    }
  }
})