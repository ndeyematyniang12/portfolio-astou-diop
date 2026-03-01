const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const searchInput = document.getElementById("search");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(productArray) {
    productList.innerHTML = "";

    productArray.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} FCFA</p>
            <button onclick="addToCart(${product.id})">Ajouter</button>
        `;

        productList.appendChild(div);
    });
}

function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price} FCFA
            <button onclick="removeFromCart(${index})">X</button>
        `;

        cartItems.appendChild(li);
    });

    totalDisplay.textContent = total;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function clearCart() {
    cart = [];
    renderCart();
}

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );
    renderProducts(filtered);
});

document.getElementById("clear").addEventListener("click", clearCart);
