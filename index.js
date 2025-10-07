const DOMSelectors = {
  name: document.getElementById("name"),
  price: document.getElementById("price"),
  img: document.getElementById("img"),
  display: document.getElementById("display"),
};

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let item = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    img: document.getElementById("img").value,
  };
  inject(item); // add to the page
  clearFields(); // reset form inputs
});

function inject(item) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img class="display-img" src="${album.url}"/>
      <h2 class="display-artist">${album.artist}</h2>
      <h3 class="display-album">${album.title}</h3>
      <button class="remove btn">Remove Album</button>
    </div>`
  );
}

/* const button = document.querySelectorAll(".button");

function buy() {} */
