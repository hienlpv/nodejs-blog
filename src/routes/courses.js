import express from "express";

import coursesController from "../app/controllers/CoursesController.js";

const router = express.Router();

router.get("/create", coursesController.create);
router.get("/:id/edit", coursesController.edit);
router.get("/:slug", coursesController.show);
router.post("/handle-form-action", coursesController.handleFormAction);
router.post("/store", coursesController.store);
router.put("/:id", coursesController.update);
router.patch("/:id/restore", coursesController.restore);
router.delete("/:id", coursesController.delete);
router.delete("/:id/force", coursesController.deleteForce);

export default router;
