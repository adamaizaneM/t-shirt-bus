document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded successfully.');

    // Sidebar toggle functionality
    const openSidebarButton = document.getElementById('openSidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('mySidebar');

    if (openSidebarButton && closeSidebarButton && sidebar) {
        console.log('Sidebar buttons and sidebar found.');
        openSidebarButton.addEventListener('click', function() {
            sidebar.style.width = '250px';
            console.log('Sidebar opened.');
        });

        closeSidebarButton.addEventListener('click', function() {
            sidebar.style.width = '0';
            console.log('Sidebar closed.');
        });
    } else {
        console.error('Sidebar elements not found. Please check your IDs.');
    }

    // Login Modal functionality
    const openLoginModalButton = document.getElementById('userIcon');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModalButton = document.getElementById('closeLoginModal');

    if (openLoginModalButton && loginModal && closeLoginModalButton) {
        console.log('Login modal elements found.');
        openLoginModalButton.addEventListener('click', function() {
            loginModal.style.display = 'block';
            console.log('Login modal opened.');
        });

        closeLoginModalButton.addEventListener('click', function() {
            loginModal.style.display = 'none';
            console.log('Login modal closed.');
        });

        window.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
                console.log('Login modal closed by clicking outside.');
            }
        });
    } else {
        console.error('Login modal elements not found. Please check your IDs.');
    }

    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        console.log('Login form found.');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (email === '' || password === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate successful login
            alert('Login successful!');
            loginModal.style.display = 'none';

            // Update the user icon to show logged-in state
            document.getElementById('userIcon').classList.add('logged-in');
            console.log('User logged in successfully.');
        });
    } else {
        console.error('Login form not found. Please check your IDs.');
    }

    // Credit Card Modal functionality
    const openCreditCardModalButton = document.getElementById('openCreditCardModal');
    const creditCardModal = document.getElementById('creditCardModal');
    const closeCreditCardModalButton = document.getElementById('closeCreditCardModal');

    if (openCreditCardModalButton && creditCardModal && closeCreditCardModalButton) {
        console.log('Credit card modal elements found.');
        openCreditCardModalButton.addEventListener('click', function() {
            creditCardModal.style.display = 'block';
            console.log('Credit card modal opened.');
        });

        closeCreditCardModalButton.addEventListener('click', function() {
            creditCardModal.style.display = 'none';
            console.log('Credit card modal closed.');
        });

        window.addEventListener('click', function(event) {
            if (event.target === creditCardModal) {
                creditCardModal.style.display = 'none';
                console.log('Credit card modal closed by clicking outside.');
            }
        });
    } else {
        console.error('Credit card modal elements not found. Please check your IDs.');
    }

    // Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('total-cost');
    let totalCost = 0;

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const itemCard = this.closest('.item-card');
            const itemName = itemCard.querySelector('h2').textContent;
            const itemPrice = parseFloat(itemCard.querySelector('.price').textContent.replace('$', ''));

            addItemToCart(itemName, itemPrice);
        });
    });

    function addItemToCart(name, price) {
        // Create cart item element
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.textContent = `${name} - $${price.toFixed(2)}`;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-item');
        removeButton.addEventListener('click', function() {
            removeItemFromCart(cartItem, price);
        });

        // Append remove button to cart item
        cartItem.appendChild(removeButton);
        cartItemsContainer.appendChild(cartItem);

        // Update total cost
        totalCost += price;
        updateTotalCost();
    }

    function removeItemFromCart(cartItem, price) {
        // Remove item from cart
        cartItem.remove();

        // Update total cost
        totalCost -= price;
        updateTotalCost();
    }

    function updateTotalCost() {
        totalCostElement.textContent = totalCost.toFixed(2);
    }

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
