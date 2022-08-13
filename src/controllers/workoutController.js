const workoutService = require("../services/workoutService")

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send("Get all workouts");
}

const getOneWorkout = (req, res) => {
  const oneWorkout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get workouts ${req.params.workoutId}`);
}

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout(req.params.workoutId);
  res.send(`Create workouts ${req.params.workoutId}`);
}

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
  res.send(`Update workouts ${req.params.workoutId}`);
}

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout(req.params.workoutId);
  res.send(`Delete workouts ${req.params.workoutId}`);
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
