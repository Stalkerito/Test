let inputIn = document.querySelector(".input-in"); //input
let button = document.querySelector(".inputButton"); // button
let divOut = document.querySelector(".out");
button.onclick = function () {
  //выполнится когда кнопка будет нажата
  //console.log(inputIn.value);
  let b = inputIn.value; // выдает строки, для работы с числами нужно добавить +
  console.log(b);
  alert(`Заявака на ${b} принята!`);
  divOut.innerHTML = b; //сохранить на странице результат
  inputIn.value = ""; //удаляем введенное значение, путем присвоения пустого значения.
};
