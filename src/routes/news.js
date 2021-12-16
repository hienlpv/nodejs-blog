import express from "express";

import newsController from "../app/controller/NewsController.js";

const router = express.Router();

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

export default router;
