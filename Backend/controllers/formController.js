import Form from "../models/Form.js";
import Submission from "../models/Submission.js";

export const createForm = async (req, res) => {
  const { title, fields } = req.body;
  try {
    console.log("title", title);
    console.log("fields", fields);

    if (!title || !fields) {
      return res.status(400).json({ error: "Title and fields are required" });
    }

    const form = new Form({ title, fields });
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: "Failed to create form" });
  }
};

export const getForms = async (req, res) => {
  const forms = await Form.find();
  res.json(forms);
};

export const getFormById = async (req, res) => {
  const form = await Form.findById(req.params.id);
  const submissions = await Submission.find({ formId: req.params.id });
  res.json({ form, submissions });
};

export const submitForm = async (req, res) => {
  const { formId, responses } = req.body;
  console.log("Form ID:", formId);
  console.log("Responses:", responses);

  try {
    if (!formId || !responses || Object.keys(responses).length === 0) {
      return res
        .status(400)
        .json({ error: "Form ID and responses are required" });
    }

    const submission = new Submission({ formId, responses });
    await submission.save();

    res.status(201).json(submission);
  } catch (error) {
    console.error("Error saving submission:", error);
    res.status(500).json({ error: "Failed to save submission" });
  }
};

export const deleteForm = async (req, res) => {
  try {
    const { id } = req.params;

    await Form.findByIdAndDelete(id);
    // await Response.deleteMany({ formId: id });
    res.status(200).json({ message: "Form deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
