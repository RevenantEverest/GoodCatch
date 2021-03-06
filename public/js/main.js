function addButtonCohort(){
  if(window.location.pathname == `/cohorts` || window.location.pathname == `/cohorts/`){
    let addButton = document.querySelector(`.addCohort`);
    addButton.addEventListener(`click`, function(){
      window.location.href = `/cohorts/new`
    })

  }
}

function addButtonInstructor(){
  if(window.location.pathname === `/instructors` || window.location.pathname === `/instructors/`){
    let addButton = document.querySelector(`.addInstructor`);
    addButton.addEventListener(`click`, function(){
      window.location.href = `/instructors/new`
    })
  }
}

function addButtonStudent(){
  if(window.location.pathname == `/students` || window.location.pathname == `/students/`){
    let addButton = document.querySelector(`.addStudent`);
    addButton.addEventListener(`click`, function(){
      window.location.href = `/students/new`
    })
  }
}

function playHorn() {
  console.log(`Memes Up and running`);
  let sound = document.querySelector(`.memeHorn`);
  //sound.currentTime = 0;
  sound.play();
}

function memeButton() {
  let button = document.querySelector(`.memeButton`);
  button.addEventListener(`click`, function () {
    console.log(`clicked`)
    playHorn();
  })
}

console.log(`Up and running`);

addButtonStudent();
addButtonInstructor();
addButtonCohort();
memeButton();
