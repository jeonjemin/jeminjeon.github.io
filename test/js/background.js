const images = ["1.jpg", "2.jpg", "3.jpg"];

const aImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${aImage}`;

document.body.appendChild(bgImage);

//appendchild 맨 위에, prepand 맨끝에 추가. 