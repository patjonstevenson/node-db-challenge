const db = require('./model');

const router = require('express').Router();

router.get('/resources', async (req, res) => {
    try {
        const resources = await db.getResources();
        res.status(200).json(resources);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error when retrieving resources", error });
    }
});

router.post('/resources', async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: "Must provide resource name" });
    }
    try {
        const resource = await db.addResource(req.body);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error while making post", error });
    }
})

router.get('/projects', async (req, res) => {
    try {
        const projects = await db.getProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Internal server error when retrieving projects", error });
    }
});

router.post('/projects', async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: "Must provide project name" });
    }
    let newProject = {
        ...req.body,
        completed: req.body.completed ? 1 : 0
    };


    try {
        const project = await db.addProject(newProject);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error while making post", error });
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await db.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Internal server error when retrieving tasks", error });
    }
});

router.post('/tasks', async (req, res) => {
    if (!req.body.project_id) {
        res.status(400).json({ message: "Must provide project id" });
    }
    try {
        const task = await db.addTask(req.body, req.body.project_id);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error while making post", error });
    }
})


module.exports = router;