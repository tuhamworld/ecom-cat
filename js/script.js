let productSection = document.querySelector('.product-section')
let chairProducts = document.querySelector('.chairs-product');
let electronicProducts = document.querySelector('.electronics-product');
let kitchenProducts = document.querySelector('.kitchen');
let sportProducts = document.querySelector('.sports');
let wearProducts = document.querySelector('.wears');


function allProducts() {
    electronicProducts.style.display = 'block';
    kitchenProducts.style.display = 'block';
    sportProducts.style.display = 'block';
    wearProducts.style.display = 'block';
    chairProducts.style.display = 'block';
}

function chairsProduct() {
    electronicProducts.style.display = 'none';
    kitchenProducts.style.display = 'none';
    sportProducts.style.display = 'none';
    wearProducts.style.display = 'none';
    chairProducts.style.display = 'block';
}
function electronicsProduct() {
    kitchenProducts.style.display = 'none';
    sportProducts.style.display = 'none';
    wearProducts.style.display = 'none';
    chairProducts.style.display = 'none';
    electronicProducts.style.display = 'block';
}
function kitchenProduct() {
    electronicProducts.style.display = 'none';
    kitchenProducts.style.display = 'block';
    sportProducts.style.display = 'none';
    wearProducts.style.display = 'none';
    chairProducts.style.display = 'none';
}
function wearsProduct() {
    electronicProducts.style.display = 'none';
    kitchenProducts.style.display = 'none';
    sportProducts.style.display = 'none';
    wearProducts.style.display = 'block';
    chairProducts.style.display = 'none';
}

function sportsProduct() {
    electronicProducts.style.display = 'none';
    kitchenProducts.style.display = 'none';
    sportProducts.style.display = 'block';
    wearProducts.style.display = 'none';
    chairProducts.style.display = 'none';
}