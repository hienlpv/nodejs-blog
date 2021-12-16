class NewsController {
  // [GET] /news/:slug
  show(req, res) {
    res.send("NEWS DETAILS");
  }

  // [GET] /news
  index(req, res) {
    res.render("news");
  }
}

export default new NewsController();
