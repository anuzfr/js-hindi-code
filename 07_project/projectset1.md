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

## project 2
### js
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```
### html
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="bstyle.css" />
    <link rel="stylesheet" href="../bstyles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="b.js"></script>
</html>

```

### css
``` css

.container {
    width: 600px;
    height: 825px;
  
    background-color: #3eeb17;
    padding-left: 50px;
  }
  #height,
  #weight {
    width: 150px;
    height: 25px;
    margin-top: 30px;
    border-radius: 15px;
  }
  
  #weight-guide {
    margin-left: 75px;
    margin-top: 25px;
  }
  
  #results {
    font-size: 35px;
    margin-left: 90px;
    margin-top: 20px;
    color: rgb(161, 95, 174);
  }
  
  button {
    width: 200px;
    height: 35px;
    margin-left: 90px;
    margin-top: 25px;
    background-color: #fff;
    padding: 1px 30px;
    border-radius: 15px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;
  
    font-size: 25px;
  }
  
  h1 {
    padding-left: 30px;
    padding-top: 25px;
    
  }
  

```

## project 3
### js

```

```
### html

```

```
### css

```

``` 