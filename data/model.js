const db = require('./db-config');

const model = {
    addResource: resource => db('resources').insert(resource, 'id'),

    getResources: () => db.select('*').from('resources'),

    addProject: project => {
        let newProject = project;
        if (project.completed === null) {
            newProject = {
                ...project,
                completed: 0
            };
        }
        return db('projects').insert(newProject, 'id');
    },

    getProjects: () => db('projects').select('*'),

    addTask: (task, project_id) => {
        const newTask = {
            ...task,
            project_id
        };
        return db('tasks').insert(newTask, 'id');
    },

    getTasks: () => {
        const tasks = db('tasks').select('id', 'name', 'description', 'completed');
        const newTasks = tasks.map(task => ({
            ...task,
            completed: task.completed ? true : false
        }));
        return newTasks;
    }
};

module.exports = model;