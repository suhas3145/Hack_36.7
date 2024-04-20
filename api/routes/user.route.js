import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  test,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
const router = express.Router();
import { getUsersForSidebar } from "../controllers/user.controller.js";

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/chat", verifyToken, getUsersForSidebar);

export default router;
