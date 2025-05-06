import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
  },
  responses: Object,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Submission", submissionSchema);
