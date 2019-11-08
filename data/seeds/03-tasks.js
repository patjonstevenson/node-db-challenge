
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { project_id: 1, description: 'Coordinate synergistically with Mr. Business', completed: 0 },
        { project_id: 1, description: 'Meetings and presentations on the critical importance of social principles to project goals', completed: 0 },
        { project_id: 1, description: 'Create marketing materials demonstrating successful integration of social principles into company culture, as well as making the world a better place', completed: 0 }
      ]);
    });
};
