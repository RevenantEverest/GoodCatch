function editButtonCohort(id){
  let editButton = document.querySelector(`.editCohort`);
  editButton.addEventListener(`click`, function(){
    console.log(window.location);
    window.location.href = `/cohorts/${id}/edit`;
  })
}

function addButtonCohort(){
  let addButton = document.querySelector(`.addCohort`);
  addButton.addEventListener(`click`, function(){
    console.log(window.location);
    window.location.href = `/cohorts/new`
  })
}

addButtonCohort();
editButtonCohort();
