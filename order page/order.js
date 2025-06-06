const prices = {
  "Cappucino": 30000,
  "Caramel Dolce Latte": 35000,
  "Americano": 25000
};
const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');
const orderSuccess = document.getElementById('orderSuccess');

orderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const coffee = orderForm.coffee.value;
  const quantity = parseInt(orderForm.quantity.value, 10);
  const name = orderForm.name.value;
  const email = orderForm.email.value;

  if (!coffee || !quantity || !name || !email) return;

  const price = prices[coffee] * quantity;
  orderSummary.style.display = 'block';
  orderSuccess.style.display = 'block';
  orderSummary.innerHTML = `
    <strong>Order Summary:</strong><br>
    Name: ${name}<br>
    Email: ${email}<br>
    Coffee: ${coffee}<br>
    Quantity: ${quantity}<br>
    <b>Total: Rp ${price.toLocaleString('id-ID')}</b>
  `;
  orderSuccess.textContent = "Please check your email for the online receipt. Thank you for the order!";
  orderForm.reset();
});
