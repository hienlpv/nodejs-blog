import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";

import { route } from "./routes/index.js";

const app = express();

// constant
const PORT = 3000;

// config temple engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
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

// route
route(app);

// server listening
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
