const todoList = [{
  name: 'Lavare i piatti',
  date: '2024-01-12'},{
  name:'Svuotare la lavastoviglie',
  date: '2024-01-12'}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name,date} = todoObject;//destructuring
    const html = `
    <div class="outputs">_${name}</div>
    <div class="outputs">${date}</div> 
    <button class="delete-button" onclick="
      todoList.splice(${i},1);
      renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
  };

  document.querySelector('.js-list-container').innerHTML = todoListHTML;
};

function addTodo() {
  const inputElemnt = document.querySelector('.js-text-input');
  const name = inputElemnt.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;

  todoList.push({
    //name: name,
    //date: date
    name,//shortcut (shorthand property sintax)
    date//shortcut (shorthand property sintax)
   });

  inputElemnt.value = '';

  renderTodoList();
};