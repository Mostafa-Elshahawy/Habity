const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  frequency: {
    type: String,
    enum: ["daily", "weekly", "monthly"],
    default: "daily"
  },
  targetCount: {
    type: Number,
    default: 1
  },
  status: {
    type: String,
    enum: ["inProgress", "completed"],
    default: "inProgress"
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  completedDates: [Date],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit;
