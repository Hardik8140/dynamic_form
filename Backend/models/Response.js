import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form", required: true },
  answers: [{ fieldLabel: String, value: mongoose.Schema.Types.Mixed }],
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Response", responseSchema);
