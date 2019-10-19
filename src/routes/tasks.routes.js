const express = require('express');
const router = express.Router();

const {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask } = require('../controllers/tasks.controllers');

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .delete(deleteTask)
  .put(updateTask);

module.exports = router;