const clock=document.querySelector("h2#clock");
// h2태그의 id:clock 찾아옴

function getClock(){
  const date = new Date();
  //date객체를 생성한다. 호출한 당시 시간에 대한 정보를 담고있음. 
  const hours=String(date.getHours()).padStart(2,"0");
  const minutes=String(date.getMinutes()).padStart(2,"0");
  const seconds=String(date.getSeconds()).padStart(2,"0");
  //getHours()의 반환값이 number이므로 string으로 형변환 해준 후 padStart(2, "0")으로 length 2로 만들어줌. 
  
  clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
// interval만 이용하면 1초 뒤에 시간이 뜨므로
setInterval(getClock, 1000);
// setInterval함수는 (실행할 함수, 기간)을 받아서 주기마다 함수를 실행시킨다. ms단위. 
// interval : '매번' 일어나야 하는 무언가.ex) 매 2초마다. 

// setTimeout은 (실행할 함수, 기간)을 받아서 기간이 지난 뒤 딱 한 번만 함수를 실행시킨다. ms단위


// padStart : string을 더 길게 만드는 함수.
// "1".padStart(2,"0") --> 01 
// string을 2자리로 만드는데 만약 string이 2자리가 아니면 앞에 0을 추가한다. 
// padEnd : 뒤쪽에 추가.