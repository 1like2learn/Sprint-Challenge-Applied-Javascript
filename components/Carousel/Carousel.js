/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel(){
  // debugger

  //functions
  function whichPic(eventNum){
    if (eventNum%5 === 1 ){
      mountains.style.display = 'block'
      computer.style.display = 'none'
      trees.style.display = 'none'
      turntable.style.display = 'none'
    }else if (eventNum%5 === 2){
      mountains.style.display = 'none'
      computer.style.display = 'block'
      trees.style.display = 'none'
      turntable.style.display = 'none'
    }else if (eventNum%5 === 3){
      mountains.style.display = 'none'
      computer.style.display = 'none'
      trees.style.display = 'block'
      turntable.style.display = 'none'
    }else if (eventNum%5 === 0){
      mountains.style.display = 'none'
      computer.style.display = 'none'
      trees.style.display = 'none'
      turntable.style.display = 'block'
    }
  }

  //makin some variables
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const mountains = document.createElement('img')
  const computer = document.createElement('img')
  const trees = document.createElement('img')
  const turntable = document.createElement('img')
  const rightButton = document.createElement('div')

  //adding some classes
  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  //altering some content
  mountains.src = './assets/carousel/turntable.jpeg' 
  computer.src = './assets/carousel/computer.jpeg' 
  trees.src = './assets/carousel/trees.jpeg' 
  turntable.src = './assets/carousel/turntable.jpeg'
  leftButton.textContent = '<'
  rightButton.textContent = '>'

  //nesting some elements
  carousel.appendChild(leftButton)
  carousel.appendChild(mountains)
  carousel.appendChild(computer)
  carousel.appendChild(trees)
  carousel.appendChild(turntable)
  carousel.appendChild(rightButton)

  //event listeners
  const pictures = [mountains, computer, trees, turntable]
  mountains.style.display = 'block'
  let eventNum = 1
  leftButton.addEventListener('click', event =>{
    eventNum = eventNum + 1
    console.log(eventNum)
    whichPic(eventNum)
  })

  console.log(carousel)

  document.querySelector('.carousel-container').appendChild(carousel)
}

carousel()