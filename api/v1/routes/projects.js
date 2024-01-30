const express= require('express');
const router = express.Router();
const Project = require('../../../models/projectModel');
const { getAllProjects, addProject, getOneProject, updateProject, deleteProject, middleware} = require('../../../controllers/projectFunctions');

router.use(express.json());


//for url localhost::3000/projects/
router.get('/', getAllProjects);
router.post('/',addProject);

//for url localhost::3000/projects/id
router.get('/:id' , middleware, getOneProject);
router.patch('/:id' , middleware, updateProject);
router.delete('/:id', middleware, deleteProject);


module.exports = router