const studentsDB = require(`../models/studentsDB`);

module.exports = {
  index(req, res, next) {
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
