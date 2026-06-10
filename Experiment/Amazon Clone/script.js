let cartCount = 0;
let totalPrice = 0;

function addToCart(productName, price){

  cartCount++;

  totalPrice += price;

  document.getElementById("cartCount")
  .innerText = cartCount;

  document.getElementById("totalPrice")
  .innerText = totalPrice;

  let cartItems =
  document.getElementById("cartItems");

  let item =
  document.createElement("div");

  item.classList.add("cart-item");

  item.innerHTML = `
  
    <h4>${productName}</h4>

    <p>Price: ₹${price}</p>
  
  `;

  cartItems.appendChild(item);
}

function toggleCart(){

  let cartSidebar =
  document.getElementById("cartSidebar");

  cartSidebar.classList.toggle("active");
}

function placeOrder(){

  if(cartCount === 0){

    alert("Your cart is empty!");

  }
  else{

    alert("Order Placed Successfully!");

    document.getElementById("cartItems")
    .innerHTML = "";

    cartCount = 0;
    totalPrice = 0;

    document.getElementById("cartCount")
    .innerText = cartCount;

    document.getElementById("totalPrice")
    .innerText = totalPrice;
  }
}

function searchProduct(){

  let input =
  document.getElementById("searchInput")
  .value.toLowerCase();

  let cards =
  document.querySelectorAll(".card");

  cards.forEach(card => {

    let title =
    card.querySelector("h3")
    .innerText.toLowerCase();

    if(title.includes(input)){

      card.style.display = "block";

    }
    else{

      card.style.display = "none";

    }

  });

}