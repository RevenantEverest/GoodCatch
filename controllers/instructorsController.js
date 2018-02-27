const instructorsDB = require(`../models/instructorsDB`);

module.exports = {

  addInstructor(req, res, next) {
    const blankInstructor = {
      instructor: null,
    };
    res.locals.instructor = blankInstructor;
    next();
  },

  index(req, res, next) {
    instructorsDB.findAll()
      .then((instructor) => {
        res.locals.instructor = instructor;
        next();
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    instructorsDB.findById(req.params.id)
      .then((instructor) => {
        res.locals.instructor = instructor;
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    instructorsDB.save(req.body)
      .then((instructor) => {
        res.locals.instructor = instructor;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    instructorsDB.update(req.body)
      .then((instructor) => {
        res.locals.instructor = instructor;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    instructorsDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
};
