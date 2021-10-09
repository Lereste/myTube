const menuIcon = document.querySelector('.menu-icon');

// Sidebar
const sidebar = document.querySelector('.sidebar');
// Container
const container = document.querySelector('.container');

// Khi click vào menu 
menuIcon.onclick = function() {
   sidebar.classList.toggle('small-sidebar');
   container.classList.toggle('large-container');
}



