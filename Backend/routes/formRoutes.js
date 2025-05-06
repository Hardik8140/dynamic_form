import express from "express";
import {
  createForm,
  deleteForm,
  getFormById,
  getForms,
  submitForm,
} from "../controllers/formController.js";

const router = express.Router();

router.post("/", createForm);
router.get("/", getForms);
router.get("/:id", getFormById);
router.post("/submit", submitForm);
router.delete("/:id", deleteForm);

export default router;
