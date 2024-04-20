import mongoose from "mongoose";

const IdeaSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const IdeaModel = mongoose.model("Ideas", IdeaSchema);
