const express = require(`express`);

const mainController = require(`../controllers/mainController`);

const cohortsController = require(`../controllers/cohortsController`);
const instructorsController = require(`../controllers/instructorsController`);
const studentsController = require(`../controllers/studentsController`);

const views = require(`../controllers/viewsController`);

const mainRouter = express.Router();

mainRouter.route(`/:id`)
  .get(cohortsController.getOne, cohortsController.getStudents, cohortsController.getInstructors, views.showMain)
  .post(studentsController.catches, views.handleUpdateCatch)


module.exports = mainRouter;
