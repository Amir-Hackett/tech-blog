const { User } = require('../models');

const userData = [
    {
        username: "raj_r",
        email: "raj_r@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shaun_c",
        email: "shaun_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_n",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "amir_h",
        email: "amir_h@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "denysha_g",
        email: "denysha_g@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;