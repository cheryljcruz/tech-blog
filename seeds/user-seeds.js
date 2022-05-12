const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "marcjacobs@gmail.com",
    password: "abc123",
  },
  {
    username: "larclacobs@gmail.com",
    password: "abc123",
  },
  {
    username: "harcjacobs@gmail.com",
    password: "abc123",
  },
  {
    username: "jarcracobs@gmail.com",
    password: "abc123",
  },
  {
    username: "arcacobs@gmail.com",
    password: "abc123",
  },
  {
    username: "rcjabs@gmail.com",
    password: "abc123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;