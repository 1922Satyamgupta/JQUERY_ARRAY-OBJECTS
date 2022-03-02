var array = [];
var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];
$(document).ready(function () {
displayProduct();
display();
  $("#products").on("click", ".add-to-cart", function () {
    console.log("cart");
    var id = $(this).data("id");
    addToCart(id);
    display();
    console.log(id);
  });
  $("#result").on("click", "a#delete", function () {
    console.log();
    var id = $(this).data("id");
    delete_btn(id);
    display();
    
    console.log(id);
  });
  $("#result").on("click", "a#add", function () {
    var id = $(this).data("id");
    add(id);
    
  });

  $("#result").on("click", "#empty", function () {
    emptyCart();
    display();
    console.log("emp")
  });
});
function display() {
  console.log("in dis");
  var html = "";
  html+=`<tr><th> ID </th><th> Name </th><th> Price </th><th> Cart </th></tr>`;
  for (var i = 0; i < array.length; i++) {
    html += ` <tr><th> ${array[i].id} </th><th> ${array[i].name} </th><th> ${array[i].price} </th><th><input id="val" type="number" name="qty" min="1" max="150" value="${array[i].quantity}"><th><a id="delete" data-id= ${array[i].id} href="#"> Delete </a></th><tr>`;
  }
 html+=`<tr><th style="margin-left:40px:"><input type="button" name="btn" value="Empty-Cart"  id="empty"></th></tr>`;
  $("#result").html(html);
}
function addToCart(id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      array[i].quantity += 1;

      return;
    }
  }
  push(id);
}

function push(id) {
  obj = {};

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      obj.id = products[i].id;
      obj.name = products[i].name;
      obj.price = products[i].price;
      obj.quantity = 1;
    }
  }
  array.push(obj);
  console.log(array);
}

function displayProduct() {
  var p = "";
  for (let i = 0; i < products.length; i++) {
    p += `<div id="product-${products[i].id}" class="product">
        <img src="images/${products[i].image}">
        <h3 class="title"><a href="#">Product ${products[i].id}</a></h3>
        <span>Price: "$" ${products[i].price}</span>
        <a class="add-to-cart" href="#" data-id=${products[i].id}>Add To Cart</a>
    </div>`;
  }
  $("#products").html(p);
}

function delete_btn(id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      array.splice(i, 1);
      return;
    }
  }
}
function emptyCart()
{
    array=[];
    display();
}
