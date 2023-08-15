const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];
// Traer el DOM
const form = document.getElementById("container");
const numberInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results");
// ------------------------------------------------------ //

// Funcion para que la busqueda del Input sirva.
const buscadorPizza = () => {
  const inputValue = parseInt(numberInput.value);

  // Encontrar y Buscar las pizzas por sus respectivos ID's.
  const encontrarPizza = pizzas.find((pizza) => {
    return pizza.id === inputValue;
  });

  // Limpio resultados para que no se pisen entre si.
  resultsContainer.innerHTML = "";

  if (encontrarPizza) {
    const pizzaDiv = document.createElement("div");
    pizzaDiv.classList.add("pizza");

    const nombrePizza = document.createElement("h2");
    nombrePizza.textContent = encontrarPizza.nombre;

    const ingredientes = document.createElement("p");
    ingredientes.textContent = `Los ingredientes de esta pizza son: ${encontrarPizza.ingredientes}.`;

    const precio = document.createElement("p");
    precio.textContent = `El precio de la pizza es de $${encontrarPizza.precio}.`;

    const id = document.createElement("p");
    id.textContent = `El numero identificador de esta pizza es el ${encontrarPizza.id}`;

    const imagen = document.createElement("img");
    imagen.src = encontrarPizza.imagen;
    imagen.alt = encontrarPizza.nombre.alt;

    pizzaDiv.appendChild(nombrePizza);
    pizzaDiv.appendChild(imagen);
    pizzaDiv.appendChild(precio);
    pizzaDiv.appendChild(ingredientes);
    pizzaDiv.appendChild(id);

    resultsContainer.appendChild(pizzaDiv);
  } else {
    resultsContainer.textContent = "No se pudo encontrar ninguna Pizza..";
  }
  saveLocalStorage(encontrarPizza);
};

// Guardar en el LS (Local Storage)
const saveLocalStorage = (encontrarPizza) => {
  localStorage.setItem("pizzas", JSON.stringify(encontrarPizza));
};

let encontrarPizzas = JSON.parse(localStorage.getItem("pizza"));

// Funcion inicilizadora. Aca estan los listeners.
const init = () => {
  searchBtn.addEventListener("click", buscadorPizza);
};

init();
