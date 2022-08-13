const workoutService = require("../services/workoutService")

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
}

const getOneWorkout = (req, res) => {
  const oneWorkout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get workouts ${req.params.workoutId}`);
}

const createNewWorkout = (req, res) => {
  const { body } = req

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  // console.log("New wordkout", newWorkout)

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "Creado", data: createdWorkout });
}



const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req

  if (!workoutId) {
    return
  }

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.send({status: 'Editado', data: updatedWorkout});
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
