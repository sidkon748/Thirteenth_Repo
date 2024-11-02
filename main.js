//Task 2
//Fetch Products from the API Using Fetch and Promises
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Call the function to display products
        displayProducts(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
