import newsRouter from "./news.js";
import coursesRouter from "./courses.js";
import meRouter from "./me.js";
import siteRouter from "./site.js";

export const route = (app) => {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
};
