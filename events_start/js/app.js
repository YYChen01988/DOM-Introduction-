document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  const select = document.querySelector('#select');
  select.addEventListener('change',handleSelectChange)

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit)

});


//### functions that has been passed in above as a nametag
var count = 0
const handleButtonClick = function(){
  console.dir(this);
  const resultParagraph = document.querySelector("#button-result");
  count+=1
  resultParagraph.textContent = `That button has definetely benn clicked ${count} times`
};

const handleInput = function(event){
  // console.dir(event);
  const resultInput = document.querySelector('#input-result');
  resultInput.textContent = `You type ${event.target.value}`
};

const handleSelectChange = function(event){
  const resultselect = document.querySelector('#select-result');
  resultselect.textContent = `You selected ${event.target.value}`
};

const handleFormSubmit = function(event){
  event.preventDefault();
  // console.dir(this);
  const resultForm = document.querySelector('#form-result');
  // console.dir(event.target.first_name.value);
  resultForm.textContent = `Your name is ${event.target.first_name.value} ${event.target.last_name.value} `
};
