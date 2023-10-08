// JavaScript to handle cart functionality
const items = document.querySelectorAll('.item');
const totalElement = document.getElementById('total-price');

items.forEach(item => {
    const decrementButton = item.querySelector('.decrement');
    const incrementButton = item.querySelector('.increment');
    const deleteButton = item.querySelector('.delete');
    const likeButton = item.querySelector('.like');
    const quantityElement = item.querySelector('.quantity');


    let quantity = parseInt(quantityElement.textContent);

    decrementButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });

    incrementButton.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });

    deleteButton.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
    });

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
    });
});

function updateTotalPrice() {
    let totalPrice = 0;
    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const itemPrice = 10; // Replace with the actual price of the item
        totalPrice += quantity * itemPrice;
    });
    totalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

updateTotalPrice(); // Calculate initial total price
