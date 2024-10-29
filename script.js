let cartQuantity = localStorage.getItem('cartQuantity') || 0;

displayCartQuantity = () => {
  document.querySelector('.js-output').innerHTML = `Cart Quatity: ${cartQuantity}`;
}

displayCartQuantity();


const updateCart = () => {
  cartQuantity++;
  localStorage.setItem('cartQuantity', cartQuantity);
  displayCartQuantity();
}

const clearCart = () => {
  cartQuantity = 0;
  localStorage.setItem('cartQuantity', cartQuantity);
  displayCartQuantity();
}