const express = require('express');
const router = express.Router();
const { getProjects, getProject, createProject, addTask } = require('../controllers/projectController');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', createProject);
router.post('/:id/tasks', addTask);

module.exports = router;
