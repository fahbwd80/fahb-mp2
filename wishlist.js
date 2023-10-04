// Get references to the HTML elements
const addProductButton = document.getElementById('add-button');
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const wishlist = document.querySelector('.wishlist');

// Function to add a product to the wishlist
function addProduct() {
    const productName = productNameInput.value;
    const productPrice = productPriceInput.value;

    if (productName && productPrice) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="product1.jpg" alt="${productName}">
            <h2>${productName}</h2>
            <p>Price: $${productPrice}</p>
            <button class="remove-button">Remove</button>
        `;

        wishlist.appendChild(productDiv);

        // Clear input fields
        productNameInput.value = '';
        productPriceInput.value = '';

        // Add event listener to the remove button
        const removeButton = productDiv.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            wishlist.removeChild(productDiv);
        });
    }
}

// Add event listener to the "Add to Wishlist" button
addProductButton.addEventListener('click', addProduct);

function removeProduct(productId) {
    // Find the product element by its ID
    var product = document.getElementById(productId);
    
    // Remove the product element from the wishlist
    if (product) {
        product.remove();
    }
}