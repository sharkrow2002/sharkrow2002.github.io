const ham = document.getElementById('ham');
const menu_wrapper = document.getElementById('menu_wrapper');
const Title = document.getElementById('Title');
const green = document.getElementById('green');

ham.addEventListener('click', function() {
	ham.classList.toggle('clicked');
	menu_wrapper.classList.toggle('clicked');
	Title.classList.toggle('clicked');
});
