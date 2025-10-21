const items = [
  {
    name: "chenyu adeptea",
    seller: "fengtai",
    region: "chenyu vale",
    price: 240,
    img: "imgs/adeptea.webp",
    alt: "chenyu adeptea",
  },
  {
    name: "almond",
    seller: "dongsheng",
    region: "teyvat",
    price: 120,
    img: "imgs/almond.webp",
    alt: "almond",
  },
  {
    name: "bamboo shoot",
    seller: "chef mao",
    region: "liyue",
    price: 240,
    img: "imgs/bamboo.webp",
    alt: "bamboo shoot",
  },
  {
    name: "jueyun chili",
    seller: "chef mao",
    region: "liyue",
    price: 1000,
    img: "imgs/chili.webp",
    alt: "jueyun chili",
  },
  {
    name: "clearwater jade",
    seller: "fengtai",
    region: "chenyu vale",
    price: 1000,
    img: "imgs/clearwaterjade.webp",
    alt: "clearwater jade",
  },
  {
    name: "cor lapis",
    seller: "fengtai",
    region: "liyue",
    price: 1000,
    img: "imgs/corlapis.webp",
    alt: "cor lapis",
  },
  {
    name: "glaze lily",
    seller: "ms. bai",
    region: "liyue",
    price: 50000,
    img: "imgs/glazelily.webp",
    alt: "glaze lily",
  },
  {
    name: "horsetail",
    seller: "herbalist gui",
    region: "liyue",
    price: 240,
    img: "imgs/horsetail.webp",
    alt: "horsetail",
  },
  {
    name: "noctilucous jade",
    seller: "fengtai",
    region: "liyue",
    price: 1000,
    img: "imgs/jade.webp",
    alt: "noctilucous jade",
  },
  {
    name: "lotus head",
    seller: "chef mao",
    region: "teyvat",
    price: 300,
    img: "imgs/lotushead.webp",
    alt: "lotus head",
  },
  {
    name: "matsutake",
    seller: "chef mao",
    region: "teyvat",
    price: 300,
    img: "imgs/matsutake.webp",
    alt: "matsutake",
  },
  {
    name: "qingxin",
    seller: "herbalist gui",
    region: "liyue",
    price: 600,
    img: "imgs/qingxin.webp",
    alt: "qingxin",
  },
  {
    name: "radish",
    seller: "chef mao",
    region: "teyvat",
    price: 350,
    img: "imgs/radish.webp",
  },
  {
    name: "rice",
    seller: "dongsheng",
    region: "liyue",
    price: 100,
    img: "imgs/rice.webp",
    alt: "rice",
  },
  {
    name: "shrimp",
    seller: "dongsheng",
    region: "liyue",
    price: 120,
    img: "imgs/shrimp.webp",
    alt: "shrimp",
  },
  {
    name: "silk flower",
    seller: "fengtai",
    region: "liyue",
    price: 1000,
    img: "imgs/silkflower.webp",
    alt: "silk flower",
  },
  {
    name: "snapdragon",
    seller: "chloris",
    region: "teyvat",
    price: 280,
    img: "imgs/snapdragon.webp",
  },
  {
    name: "starconch",
    seller: "bolai",
    region: "liyue",
    price: 1000,
    img: "imgs/starconch.webp",
    alt: "starconch",
  },
  {
    name: "tofu",
    seller: "dongsheng",
    region: "teyvat",
    price: 100,
    img: "imgs/tofu.webp",
    alt: "tofu",
  },
  {
    name: "violetgrass",
    seller: "herbalist gui",
    region: "liyue",
    price: 1000,
    img: "imgs/violetgrass.webp",
    alt: "violetgrass",
  },
];

const DOMSelectors = {
  name: document.getElementById("name"),
  seller: document.getElementById("seller"),
  region: document.getElementById("region"),
  price: document.getElementById("price"),
  img: document.getElementById("img"),
  display: document.getElementById("display"),
};

/* document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let item = {
    name: document.getElementById("name").value,
    seller: document.getElementById("seller").value,
    region: document.getElementById("region").value,
    price: document.getElementById("price").value,
    img: document.getElementById("img").value,
  };
  inject(item); // add to the page
  clearFields(); // reset form inputs
}); */

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${item.name} data-category=${item.region} data-price=${item.price}>
      <h2 class="card-header">${item.name}</h2>
      <img class="card-img" src="${item.img}" alt="${item.alt}/>
      <h3 class="card-seller">${item.seller}</h3>
      <h3 class="card-region">${item.region}</h3>
      <h4 class="card-price">${item.price} mora</h4>
      <button type="button" class="buy-button">add to cart</button>
    </div>`
  );
}
/* inject(items[0]); */
items.forEach((item) => inject(item));

function injectCart() {
  document.querySelector(".container").insertAdjacentHTML(
    "afterbegin",
    `<div class="cart-container">
    <h1>cart</h1>
    <div class="list-container"></div>
  </div>`
  );
}

injectCart();

/* function getCards() {
  const buttons = document.querySelectorAll(".buy-button");
  //not needed unless we want filter etc.
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      console.log(
        event.target.closest(".card").getAttribute("data-title"),
        "added to cart"
        event.target.textContent
      );
    })
  );
}
getCards(); */

const cart = [];
const buttons = document.querySelectorAll(".buy-button");
const btnArr = Array.from(buttons);

function logCart(product) {
  document
    .querySelector(".list-container")
    .insertAdjacentHTML("afterbegin", `<li>${product}</li>`);
}

function getCards() {
  //not needed unless we want filter etc.
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      /* console.log("clicked"); */

      cart.push([
        event.target.closest(".card").getAttribute("data-title"),
        event.target.closest(".card").getAttribute("data-price"),
      ]);
      /* cart.push(event.target.closest(".card").getAttribute("data-title")); */
      /* return cart; */
      cart.forEach((product) => logCart(product));
      /* console.log(
        event.target.closest(".card").getAttribute("data-title"),
        "added to cart",
        event.target.textContent
      ); */
    })
  );
  /* document.querySelector(".cart").textContent = `testing`; */
}
getCards();

/* function carting(product) {
  document.querySelector(".container").insertAdjacentHTML("afterbegin", `<h1 class="cart">test</h1>`);
} */

/* cart.forEach((product) => carting(product)); */

//make array
//put cards on screen with js
//make the cart w html, js
//add to cart button

/* function removeItem(event) {
  event.target.parentElement.remove();
} */

/* const button = document.querySelectorAll(".button");

function buy() {} */

/* const books = [];

function filterByGenre(genre) {
  let display = document.querySelector("#card-display");
  display.innerHTML = "";
  const filteredBooks = books.filter((book)=> book.genre === genre);
  filteredBooks.forEach((book)=>
    display.insertAdjacentHTML(
      // html
    )
  );
} */

/* function filterByGenre(genre){
  const cards = document.querySelectorAll(".book-card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-genre");
    if(cardCategory === genre || cardCategory === "all"){
      card.style.display = "block"; // could be block or flex or nothing (contexual!!)
    } else {
      card.style.display = "none";
    }
  })
}

filterByGenre("Mystery"); */
