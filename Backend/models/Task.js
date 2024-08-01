const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["Backlog", "In Discussion", "In Progress", "Done"],
    default: "Backlog",
  },
  tags: [String],
  dueDate: { type: Date },
  assignedUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Task", taskSchema);
