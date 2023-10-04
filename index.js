const searchInput = document.getElementById('search-input');
const searchResultsList = document.getElementById('search-results-list');

// Define your product data (you can use your actual product data here)
const products = [
    {
        id: 1,
        name: 'Hoodie',
        category: 'Men',
    },
    {
        id: 2,
        name: 'Jacket',
        category: 'Men',
    },
    {
        id: 3,
        name: 'Dress',
        category: 'Women',
    },
    // Add more products...
];

// Function to perform a search and display results
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const searchResults = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    );

    // Clear previous search results
    searchResultsList.innerHTML = '';

    // Display search results
    searchResults.forEach((result) => {
        const listItem = document.createElement('li');
        listItem.textContent = result.name;
        searchResultsList.appendChild(listItem);
    });
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', performSearch);

// Event listener for the search input (for real-time search)
searchInput.addEventListener('input', performSearch);