<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon Clone</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="amazon.css">
</head>
<body>
    <header>
        <div class="navbar">
            <div class="navlogo border">
                <div class="logo">
                    <img src="pics/2.jpg" alt="Amazon Logo" />
                </div>
            </div>
            <div class="navaddress border">
                <p>Deliver to</p>
                <div class="addicon">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Pakistan</p>
                </div>
            </div>
            
            <div class="searchbar">
                <select>
                    <option>All</option>
                    <option>Books</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Home & Kitchen</option>
                </select>
                <input type="text" placeholder="Search Amazon">
                <button><i class="fa fa-search"></i></button>
                <select class="options">
                    <option>Urdu</option>
                    <option>English</option>
                    <option>Sindhi</option>
                    <option>Pashto</option>
                </select>
            </div>
            <div class="navitems">
                <div class="navitem border" id="account">
                    <p>Hello, Sign in</p>
                    <p>Account & Lists <i class="fa fa-caret-down"></i></p>
                    <div class="dropdown" id="account-dropdown">
                        <p>Account</p>
                        <p>Orders</p>
                        <p>Logout</p>
                    </div>
                </div>
                <div class="navitem border">
                    <p>Returns</p>
                    <p>& Orders</p>
                </div>
                <div class="navitem border">
                    <i class="fa fa-shopping-cart"></i>
                    <p>Cart (<span id="cart-count">0</span>)</p>
                </div>
            </div>
        </div>

        <div>
            <div class="bbar border">
                <div>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div>
                    <p class="pp">All</p>
                </div>
                <div>
                    <p class="pp">Grocery</p>
                </div>
                <div>
                    <p class="pp">Electronics</p>
                </div>
                <div>
                    <p class="pp">Wearables</p>
                </div>
                <div>
                    <p class="pp">Toys</p>
                </div>
                <div>
                    <p class="pp">Home & Kitchen</p>
                </div>
                <div>
                    <p class="pp">Beauty & Personal Care</p>
                </div>
                <div>
                    <p class="pp">Sports & Outdoors</p>
                </div>
            </div>
        </div>
        <div>
            <div class="mainpic">
                <img src="pics/main.jpg" alt="Main Banner">
            </div>
            <div class="ads">
                <img src="pics/3.png" alt="Ad Banner 1">
                <img src="pics/4.png" alt="Ad Banner 2">
            </div>
        </div>
    </header>
    <main>
        <section class="deals">
            <h2>Deals of the Day</h2>
            <div class="deals-container">
                <div class="deal-item">
                    <img src="pics/3.png" alt="Deal 1">
                    <p>Product 1</p>
                    <p class="price">$29.99</p>
                </div>
                <div class="deal-item">
                    <img src="pics/4.png" alt="Deal 2">
                    <p>Product 2</p>
                    <p class="price">$19.99</p>
                </div>
                <div class="deal-item">
                    <img src="pics/3.png" alt="Deal 3">
                    <p>Product 3</p>
                    <p class="price">$39.99</p>
                </div>
                <div class="deal-item">
                    <img src="pics/4.png" alt="Deal 4">
                    <p>Product 4</p>
                    <p class="price">$49.99</p>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <div class="footer-links">
            <div>
                <h3>Get to Know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
            </div>
            <div>
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div>
                <h3>Make Money with Us</h3>
                <p>Sell on Amazon</p>
                <p>Affiliate Program</p>
                <p>Advertise Your Products</p>
            </div>
            <div>
                <h3>Let Us Help You</h3>
                <p>Customer Service</p>
                <p>Returns & Refunds</p>
                <p>Shipping Rates</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Amazon Clone. All rights reserved.</p>
        </div>
    </footer>
    
    <script src="amazon.js"></script>
</body>
</html>
/* amazon.css */
* {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}
body {
    background-color: #f3f3f3;
}
.navbar {
    height: 60px;
    background-color: #232F3E;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.navlogo {
    height: 50px;
    width: 100px;
    display: flex;
    align-items: center;
}
.logo img {
    width: 100%;
    height: auto;
}
.navaddress {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
}
.navaddress p {
    margin: 0;
}
.addicon {
    display: flex;
    align-items: center;
}
.addicon i {
    margin-right: 5px;
}
.searchbar {
    display: flex;
    flex-grow: 1;
    margin: 0 20px;
}
.searchbar select,
.searchbar input,
.searchbar button {
    padding: 10px;
    border: none;
}
.searchbar select {
    background-color: #e7e9ec;
}
.searchbar input {
    width: 100%;
    background-color: white;
}
.searchbar button {
    background-color: #febd69;
    cursor: pointer;
}
.options {
    margin-left: 10px;
    background-color: #e7e9ec;
}
.navitems {
    display: flex;
    align-items: center;
}
.navitem {
    margin-left: 20px;
    text-align: center;
    position: relative;
}
.navitem p {
    margin: 0;
}
.border {
    border: 1.5px solid transparent;
}
.border:hover {
    border: 1.5px solid white;
    cursor: pointer;
}
.bbar {
    height: 30px;
    background-color: #37475A;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.bbitem {
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-right: 10px;
}
.pp {
    font-size: small;
    margin-left: 10px;
    cursor: pointer;
}
.pp:hover {
    text-decoration: underline;
}
.mainpic {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
.mainpic img {
    height: 100%;
    width: auto;
}
.ads {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}
.ads img {
    width: 300px;
    height: auto;
}
.deals {
    background-color: white;
    padding: 20px;
    margin: 20px;
}
.deals h2 {
    margin-bottom: 20px;
}
.deals-container {
    display: flex;
    justify-content: space-between;
}
.deal-item {
    background-color: #fff;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.deal-item img {
    width: 150px;
    height: auto;
}
.price {
    color: #B12704;
    font-weight: bold;
}
.footer-links {
    display: flex;
    justify-content: space-around;
    background-color: #232F3E;
    color: white;
    padding: 20px;
}
.footer-links div {
    display: flex;
    flex-direction: column;
}
.footer-links h3 {
    margin-bottom: 10px;
}
.footer-bottom {
    background-color: #131A22;
    color: white;
    text-align: center;
    padding: 10px 0;
}
.dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    color: black;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 1;
}
.dropdown p {
    padding: 10px;
    margin: 0;
    cursor: pointer;
}
.dropdown p:hover {
    background-color: #f1f1f1;
}

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
