const studentsDB = require(`../models/studentsDB`);

module.exports = {

  addStudent(req, res, next) {
    const blankStudent = {
      student: null,
    };
    res.locals.student = blankStudent;
    next();
  },

  index(req, res, next) {
    console.log(`inside index`);
    studentsDB.findAll()
      .then((student) => {
        res.locals.student = student;
        next();
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    studentsDB.findById(req.params.id)
      .then((student) => {
        console.log(student);
        res.locals.student = student;
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    studentsDB.save(req.body)
      .then((student) => {
        res.locals.student = student;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    studentsDB.update(req.body)
      .then((student) => {
        res.locals.student = student;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    studentsDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
};
