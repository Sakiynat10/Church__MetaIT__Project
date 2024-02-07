/* toggle*/
const toggle = document.querySelector(".toggle");
const toggleHeader = document.querySelector(".toggle__header");
const close = document.querySelector(".close__toggle");

toggle.addEventListener('click' , function(){
    toggleHeader.classList.toggle("toggle__show");
});

close.addEventListener('click' , function(){
    toggleHeader.classList.remove("toggle__show");
})