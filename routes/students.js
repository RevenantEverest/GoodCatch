const express = require(`express`);

const studentsController = require(`../controllers/studentsController`);
const cohortsController = require(`../controllers/cohortsController`);

const views = require(`../controllers/viewsController`);

const studentsRouter = express.Router();

studentsRouter.get(`/:id/edit`, cohortsController.index, studentsController.getOne, views.showEditFormStudents);
studentsRouter.get(`/new`, cohortsController.index, studentsController.addStudent, views.showAddFormStudents);

studentsRouter.route(`/:id`)
  .get(studentsController.getOne, views.showOneStudent)
  .put(studentsController.update, views.handleUpdateStudent)
  .delete(studentsController.destroy, views.handleDeleteStudent);

studentsRouter.route(`/`)
  .get(studentsController.index, views.showStudents)
  .post(studentsController.create, views.handleCreateStudent)

module.exports = studentsRouter;
