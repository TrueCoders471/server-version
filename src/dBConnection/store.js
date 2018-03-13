const knex = require('knex')(require('./knexfile'))

module.exports = {
    createUser({student_id, f_name, l_name, username, email, password}) {
        console.log(`Add user ${username}`)
        return knex('students').insert({
            username,
            f_name,
            l_name,
            email,
            password
        })
    },

    authenticate({username, password}) {
        console.log(`Authenticating user ${username}`)
        return knex('students').where({username})
            .then(([user]) => {
                if (!user) {
                    return {success: false}
                }
                return {success: password === user.password}
            })
    }
};
