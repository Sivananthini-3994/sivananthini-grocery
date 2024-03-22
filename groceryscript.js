document.getElementById("login-btn").addEventListener('click',function(){
    window.location.href="indexlogin.html";
});
document.getElementById("navigateBtn").addEventListener("click",function(){
  window.location.href="next_page.html";
});

document.getElementById("navigateBtn1").addEventListener("click",function(){
  window.location.href="freedelivery.html";
});

document.getElementById("navigateBtn2").addEventListener("click",function(){
  window.location.href="payment.html";
});


    function toggleProductDetails(product) {
        var details =product.querySelector('.product-details');
        details.classList.toggle('show');
}


document.getElementById("seeMoreBtn1").addEventListener("click",function(){
  window.location.href="next_page.html";
});


document.getElementById("seeMoreBtn2").addEventListener("click",function(){
  window.location.href="next_page.html";
});



document.getElementById("seeMoreBtn3").addEventListener("click",function(){
  window.location.href="next_page.html";
});



document.getElementById("seeMoreBtn4").addEventListener("click",function(){
  window.location.href="next_page.html";
});



document.getElementById("seeMoreBtn5").addEventListener("click",function(){
  window.location.href="next_page.html";
});


  document.addEventListener("DOMContentLoaded", function() {
    var shopNowBtn = document.querySelector('.home .btn');
    var categoriesSection = document.getElementById('categories');
    
    shopNowBtn.addEventListener('click', function() {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    });
  });


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var imageno =1;
displayimg(imageno);
function nexting(n){
displaying(imageno += n)
}
function currentSlide(n){
displaying(imageno=n)
}
function displayimg(n){
var i;
var image=document.getElementsByClassName("image");
var dots=document.getElementsByClassName("dot");
if(n > image.length){
imageno=1;
if(n < 1){
imageno=image.length;
} for(i=0; i < image.length; i++){
image[i].style.display="none";
for(i=0; i < dots.length; i++){
dots[i].className=dots[i].className.replace("active", "");
image [imageno-1].style.display="block";
dots [imageno-1].className+"active";
}
}
}
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});