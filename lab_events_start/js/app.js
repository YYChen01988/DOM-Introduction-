document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const input = document.querySelector('#delete_all');
  input.addEventListener('click', deleteAll)


});


const handleFormSubmit = function(event){
  event.preventDefault();

  const newListItem = document.createElement('li');
  newListItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`;

  document.getElementById("new-item-form").reset();

  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);
}

const deleteAll = function(event){
  const list = document.getElementById("reading-list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

// const deleteAll = function(event){
//   const list = document.querySelector('#reading-list');
//   list.innerHTML = ""
// }
