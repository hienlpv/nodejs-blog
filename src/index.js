import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import methodOverride from "method-override";

import SortMiddleware from "./app/middleware/SortMiddleware.js";
import { sum, sortable } from "./helper/handlebar.js";

import { route } from "./routes/index.js";
import { connectDB } from "./config/db/index.js";

const app = express();

// constant
const PORT = 3000;

// connect database
connectDB();

// config temple engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum,
      sortable,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// middleware
app.use(express.static("./src/public"));
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));

// custom middleware
app.use(SortMiddleware);

// route
route(app);

// server listening
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
