const express = require(`express`);

const instructorsController = require(`../controllers/instructorsController`);

const views = require(`../controllers/viewsController`);

const instructorsRouter = express.Router();

instructorsRouter.get(`/:id/edit`, instructorsController.getOne, views.showEditFormInstructor);
instructorsRouter.get(`/new`, instructorsController.create, views.showAddFormInstructor);

instructorsRouter.route(`/:id`)
  .get(instructorsController.getOne, views.showOneInstructor)
  .put(instructorsController.update, views.handleUpdateInstructor)
  .delete(instructorsController.destroy, views.handleDeleteInstructor);

instructorsRouter.route(`/`)
  .get(instructorsController.index, views.showInstructors)
  .post(instructorsController.create, views.handleCreateInstructor);

module.exports = instructorsRouter;
