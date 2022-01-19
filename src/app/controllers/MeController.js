import Course from "../models/Course.js";
import { multipleMongooseToObject } from "../../util/mongoose.js";

class MeController {
  // [GET] /me/courses
  show(req, res, next) {
    Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
      .then(([courses, trashCount]) => {
        res.render("me/courses", {
          courses: multipleMongooseToObject(courses),
          trashCount,
        });
      })
      .catch(next);
  }

  // [GET] /me/trash
  trash(req, res, next) {
    Course.findDeleted({}).then((courses) =>
      res.render("me/trash", { courses: multipleMongooseToObject(courses) })
    );
  }
}

export default new MeController();
