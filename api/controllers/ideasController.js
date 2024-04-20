import { IdeaModel as Idea } from "../models/IdeaModel.js";
import { errorHandler } from "../utils/error.js";

const newIdea = async (req, res, next) => {
  const { heading, content, createdBy } = req.body;

  if (!heading) {
    return next(errorHandler("Enter the Heading of your Idea", 400));
  }

  if (!content || content.length < 10) {
    return next(
      errorHandler("Idea length is too short. Please enter the valid Idea", 400)
    );
  }

  if (!createdBy) {
    return next(errorHandler("Developer is required", 400));
  }

  const nIdea = await Idea.create({
    heading,
    content,
    createdBy,
  });

  res.status(200).json({
    success: true,
    message: "Idea Registered Successfully!",
    nIdea,
  });
};

const getAllIdeas = async (req, res, next) => {
  const ideas = await Idea.find({});
  res.status(200).json({
    success: true,
    message: "Fetched Successfully!",
    ideas,
  });
};

const singleIdea = async (req, res, next) => {
  const { ideaId } = req.params;
  const idea = await Idea.findById(ideaId).populate("createdBy");

  res.status(200).json({
    success: true,
    message: "Fetched successfully!",
    idea,
  });
};

const deleteIdea = async (req, res, next) => {
  const { ideaId } = req.params;

  const idea = await Idea.findByIdAndDelete(ideaId);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully!",
    deletedIdea: idea,
  });
};

export { newIdea, getAllIdeas, singleIdea, deleteIdea };
