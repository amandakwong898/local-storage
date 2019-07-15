var add = $('.add');
var submit = $('.submit');

submit.on("click", addName);

checkStorage();

function checkStorage() {
  if(localStorage.length > 0) {
    add.append(`<p>${localStorage.name}</p>`);
  }
}

function addName() {
  event.preventDefault();
  var name = $('.name').val();
  add.append(`<p>${name}</p>`);
  $('.name').val("");
  localStorage.setItem('name', name);
  console.log(localStorage);
}
