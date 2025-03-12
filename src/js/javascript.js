let btn_coffee = document.querySelector('#coffee');
let btn_bakery=document.querySelector('#bakery_products');
let btn_desserts=document.querySelector('#desserts');

btn_coffee.addEventListener('click', function () {
  menu_select(this.id);
  this.classList.add('active');
  btn_bakery.classList.remove('active');
  btn_desserts.classList.remove('active');
});
btn_bakery.addEventListener('click', function () {
  menu_select(this.id);
  this.classList.add('active');
  btn_coffee.classList.remove('active');
  btn_desserts.classList.remove('active');
});

btn_desserts.addEventListener('click', function () {
  menu_select(this.id);
  this.classList.add('active');
  btn_coffee.classList.remove('active');
  btn_bakery.classList.remove('active');
});

function menu_select(this_id) {
  document.querySelectorAll('.catalog').forEach(menu =>
    menu.id == this_id + '_menu' ? menu.classList.remove('hidden') : menu.classList.add('hidden'));
};