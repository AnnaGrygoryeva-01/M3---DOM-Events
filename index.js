// 1. Прописати у html-розмітці кнопку (<button>) з будь-яким селектором (класс, id). За допомогою DOM отримати посилання на цей елемент та навісити на нього обробник події кліку. За кліком кнопка має викликати модальне вікно (alert) з текстом “Привіт тобі, клацальщик!”

// 2. Створити посилання з текстом “клікни, аби з’явилась кнопка”. За натиснення на посилання поряд з ним має з’явитись новий елемент - кнопка.

const createBtnLink = document.querySelector("#createBtnLink");

function createBtnHandler(e) {
  const hiddenBtn = document.querySelector("#hiddenBtn");
  hiddenBtn.hidden = false;
}
createBtnLink.addEventListener("click", createBtnHandler);
// -----------------------------------------------------
// Alternatively:
// function createBtnHandlerAlternative(e) {
//   const newBtn = document.createElement("button");
//   newBtn.textContent = "Привіт!";
//   createBtnLink.after(newBtn);
//   //   createBtnLink.removeEventListener("click", createBtnHandlerAlternative);
// }
// createBtnLink.addEventListener("click", createBtnHandlerAlternative);

// 3. “Лампочка”. У розмітці прописати елемент (article або div), з початковими стилями, які роблять елемент круглим, сірого кольору тла, з темно-сірою рамкою. Також прописати в розмітці кнопку, за натиснення на яку у елемента-лампочки мають змінитись стилі - тло має стати жовтим, рамка - білою.
