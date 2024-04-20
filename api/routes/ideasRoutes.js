import express from "express";

import {
  newIdea,
  getAllIdeas,
  singleIdea,
  deleteIdea,
} from "../controllers/ideasController.js";

const router = express.Router();

//create a new complaint.
router.post("/new-idea", newIdea);

//get all complaints.
router.get("/get-all-ideas", getAllIdeas);

//simgle complaint..

router.get("/sigle-idea/:ideaId", singleIdea);

//delete-complaint...

router.delete("/delete-idea/:ideaId", deleteIdea);

export default router;
