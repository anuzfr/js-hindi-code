# project related to DOM
## project link
[click here](https://stackblitz.com/edit/web-platform-lf6uyq?file=index.html)

# solution code
## project 1
### js

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
### html
``` html 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="../style.css">
  <title>javascript color switcher </title>
</head>
<body>
  <nav>
    <a href="/" aria-current="page">home</a>
  </nav>
  <div class="canvas">
      <a style="
      background-color: #fff;
      padding: 10px 30px;
      border-radius: 8px;
      color: #212121;
      text-decoration: none;
      border: 2px solid #212121
      "
      href="../a.html"
      >back to home page </a>
    <h1>
      color scheme switcher 
    </h1>
    <span class="button" id="blue"></span>
    <span class="button" id="green"></span>
    <span class="button" id="red"></span>
    <span class="button" id="yellow"></span>
    <h2>
      try to click on one of the color above
      <span>to change the background of the page </span>
    </h2>
  </div>
  <script src="a.js"></script>
</body>
</html>

```
### css

``` css

html {
    margin: 0;
  }
  
  span {
    display: block;
  }
  .canvas {
    margin: 100px auto 100px;
    width: 80%;
    text-align: center;
  }
  
  .button {
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
  }
  
  #blue {
    background: blue;
  }
  
  #green {
    background: green;
  }
  #red {
    background:red;
  }
  #yellow {
    background: yellow;
  }
  


```