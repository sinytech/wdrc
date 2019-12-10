const express = require('express');

const router = express.Router();

const { createTask, getTasks, updateTask, removeTask } = require('../controllers/tasks')

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:_id', updateTask);
router.delete('/:_id', removeTask);

module.exports = router;
