const DB = require('./db.json')
const { saveToDatabase } = require("./utils")

const getAllWorkouts = () => {
  return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

  if (isAlreadyAdded) {
    return;
  }

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
}

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId)

  if (indexForUpdate === -1) {
    return;
  }

  const updateWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  }

  DB.workouts[indexForUpdate] = updateWorkout
  saveToDatabase(DB)
  return updateWorkout
}


module.exports = {
  getAllWorkouts,
  createNewWorkout,
  updateOneWorkout
}