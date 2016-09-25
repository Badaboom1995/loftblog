var menuButton = document.querySelector(".user-block__mobile-icon"),
    menu = document.querySelector(".main-nav__list"),
    searchInput = document.querySelector(".user-block__search-input"),
    searchBtn = document.querySelector(".user-block__search");
menu.classList.toggle("active");
menuButton.addEventListener("click",function(e){
	e.preventDefault();
	menu.classList.toggle("active");
});
searchBtn.addEventListener("click",function(){
	searchBtn.classList.toggle("active");
	searchInput.classList.toggle("active");
})