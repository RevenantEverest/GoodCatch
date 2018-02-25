const express = require(`express`);

const cohortsController = require(`../controllers/cohortsController`);

const views = require(`../controllers/viewsController`);

const cohortsRouter = express.Router();

cohortsRouter.get(`/:/edit`, cohortsController.getOne);
cohortsRouter.get(`/new`, cohortsController.create);

cohortsRouter.route(`/:id`)
  .get(cohortsController.getOne)
  .put(cohortsController.update)
  .delete(cohortsController.destroy);

cohortsRouter.route(`/`)
  .get(cohortsController.index)
  .post(cohortsController.create)
