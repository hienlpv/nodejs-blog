import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import mongooseDelete from "mongoose-delete";

const Schema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String },
  },
  {
    timestamps: true,
  }
);

// custom query helpers
Schema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }

  return this;
};

// add plugins
mongoose.plugin(slug);
Schema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

export default mongoose.model("Course", Schema);
