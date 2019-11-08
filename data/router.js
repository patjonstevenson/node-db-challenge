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
    try {
        const resource = await db.addResource(resource);
    } catch (error) {
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

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await db.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Internal server error when retrieving tasks", error });
    }
});

module.exports = router;