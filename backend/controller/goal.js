const asyncHandler = require("express-async-handler");

//@des Get goals
//@route GET /api/goals
//access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});
//@des post goal
//@route POST /api/goals
//access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goals" });
});
//@des update goal
//@route PUT /api/goals/:id
//access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});
//@des delete goals
//@route DELETE /api/goals/:id
//access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
