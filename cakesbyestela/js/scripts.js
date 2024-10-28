// MAIN SCRIPTS FOR CAKES BY ESTELA
// MAIN SCRIPTS FOR CAKES BY ESTELA
// MAIN SCRIPTS FOR CAKES BY ESTELA
// MAIN SCRIPTS FOR CAKES BY ESTELA
// MAIN SCRIPTS FOR CAKES BY ESTELA
window.addEventListener("DOMContentLoaded", (event) => {
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  navbarShrink();

  document.addEventListener("scroll", navbarShrink);

  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// CAKE SORTING
document.addEventListener("DOMContentLoaded", function () {
  const sortSelect = document.getElementById("sortSelect");
  const productList = document.getElementById("productList");

  function sortProducts(criteria) {
    const products = Array.from(
      productList.getElementsByClassName("product-item")
    );

    products.sort((a, b) => {
      const aName = a.dataset.name.toLowerCase();
      const bName = b.dataset.name.toLowerCase();
      const aPrice = parseInt(a.dataset.price);
      const bPrice = parseInt(b.dataset.price);

      if (criteria === "name") {
        return aName.localeCompare(bName);
      } else if (criteria === "price") {
        return aPrice - bPrice;
      } else {
        return 0;
      }
    });

    productList.innerHTML = "";

    products.forEach((product) => productList.appendChild(product));
  }

  sortSelect.addEventListener("change", function () {
    sortProducts(this.value);
  });
});

// FORM SUBMISSION
document
  .querySelector(".form-box")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formFields = this.querySelectorAll("input, textarea, select");
    let allFilled = true;

    formFields.forEach((field) => {
      if (!field.value.trim()) {
        allFilled = false;
      }
    });

    const preferredCommunication = document.querySelector(
      'input[name="preferredCommunication"]:checked'
    );

    if (allFilled && preferredCommunication) {
      if (preferredCommunication.value === "email") {
        window.location.href = "em.html";
      } else if (preferredCommunication.value === "socialMedia") {
        window.location.href = "smm.html";
      }
    } else {
      alert(
        "Please fill in all fields and select a preferred communication method before submitting."
      );
    }

    this.reset();
  });
