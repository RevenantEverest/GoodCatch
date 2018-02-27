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

addButtonStudent();
addButtonInstructor();
addButtonCohort();
