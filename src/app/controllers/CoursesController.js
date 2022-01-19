import Course from "../models/Course.js";
import { MongooseToObject } from "../../util/mongoose.js";

class CoursesController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: MongooseToObject(course) })
      )
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id).then((course) =>
      res.render("courses/edit", { course: course.toObject() })
    );
  }

  // [GET] /courses/store
  store(req, res, next) {
    const newCourse = new Course(req.body);
    newCourse.image = `https://img.youtube.com/vi/${newCourse.videoId}/sddefault.jpg`;
    newCourse
      .save()
      .then(() => res.redirect("/me/courses"))
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/courses"))
      .catch(next);
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /courses/:id/force
  deleteForce(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [POST] /courses/handle-form-action
  handleFormAction(req, res, next) {
    switch (req.body.coursesAction) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch(next);
      default:
        res.redirect("back");
        break;
    }
  }
}

export default new CoursesController();
