// console.log('app loaded', window);


// 'DOMContentLoaded' is like a keyword for addEventListener and it cant be changed.

document.addEventListener('DOMContentLoaded', () => {
  // const redListItem = document.querySelector('li.red');
  // redListItem.classList.add('bold');
  // console.dir(redListItem);
  //
  // const newListItem = document.createElement('li');
  // newListItem.textContent = 'Drak Goldenrod';
  // newListItem.classList.add('goldenrod');
  //
  // const list = document.querySelector('ul');
  // list.appendChild(newListItem);



  // const answer = 1+1;
  // console.log(`The answer is ${answer}`);
  //
  // const fruits = ["apple", "papaya", "orange"];
  // console.table(fruits);
  //
  // const vegs = ["tomato", "salad", "onion"];
  // console.dir(vegs);
  //
  // const person = {
  //   name: "Bob",
  //   age: 10
  // };
  // console.table(person);



  // debugger;
  // let number1 = 5;
  // number1 +=10;
  // const number2 = 20+ number1;
  // const number3 = number2 /10;

  setTimeout(function(){
      document.body.classList.add("hotpink");
  }, 2000);


});
