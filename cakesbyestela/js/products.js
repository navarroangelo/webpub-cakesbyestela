// PRODUCTS SCRIPTS FOR CAKES BY ESTELA
// PRODUCTS SCRIPTS FOR CAKES BY ESTELA
// PRODUCTS SCRIPTS FOR CAKES BY ESTELA
// PRODUCTS SCRIPTS FOR CAKES BY ESTELA
// PRODUCTS SCRIPTS FOR CAKES BY ESTELA
document.addEventListener("DOMContentLoaded", () => {
  const totalCell = document.querySelector("#total");
  totalCell.style.display = "none";

  const checkoutButton = document.querySelector("#checkout");
  checkoutButton.style.display = "none";

  const cartTable = document.querySelector("#cbeCart");
  cartTable.style.display = "none";

  // LOADING THE PRODUCTS
  async function loadProducts() {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const products = await response.json();

      const productList = document.getElementById("productList");
      productList.innerHTML = "";

      products.forEach((product, index) => {
        const productHTML = `
          <div class="col-lg-4 col-sm-6 mb-4 product-item" data-name="${product.name}" data-price="${product.price}">
            <div class="portfolio-item">
              <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${product.id}">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-medal fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/${product.id}.jpg" alt="${product.name}" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">${product.name}</div>
                <div class="portfolio-caption-subheading text-muted">${product.description}</div>
                <h5>P${product.price}</h5>
                <div class="product-actions">
                  <div class="quantity-selector">
                    <label for="quanSelect${product.id}" class="quanLabel">Quantity:</label>
                    <select class="form-select" id="quanSelect${product.id}">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <button class="btn btn-primary add-to-cart" data-id="${product.id}">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>`;

        productList.insertAdjacentHTML("beforeend", productHTML);
      });

      setupAddToCartButtons();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  function updateGrossTotal() {
    const cartTableBody = document.querySelector("#cbeCart tbody");
    const totalCell = document.querySelector("#total");
    let grossTotal = 0;

    const productRows = cartTableBody.querySelectorAll("tr");
    productRows.forEach((row) => {
      const totalPriceCell = row.querySelector(".cart-total");
      const totalPrice = parseFloat(
        totalPriceCell.textContent.replace("P", "")
      );
      grossTotal += totalPrice;
    });

    totalCell.textContent = `TOTAL: P${grossTotal.toFixed(2)}`;
  }

  function addToCart(productName, quantity, pricePerUnit) {
    const cartTableBody = document.querySelector("#cbeCart tbody");
    const existingProductRow = cartTableBody.querySelector(
      `tr[data-name="${productName}"]`
    );

    const cartTable = document.querySelector("#cbeCart");
    cartTable.style.display = "";
    const totalCell = document.querySelector("#total");
    totalCell.style.display = "";
    const checkoutButton = document.querySelector("#checkout");
    checkoutButton.style.display = "";

    if (existingProductRow) {
      const quantityCell = existingProductRow.querySelector(".cart-quantity");
      const totalPriceCell = existingProductRow.querySelector(".cart-total");

      let currentQuantity = parseInt(quantityCell.textContent);
      let newQuantity = currentQuantity + parseInt(quantity);
      let newTotalPrice = newQuantity * pricePerUnit;

      quantityCell.textContent = newQuantity;
      totalPriceCell.textContent = `P${newTotalPrice.toFixed(2)}`;
    } else {
      const newRow = document.createElement("tr");
      newRow.setAttribute("data-name", productName);

      newRow.innerHTML = `
        <td>${productName}</td>
        <td class="cart-quantity">${quantity}</td>
        <td>P${pricePerUnit.toFixed(2)}</td>
        <td class="cart-total">P${(quantity * pricePerUnit).toFixed(2)}</td>
      `;

      cartTableBody.appendChild(newRow);
    }

    updateGrossTotal();
  }

  function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productItem = this.closest(".product-item");
        const productName = productItem.getAttribute("data-name");
        const pricePerUnit = parseFloat(productItem.getAttribute("data-price"));
        const quantitySelector = productItem.querySelector("select");
        const quantity = parseInt(quantitySelector.value);

        addToCart(productName, quantity, pricePerUnit);
      });
    });
  }

  loadProducts();
});

// CHECKOUT BUTTON
document.addEventListener("DOMContentLoaded", () => {
  const checkoutButton = document.querySelector("#checkout");
  checkoutButton.addEventListener("click", function () {
    alert("Thank you for shopping with us!");
    const cartTableBody = document.querySelector("#cbeCart tbody");
    cartTableBody.innerHTML = "";
    const cartTable = document.querySelector("#cbeCart");
    cartTable.style.display = "none";
    const totalCell = document.querySelector("#total");
    totalCell.style.display = "none";
  });
});
