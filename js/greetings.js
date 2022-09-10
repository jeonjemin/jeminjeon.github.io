const loginForm = document.querySelector("#login-form");
//tag, class, id 다 찾으므로 id임을 알려주기 위해서는 #을 login-form 앞에 붙여서 사용
//const loginForm2= document.getElementById("login-form");

const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY ="username";

function onLoginSubmit(event) {

  event.preventDefault();
  // default (submit)를 막아서 새로고침 방지

  const username = loginInput.value;
  // console.log(username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  // localStorage에 "username"key, username 형태로 저장
  paintGreetings(username);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

function paintGreetings(username){
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}  


const savedUsername=localStorage.getItem(USERNAME_KEY);

//username이 있으면 form 안뜨게 만듬. 
if(savedUsername===null){  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //form의 클래스에 hidden 지워줘서 화면에 뜨게함.
  loginForm.addEventListener("submit", onLoginSubmit);
} else{
  paintGreetings(savedUsername);
}
// console.dir(loginInput); loginInput 관련 정보 출력. 
// ~~~.value : 기본적으로 input 안에 있는 값. val="asdfaf" 해놓으면 선입력 됨. 

// 4.2 form's default behavior : submit // form에서는 엔터가 입력되거나 버튼이 클릭되면 자동으로 submit 된다. (페이지가 새로고침 된다. ) input 안에 있는 버튼 or input type submit 

//onLoginSubmit() 함수가 실행될때 그냥 이상태로 실행되지 않고 onLoginSubmit({information}) argument 형태로 event에 대한 정보를 주면서 실행된다. ( event object에 관한 정보. )
//+) event object는 기본적으로 preventDefault 기능을 가진다. 
// function onLonginSubmit(event){ } // 이렇게 선언해야 event에 정보를 받을 수 있다.  

//submit event -> JS onLoginSubmit function 호출 , 이 때 argument로 event object 줌. 

//4.3 link's default behavior : link로 이동하는거. 
// addEventListener 안에 있는 함수는 직접 실행하지 않는다
// 브라우저가 실행시켜주고
// 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
// addEventListener의 함수에서 object에 대한 자리만 할당해주면   <------------------------????
// 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
// 이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!
// 왜 addEventListner에 자리를 할당해라는거지? argument 여서 그런가? 함수명() 이거 대신 함수명 이거만 쓰는게 이 의미?

// 변수를 string으로 합치기 `aaaaa ${변수}` `:백틱 파이썬처럼 해도됨. 

// //4.5 Saving Username
// localStorage.setItem("key", value); 로 localStorage에 정보저장
// localStorage.removeItem()으로 삭제


//4.7 recap


// https://youtube.com/shorts/76Sw8DGpot4?feature=share