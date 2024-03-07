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

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString)
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```
### html

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav></nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="c.js"></script>
  </body>
</html>

```

## project 4
### js
``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```
### html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=div, initial-scale=1.0">
    <link rel="stylesheet" href="dstyle.css">
    <link rel="stylesheet" href="../dstyle.css">
    <title>Document</title>
</head>
<body style="background-color: #8eef6e"; color="#fff">
    <div id="wrapper">
        <h1>number guessing game</h1>
        <p>Try and guess a random number between 1 and 100</p>
        <p>You have 10 attempt to guess the right answer</p>
        <form class="form">
        <label for="guessField" id="guess">guess the number</label>
        <input type="text" id="guessField" class="guessField">
        <input type="submit" id="subt" value="Submit Guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p>PREVIOUS GUESS<span class="guesses"></span></p>
            <p>Guess Remaining<span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>

    </div>
    <script> src="d.js" </script>
</body>
</html>
```
### css
``` css
html {
    font-family: 'copperplate';
  }
  
  body {
    width: 300px;
    max-width: 900px;
    min-width: 480px;
    margin: 0 auto;
    background-color: #212121;
  }
  
  .lastResult {
    color: white;
    padding: 7px;
  }
  
  .guesses {
    color: white;
    padding: 7px;
  }
  
  button {
    background-color: #141414;
    color: #fff;
    width: 250px;
    height: 30px;
    border-radius: 25px;
    font-size: 30px;
    border-style: none;
    margin-top: 30px;
    /* margin-left: 50px; */
  }
  
  #subt {
    background-color: #161616;
    color: #ffffff;
    width: 180px;
    height: 50px;
    border-radius: 30px;
    font-size: 15px;
    border-style: none;
    margin-top: 25px;
    /* margin-left: 75px; */
  }
  
  #guessField {
    color: #000;
    width: 250px;
    height: 50px;
    font-size: 15px;
    border-style: none;
    margin-top: 25px;
  
    /* margin-left: 50px; */
    border: 5px solid #26a071;
    text-align: center;
  }
  
  #guess {
    font-size: 40px;
    /* margin-left: 90px; */
    margin-top: 50px;
    color: #fff;
  }
  
  .guesses {
    background-color: #52bce6;
  }
  
  #wrapper {
    box-sizing: border-box;
    text-align: center;
    width: 500px;
    height: 500px;
    background-color: #2055b7;
    color: #fff;
    font-size: 25px;
  }
  
  h1 {
    background-color: #161616;
    color: #fff;
    text-align: center;
  }
  
  p {
    font-size: 16px;
    font-family: 'Courier New';
    padding: 10px;
    text-align: center;
  }
  
```

## project 5 
### html
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>unlimited color</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    

    <h1>unlimited color</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="script.js"></script>
  </body>
</html>

```
### js
```javascript
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 500);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
```

## project 6
### html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="scrpt.js"></script>
  </body>
</html>

```

### js
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
```
