const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: "wbullers0",
    password: "AdXgx7C"
  },
  {
    username: "cguenther1",
    password: "OtZe5WKyC4Ll"
  },
  {
    username: "jsebring2",
    password: "HYiFd24P2Q"
  },
  {
    username: "djacquest3",
    password: "0m4AKjE"
  },
  {
    username: "vbalden4",
    password: "1ZGIY4hI"
  },
  {
    username: "ghiddy5",
    password: "JYcRz73oPg"
  },
  {
    username: "hmckeevers6",
    password: "201Gcs0"
  },
  {
    username: "rsweetzer7",
    password: "UXskXMSXYYmk"
  },
  {
    username: "fmorales8",
    password: "hdZ0M3P0Do"
  },
  {
    username: "tmonro9",
    password: "6g22lQFtHq0"
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
