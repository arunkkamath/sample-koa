const knex = require('../connection');

function addUser(user) {
    return knex('users')
        .insert({
            username: user.username,
            password: user.password,
            firstname: user.firstname,
            lastname: user.lastname
        })
        .returning('*');
}

module.exports = {
    addUser
};