const API_KEY = "6ada3d154359d7723352e6d5f9eae577"; //onweathermap.org에서 my api key
const weather = document.querySelector("#weather span:first-child");
const city=document.querySelector("#weather span:last-child");
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon=position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //fetch : js call the url. 
  //fetch is actually a promise(시간이 좀 걸린 뒤에 일어남.) 서버의 응답을 기다려야됨
  fetch(url).then(response => response.json() ).then(data=>{
    const name = data.name;
    weather.innerText=`${data.weather[0].main}/${data.main.temp}`;
    city.innerText=data.name;
  });
  // url을 fetch하고 그다음 response받음
  
}
function onGeoError(){
  alert("cannot find");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//onGeoOk : 위치 가능할때 실행될 함수
//onGeoError : 위치 불가능할때 실행 될 함수. 


// openweathermap.org
// current Weather Data API
// API로 다른 서버와 데이터 교환

// 백엔드 javascript -> wetube course

