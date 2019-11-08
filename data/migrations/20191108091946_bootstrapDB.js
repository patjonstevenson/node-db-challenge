
exports.up = function (knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
        })
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
        })
        .createTable("tasks", tbl => {
            tbl.increments();
            tbl.string('description', 1048).notNullable();
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable("project_resources", tbl => {
            tbl.increments();
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
