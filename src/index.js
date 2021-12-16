import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";

const app = express();

// config
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");

// middleware
app.use(express.static("./src/public"));
app.use(morgan("dev"));

// route
app.get("/", (req, res) => {
  return res.render("home");
});

// server listening
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
