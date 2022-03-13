# Techie-Blog

## Repository Description
###### [Back to Table of Contents](#table-of-contents)
Techie-Blog is a website wher developers can write about tech and publish articles, blog posts, and their thoughts and opinions.

## Table of Contents
* [Repository Description](#repository-description)
* [Installation Instructions](#installation)
* [Usage Information](#usage) 
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)
---

## Installation
###### [Back to Table of Contents](#table-of-contents)
You will need to have node.js installed in your Terminal. As well as npm Packages: Express, Sequelize, MySQL2 and dotenv

Step 1. clone the repository and insert -- npm i -- into the terminal to install all those dependencies.

Step 2. Add a .env file and add this code with your MySql credintals
```
 * DB_NAME='techieblog_db'
 * DB_USER='your-mysql-username'
 * DB_PW='your-mysql-password'
```
Step 3. Source the schema
 * Login in MySql shell - ```mysql -u <username> -p ```
 * Run command to source schema - ``` source db/schema.sql ```

Step 4. Seed the tables 
```
node run seeds
```

Step 5. Start the server .
``` 
npm start
```  
---
## Usage
###### [Back to Table of Contents](#table-of-contents)
User accesses the Terminal, insert "node server.js or npm start" .

Or check out the deployed application [Techie-Blog](https://techie-blogs.herokuapp.com/)

### Screenshot of Application

![Application Screenshot](/public/images/tech%20blog.png)
---

## License
 Project license: MIT 
  
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Contribution Guidelines
###### [Back to Table of Contents](#table-of-contents)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so

---

## Test Instructions
###### [Back to Table of Contents](#table-of-contents)
Tests will be added in the future

---

## Questions
###### [Back to Table of Contents](#table-of-contents)
If you have any questions contact at: 

Email [rofikre@yahoo.com](mailto:rofikre@yahoo.com),

GitHub [@robel-codes](https://github.com/robel-codes)
 
