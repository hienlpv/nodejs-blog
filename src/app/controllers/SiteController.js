import Course from "../models/Course.js";

class SiteController {
  // [GET] /
  async index(req, res) {
    try {
      const courses = await Course.find({});

      if (!courses) return res.status(400).send();

      res.status(200).json(courses);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

export default new SiteController();
