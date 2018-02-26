module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },

  /*======== COHORTS ========*/

  showCohorts(req, res) {
    res.render(`cohorts/cohorts-index.ejs`, {
      data: res.locals.cohorts,
    });
  },

  showOneCohort(req, res) {
    res.render(`cohorts/cohort-single`, {
      data: res.locals.cohort,
    });
  },

  showAddFormCohort(req, res) {
    res.render(`cohorts/add-cohort`);
  },

  showEditFormCohort(req, res) {
    res.render(`cohorts/edit-cohort`, {
      data: res.locals.cohort,
    });
  },

  handleCreateCohort(req, res) {
    res.redirect(`/cohorts`);
  },

  handleUpdateCohort(req, res) {
    res.redirect(`/cohorts/${req.params.id}`);
  },

  handleDeleteCohort(req, res) {
    res.redirect(`/cohorts`);
  },

  /*-------- END --------*/

  /*======== INSTRUCTORS ========*/

  showInstructors(req, res) {
    res.render(`instructors/instructors-index.ejs`, {
      data: res.locals.instructor,
    });
  },

  showOneInstructor(req, res) {
    res.render(`instructors/instructor-single`, {
      data: res.locals.instructor,
    });
  },

  showAddFormInstructor(req, res) {
    res.render(`instructors/add-instructor`);
  },

  showEditFormInstructor(req, res) {
    res.render(`instructors/edit-instructor`, {
      data: res.locals.instructors,
    });
  },

  handleCreateInstructor(req, res) {
    res.redirect(`/instructors`);
  },

  handleUpdateInstructor(req, res) {
    res.redirect(`/instructors/${req.params.id}`);
  },

  handleDeleteInstructor(req, res) {
    res.redirect(`/instructors`);
  },

  /*-------- END --------*/

  /*======== STUDENTS ========*/

  showStudents(req, res) {
    res.render(`students/students-index.ejs`, {
      data: res.locals.student,
    });
  },

  showOneStudent(req, res) {
    res.render(`students/student-single`, {
      data: res.locals.student,
    });
  },

  showAddFormStudents(req, res) {
    res.render(`students/add-student`);
  },

  showEditFormStudents(req, res) {
    res.render(`students/edit-student`, {
      data: res.locals.student,
    });
  },

  handleCreateStudent(req, res) {
    res.redirect(`/students`);
  },

  handleUpdateStudent(req, res) {
    res.redirect(`/students/${req.params.id}`);
  },

  handleDeleteStudent(req, res) {
    res.redirect(`/students`);
  },

  /*-------- END --------*/

};
