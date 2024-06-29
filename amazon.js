
document.addEventListener('DOMContentLoaded', () => {
    const account = document.getElementById('account');
    const accountDropdown = document.getElementById('account-dropdown');
    const cartCount = document.getElementById('cart-count');

    account.addEventListener('click', () => {
        accountDropdown.style.display = accountDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!account.contains(event.target)) {
            accountDropdown.style.display = 'none';
        }
    });

    const searchButton = document.querySelector('.searchbar button');
    searchButton.addEventListener('click', () => {
        const searchInput = document.querySelector('.searchbar input').value;
        alert(`You searched for: ${searchInput}`);
    });

    // Example of updating cart count
    const updateCartCount = () => {
        let count = parseInt(cartCount.textContent);
        count += 1;
        cartCount.textContent = count;
    };

    // Simulate adding an item to the cart
    document.querySelector('.fa-shopping-cart').addEventListener('click', updateCartCount);
});
