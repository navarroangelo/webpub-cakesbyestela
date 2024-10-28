// CREATING A NEW CUSTOMER JS FOR CAKES BY ESTELA
// CREATING A NEW CUSTOMER JS FOR CAKES BY ESTELA
// CREATING A NEW CUSTOMER JS FOR CAKES BY ESTELA
// CREATING A NEW CUSTOMER JS FOR CAKES BY ESTELA
// CREATING A NEW CUSTOMER JS FOR CAKES BY ESTELA
document
  .querySelector("#customerForm form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const customerData = {
      name: document.querySelector("#customerName").value,
      email: document.querySelector("#customerEmail").value,
      phone: document.querySelector("#customerPhone").value,
      address: document.querySelector("#customerAddress").value,
    };

    fetch("http://localhost:5000/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    })
      .then((response) => response.text())
      .then(() => {
        window.location.href = "customers.html";
      })
      .catch((error) => console.error("Error:", error));
  });
