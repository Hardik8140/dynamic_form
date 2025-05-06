import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema({
  label: String,
  type: {
    type: String,
    enum: ["text", "checkbox"],
  },
});

const formSchema = new mongoose.Schema({
  title: String,
  fields: [fieldSchema],
});

const Form = mongoose.model("Form", formSchema);
export default Form;
