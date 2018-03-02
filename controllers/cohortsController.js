const cohortsDB = require(`../models/cohortsDB`);

module.exports = {

  addCohort(req, res, next) {
    const blankCohort = {
      cohort: null,
    };
    res.locals.cohort = blankCohort;
    next();
  },

  index(req, res, next) {
    cohortsDB.findAll()
      .then((cohorts) => {
        res.locals.cohorts = cohorts;
        next();
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    cohortsDB.findById(req.params.id)
      .then((cohort) => {
        res.locals.cohort = cohort;
        console.log(`Get One => ${cohort}`);
        next();
      })
      .catch(err => next(err));
  },

  getStudents(req, res, next) {
    cohortsDB.findAllStudents(req.params.id)
      .then((students) => {
        res.locals.students = students;
        console.log(`Get Students =>` + students);
        next();
      })
      .catch(err => next(err));
  },

  getInstructors(req, res, next) {
    cohortsDB.findAllInstructors(req.params.id)
      .then((instructors) => {
        res.locals.instructors = instructors;
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    cohortsDB.save(req.body)
      .then((cohort) => {
        res.locals.cohort = cohort,
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    cohortsDB.update(req.body)
      .then((cohort) => {
        res.locals.cohort = cohort;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    cohortsDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
};
