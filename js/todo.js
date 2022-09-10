const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  // localStorage는 text만 저장 가능해서 리스트 저장 불가. 
  // JSON.stringify() :리스트를 string으로 바꿈
}

function paintToDo(newToDo) {
  // newToDo {text, id} 받아와서 메모에 추가
  const li = document.createElement("li");
  // li : list item
  const span = document.createElement("span");
  // span tag 는 뭘까
  span.innerText = newToDo.text;
  li.id = newToDo.id;
  const button = document.createElement("button");
  button.innerText = "X";

  li.appendChild(span);
  // <li><span></span></li>
  li.appendChild(button);
  // <li><span></span><button></button></li>
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //delete버튼 클릭한 li.id와 다른 toDo들을 남겨둠
  //li.id가 string, toDo.id number이므로 parseInt 사용.
  li.remove();
  saveToDos(); //삭제한 뒤 localStorage 업데이트.
  // target : event의 속성. 어떤 버튼이 클릭되었는지 알려줌 event.target : HTML element 클릭된
  // target(html element)의 속성 중 parentElement는 target의 부모 요소를 알려줌. button->li   모든 요소들이 가짐. 
  //event가 어떤 button이 click 되었는지 알려줌. button-li(first-child)-form(#todo-form)

  //event.preventDefault();
  //필요없음?
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}
//add
// toDoForm.addEventListener("keydown", handleKeydown);
toDoForm.addEventListener("submit", handleToDoSubmit);

function test(item) {
  console.log("hi", item);
}

const savedToDos = localStorage.getItem("todos");
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
  // parsedToDos.forEach((item)=>toDos.push(item));

  //paintToDo("aa"), paintToDo("bb"), paintToDo(cc)
  // parsedToDos의 each item들에게 savedToDos 실행
  //parsedToDos.forEach((item)=>console.log("hi", item));
  //arrow function : =>    (item)=>console.log("hi", item) 처럼 사용
}
//parsedToDos : array
// json.parse : string을 살아있는 array로 만들어줌. array.forEach 가능
//array.forEach : execute a function for each item on the array
//javascript는 현재 처리하고 있는 item을 인자로 준다.

function sexyfilter(item) {
  return item > 10;
}

// arr.filter : 지우고 싶은 item을 제외한 새 arr을 만든다.
// arr.filter(function) -> arr[0]~ arr[n] 까지 원소들을 function(item){} 으로 전달해서 true를 반환하면 새 배열에 넣고 false면 필터링. (배제)

//add
// const keydownh2=toDoForm.querySelector("h2");
// function handleKeydown(event){
//   keydownh2.innerText="A";
// }