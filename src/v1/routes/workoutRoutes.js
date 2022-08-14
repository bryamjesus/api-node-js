const workoutController = require("../../controllers/workoutController")
const recordController = require("../../controllers/recordController")
// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");

const express = require("express")
const apicache = require("apicache")
const router = express.Router()
const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router
  .get("/", cache("2 minutes"), workoutController.getAllWorkouts)

  .get("/:workoutId", workoutController.getOneWorkout)

  .get("/:workoutId/records", recordController.getRecordForWorkout)

  .post("/", workoutController.createNewWorkout)

  .patch("/:workoutId", workoutController.updateOneWorkout)

  .delete("/:workoutId", workoutController.deleteOneWorkout)

module.exports = router
