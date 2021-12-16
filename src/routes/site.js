import express from "express";

import siteController from "../app/controller/SiteController.js";

const router = express.Router();

router.use("/search", siteController.search);
router.use("/", siteController.index);

export default router;
