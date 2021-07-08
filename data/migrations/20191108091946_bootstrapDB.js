
exports.up = function (knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
            tbl.string('description', 1048);
            tbl.integer('completed').notNullable(); // 0 or 1
        })
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable().unique();
            tbl.string('description', 1048);
        })
        .createTable("tasks", tbl => {
            tbl.increments();
            tbl.string('description', 1048).notNullable();
            tbl.string('notes', 1048);
            tbl.integer('completed').notNullable(); // 0 or 1
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
