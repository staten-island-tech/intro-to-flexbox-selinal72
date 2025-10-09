const items = [
  {
    name: "radish",
    seller: "chef mao",
    region: "teyvat",
    price: 350,
    img: "imgs/radish.webp",
  },
  {
    name: "snapdragon",
    seller: "chloris",
    region: "teyvat",
    price: 280,
    img: "imgs/snapdragon.webp",
  },
  {
    name: "lotus head",
    seller: "chef mao",
    region: "teyvat",
    price: 300,
    img: "imgs/lotushead.webp",
  },
  {
    name: "jueyun chili",
    seller: "chef mao",
    region: "liyue",
    price: 1000,
    img: "imgs/chili.webp",
  },
  {
    name: "qingxin",
    seller: "herbalist gui",
    region: "liyue",
    price: 600,
    img: "imgs/qingxin.webp",
  },
  {
    name: "horsetail",
    seller: "herbalist gui",
    region: "liyue",
    price: 240,
    img: "imgs/horsetail.webp",
  },
  {
    name: "violetgrass",
    seller: "herbalist gui",
    region: "liyue",
    price: 1000,
    img: "imgs/violetgrass.webp",
  },
  {
    name: "qingxin",
    seller: "chef mao",
    region: "teyvat",
    price: 300,
    img: "imgs/lotushead.webp",
  },
  {
    name: "matsutake",
    seller: "chef mao",
    region: "teyvat",
    price: 300,
    img: "imgs/matsutake.webp",
  },
  {
    name: "tofu",
    seller: "ms. bai",
    region: "teyvat",
    price: 120,
    img: "imgs/tofu.webp",
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
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <h2 class="card-header">${item.name}</h2>
      <img class="card-img" src="${item.img}"/>
      <h3 class="card-seller">${item.seller}/h3>
      <h3 class="card-region">${item.region}/h3>
      <h4 class="card-price">${item.price}</h4>
      <button type="button" class="button">buy now</button>
    </div>`
  );
}

/* function removeItem(event) {
  event.target.parentElement.remove();
} */

/* const button = document.querySelectorAll(".button");

function buy() {} */
