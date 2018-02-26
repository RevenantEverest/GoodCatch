const express = require(`express`);

const cohortsController = require(`../controllers/cohortsController`);

const views = require(`../controllers/viewsController`);

const cohortsRouter = express.Router();

cohortsRouter.get(`/:id/edit`, cohortsController.getOne, views.showEditFormCohort);
cohortsRouter.get(`/new`, cohortsController.index, cohortsController.addCohort, views.showAddFormCohort);

cohortsRouter.route(`/:id`)
  .get(cohortsController.getOne, views.showOneCohort)
  .put(cohortsController.update, views.handleUpdateCohort)
  .delete(cohortsController.destroy, views.handleDeleteCohort);

cohortsRouter.route(`/`)
  .get(cohortsController.index, views.showCohorts)
  .post(cohortsController.create, views.handleCreateCohort);

module.exports = cohortsRouter;
