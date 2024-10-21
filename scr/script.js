const schemeSvg = document.querySelector(".scheme-svg");
const priceTotal = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 700;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) =>{
    if(!event.target.classList.contains('booked')){
        event.target.classList.toggle("active");
        let price = schemeSvg.querySelectorAll('.active').length;
        totalPrice = price * cost; 
        priceTotal.textContent = totalPrice;
    }
    
}); 

menuButton.addEventListener('click', () =>{
    menu.classList.toggle("is-open")
})
