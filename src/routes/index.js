import newsRouter from "./news.js";
import siteRouter from "./site.js";

export const route = (app) => {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
};
