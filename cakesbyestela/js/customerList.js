// LIST OF CUSTOMERS JS FOR CAKES BY ESTELA
// LIST OF CUSTOMERS JS FOR CAKES BY ESTELA
// LIST OF CUSTOMERS JS FOR CAKES BY ESTELA
// LIST OF CUSTOMERS JS FOR CAKES BY ESTELA
// LIST OF CUSTOMERS JS FOR CAKES BY ESTELA
document.addEventListener("DOMContentLoaded", function () {
  const customerListContainer = document.querySelector(
    ".customer-list-content"
  );
  const searchInput = document.getElementById("customerSearch");

  async function loadCustomers() {
    try {
      const response = await fetch("http://localhost:5000/api/customers");
      const customers = await response.json();
      renderCustomers(customers);

      searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredCustomers = customers.filter((customer) =>
          customer.name.toLowerCase().includes(query)
        );
        renderCustomers(filteredCustomers);
      });
    } catch (error) {
      console.error("Error loading customers:", error);
    }
  }

  function renderCustomers(customersArray) {
    customerListContainer.innerHTML = "";
    if (customersArray.length === 0) {
      customerListContainer.innerHTML = "<p>No matches found.</p>";
      return;
    }
    customersArray.forEach((customer) => {
      const customerDiv = document.createElement("div");
      customerDiv.className = "customer-item";
      customerDiv.innerHTML = `
                <h3>${customer.name}</h3>
                <p>Email: ${customer.email}</p>
                <p>Phone: ${customer.phone}</p>
                <p>Address: ${customer.address}</p>
            `;
      customerListContainer.appendChild(customerDiv);
    });
  }

  loadCustomers();
});
