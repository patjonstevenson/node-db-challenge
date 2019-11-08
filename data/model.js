const db = require('./db-config');

const model = {
    getResources: () => db.select('*').from('resources'),

    getResourcesById: id => db.select('*').from('resources').where({ id }),

    addResource: resource => {
        /*const newId =*/ return db.insert(resource, 'id').into('resources');
        //return this.getResourcesById(newId);
    },

    addProject: project => {
        /*let newProject = project;
        if (project.completed === null) {
            newProject = {
                ...project,
                completed: 0
            };
        }*/
        return db('projects').insert(project, 'id');
    },

    getProjects: () => {
        const projects = db('projects').select('id', 'name', 'description', 'completed');
        const newProjects = projects.map(project => ({
            ...project,
            completed: project.completed ? true : false
        }));
        return newProjects;
    },



    addTask: (task, project_id) => {
        const newTask = {
            ...task,
            project_id
        };
        return db('tasks').insert(newTask, 'id');
    },

    getTasks: () => {
        const tasks = db('tasks').select('id', 'description', 'completed');
        const newTasks = tasks.map(task => ({
            ...task,
            completed: task.completed ? true : false
        }));
        return newTasks;
    }
};

module.exports = model;