const express = require('express');
const router = express.Router();
const { getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/', getTasks);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
