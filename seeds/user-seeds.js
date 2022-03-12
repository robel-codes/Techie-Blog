const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: "wbullers0",
    email: "breen0@addthis.com",
    password: "AdXgx7C"
  },
  {
    username: "cguenther1",
    email: "sbrickhill1@narod.ru",
    password: "OtZe5WKyC4Ll"
  },
  {
    username: "jsebring2",
    email: "kgriffithe2@ted.com",
    password: "HYiFd24P2Q"
  },
  {
    username: "djacquest3",
    email: "rsartin3@diigo.com",
    password: "0m4AKjE"
  },
  {
    username: "vbalden4",
    email: "civison4@skyrock.com",
    password: "1ZGIY4hI"
  },
  {
    username: "ghiddy5",
    email: "mwhittet5@amazon.co.jp",
    password: "JYcRz73oPg"
  },
  {
    username: "hmckeevers6",
    email: "cperrygo6@geocities.jp",
    password: "201Gcs0"
  },
  {
    username: "rsweetzer7",
    email: "gwaddicor7@epa.gov",
    password: "UXskXMSXYYmk"
  },
  {
    username: "fmorales8",
    email: "hiwanicki8@sciencedaily.com",
    password: "hdZ0M3P0Do"
  },
  {
    username: "tmonro9",
    email: "drontree9@oaic.gov.au",
    password: "6g22lQFtHq0"
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
