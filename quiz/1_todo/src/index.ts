// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// }

interface Todo{
  id: number;
  title: string;
  done: boolean;
}
let todoItems: Todo [];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index:number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems(): void {
  const todo1 = {id:4, title:'밥 먹기', done: false}
  addTodo(todo1)
 
  addTodo({id:4, title:'헬스장 가기 먹기', done: false})
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();


showCompleted()