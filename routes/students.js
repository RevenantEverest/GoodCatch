const express = require(`express`);

const studentsController = require(`../controllers/studentsController`);

const views = require(`../controllers/viewsController`);

const studentsRouter = express.Router();

//studentsRouter.get(`/:id/edit`, studentsController.getOne, views.showEditFormStudent);
//studentsRouter.get(`/new`, studentsController.create, views.showAddFormStudent);

studentsRouter.route(`/:id`)
  .get(studentsController.getOne, views.showOneStudent)
  .put(studentsController.update, views.handleUpdateStudent)
  .delete(studentsController.destroy, views.handleDeleteStudent);

studentsRouter.route(`/`)
  .get(studentsController.index, views.showStudents)
  .post(studentsController.create, views.handleCreateStudent)

module.exports = studentsRouter;
