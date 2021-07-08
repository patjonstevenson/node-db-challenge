
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'project1', completed: 0 },
        { name: 'project2', completed: 0 },
        { name: 'project3', completed: 0 }
      ]);
    });
};
