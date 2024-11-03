//Task 2
//Fetch Products from the API Using Fetch and Promises
const container = document.getElementById('container');

fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        displayError('Failed to load products. Please try again later.');
    });

//Task 3
//Function to display Product Details Dynamically
function displayProducts(products) {
    products.forEach(product => {
        const productElement = document.createElement('section');
        productElement.classList.add('product');

        const formattedPrice = product.price.toFixed(2);
        const imageUrl = product.image; 

        productElement.innerHTML = `
        <img src="${imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Company: ${product.company}</p>
        <p>Price: $${formattedPrice}</p>`;

        container.appendChild(productElement);
    });
}

//Task 4
//Handle Errors Gracefully
function displayError(message) {
    const errorElement = document.createElement('section');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    container.appendChild(errorElement);
}