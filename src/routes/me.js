import express from "express";

import meController from "../app/controllers/MeController.js";

const router = express.Router();

router.get("/courses", meController.show);
router.get("/trash", meController.trash);

export default router;
