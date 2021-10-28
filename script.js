
const questionBank = [{
    question: 'Which one is a coding language',
    answers: [
      {
        answerText: 'Grape',
        answerCorrect: false
      },
      {
        answerText: 'CSS',
        answerCorrect: true
      },
      {
        answerText: 'Apple',
        answerCorrect: false
      },
      {
        answerText: 'Strawberry',
        answerCorrect: false
      }
    ]
  },
  {
    question: '<h1> is an HTML',
    answers: [
      {
        answerText: 'Element',
        answerCorrect: true
      },
      {
        answerText: 'Style',
        answerCorrect: false
      },
      {
        answerText: 'Script',
        answerCorrect: false
      },
      {
        answerText: 'List',
        answerCorrect: false
      }
    ]
  },
  {
    question: 'In CSS, padding is used to ',
    answers: [
      {
        answerText: 'create space outside of an elements borders',
        answerCorrect: false
      },
      {
        answerText: 'protect an element if it falls',
        answerCorrect: false
      },
      {
        answerText: 'create space inside of an elements borders',
        answerCorrect: true
      },
      {
        answerText: 'do the exact same thing as margins',
        answerCorrect: false
      }
    ]
  },
  {
    question: 'You can make an element change when a mouse hovers over it ',
    answers: [
      {
        answerText: 'by magic',
        answerCorrect: false
      },
      {
        answerText: 'with HTML hidden features',
        answerCorrect: false
      },
      {
        answerText: 'by using a CSS pseudo-class',
        answerCorrect: true
      },
      {
        answerText: 'only with the Google Chrome browser',
        answerCorrect: false
      }
    ]
  },
  {
    question: 'Bootstrap is an example of a ____.',
    answers: [
      {
        answerText: 'language',
        answerCorrect: false
      },
      {
        answerText: 'style library',
        answerCorrect: true
      },
      {
        answerText: 'shortcut that developers should avoid',
        answerCorrect: false
      },
      {
        answerText: 'outdated footwear accessory',
        answerCorrect: false
      }
    ]
  }]

  
  let score = 0
  let clock = 40
  let counter = 0
  let time
  let scores = JSON.parse(localStorage.getItem('highScores'))
  console.log(scores)
  if (scores) {
    console.log(scores)
  }
  else {
    scores = [{
      name: 'Empty',
      score: 0
    }]
  }

  document.getElementById('score').textContent = score

  document.getElementById('timer').textContent = clock

  document.getElementById('start').addEventListener('click', event => {

    event.target.remove()
  
  
    document.getElementById('question').textContent = questionBank[0].question
  

    let answerElem1 = document.createElement('li')
    answerElem1.className = 'list-group-item list-group-item-action answer'
    answerElem1.textContent = (questionBank[0].answers[0].answerText)
    answerElem1.classList.add(questionBank[0].answers[0].answerCorrect)
    document.getElementById('answers').append(answerElem1)

    let answerElem2 = document.createElement('li')
    answerElem2.className = 'list-group-item list-group-item-action answer'
    answerElem2.textContent = (questionBank[0].answers[1].answerText)
    answerElem2.classList.add(questionBank[0].answers[1].answerCorrect)
    document.getElementById('answers').append(answerElem2)

    let answerElem3 = document.createElement('li')
    answerElem3.className = 'list-group-item list-group-item-action answer'
    answerElem3.textContent = (questionBank[0].answers[2].answerText)
    answerElem3.classList.add(questionBank[0].answers[2].answerCorrect)
    document.getElementById('answers').append(answerElem3)

    let answerElem4 = document.createElement('li')
    answerElem4.className = 'list-group-item list-group-item-action answer'
    answerElem4.textContent = (questionBank[0].answers[3].answerText)
    answerElem4.classList.add(questionBank[0].answers[3].answerCorrect)
    document.getElementById('answers').append(answerElem4)
  
    clockStart()
  })
  
 
  function clockStart() {
    time = setInterval(() => {
      clock--
      if (clock <=0) {
        clearInterval(time)
        gameEnd()
      }
      document.getElementById('timer').textContent = clock
    }, 1000)
  }
  
  

  document.addEventListener('click', event => {
  
    if (event.target.classList.contains('answer')) {
  
      if (event.target.classList.contains('true')) {
        correctAnswer()
      } else {
        wrongAnswer()
      }
    }
  })
  

  function correctAnswer() {
  

    score = score + 100
    document.getElementById('score').textContent = score
  

    document.getElementById('result').innerHTML = '<id = "alert" div class="alert alert-success" role="alert">Great job! You got it right!</id >'
  

    counter++
    if (counter < 10) {
      nextQuestion()
    } else {
      gameEnd()
    }
    if (clock <= 0) {
      gameEnd()
    }
  }
  
  function wrongAnswer() {
  

    clock = clock - 10
    document.getElementById('timer').textContent = clock

    document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Oops. 10 second penalty.</div >'
  

    counter++
    if (counter < 10) {
      nextQuestion()
    } else {
      gameEnd()
    }
    if (clock < 0) {
      gameEnd()
    }
  }
  

  function removeElementsByClass(className) {
    var elements = document.getElementsByClassName('answer');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
  
  function nextQuestion() {
  
 
    document.getElementById('question').textContent = questionBank[counter].question
  

    removeElementsByClass()
  
  

    let answerElem1 = document.createElement('li')
    answerElem1.className = 'list-group-item list-group-item-action answer'
    answerElem1.textContent = (questionBank[counter].answers[0].answerText)
    answerElem1.classList.add(questionBank[counter].answers[0].answerCorrect)
    document.getElementById('answers').append(answerElem1)
  

    let answerElem2 = document.createElement('li')
    answerElem2.className = 'list-group-item list-group-item-action answer'
    answerElem2.textContent = (questionBank[counter].answers[1].answerText)
    answerElem2.classList.add(questionBank[counter].answers[1].answerCorrect)
    document.getElementById('answers').append(answerElem2)
  

    let answerElem3 = document.createElement('li')
    answerElem3.className = 'list-group-item list-group-item-action answer'
    answerElem3.textContent = (questionBank[counter].answers[2].answerText)
    answerElem3.classList.add(questionBank[counter].answers[2].answerCorrect)
    document.getElementById('answers').append(answerElem3)
  

    let answerElem4 = document.createElement('li')
    answerElem4.className = 'list-group-item list-group-item-action answer'
    answerElem4.textContent = (questionBank[counter].answers[3].answerText)
    answerElem4.classList.add(questionBank[counter].answers[3].answerCorrect)
    document.getElementById('answers').append(answerElem4)
  }

  function gameEnd() {
    removeElementsByClass()
    stopClock()
 
    document.getElementById('question').textContent = `Game over - Your score was: ${score}`
    document.getElementById('timer').parentNode.remove()

    document.getElementById('row').innerHTML = `
    <div class="col">
      <input id = 'name' type="text" class="form-control" placeholder="Enter your name for high score records">
    </div>
    <div class="form-group row">
      <div class="col-sm-10">
        <button id = "submit" type="submit" class="btn btn-primary">Submit
      </button>
      </div>
    </div>`
 
    document.getElementById('submit').addEventListener('click', event => {
      event.preventDefault()
      let name = document.getElementById('name').value
      console.log(name)
      scores.push({
        name: name,
        score: score
      })
      console.log(scores)
      localStorage.setItem('highScores', JSON.stringify(scores))
      document.getElementById('restart').innerHTML = '<button id= "again" type="button" class="btn btn-secondary">Try Again</button>'
    })
  }

  document.getElementById('restart').addEventListener('click', event => {
    location.reload()
  })
  

  function stopClock() {
    clearInterval(time)
    clock = 0
  }