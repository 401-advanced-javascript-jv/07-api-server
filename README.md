# LAB - 07

## API Server

### Author: Jesse Van Volkinburg & Jagdeep Singh

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)
<!-- * [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable) -->

<!-- #### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments) -->

<!-- ### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples -->

### Setup
#### `.env` requirements
* `PORT` - Port Number

#### Running the app
* `nodemon`
* Endpoint: `/api/v1/categories/`
  * GET - Returns a JSON object with a list of categories
  * POST - Adds a new category to the database and returns a JSON object with the new entry's details.
* Endpoint: `/api/v1/categories/:id`
  * GET - Returns a JSON object with a specific category's details.
  * PUT - Updates the category specified by `:id` and returns a JSON object with the updated details.
  * DELETE - Removes the category specified by `:id`
  
#### Tests
* `npm test`

#### UML
![UML](./assets/server-uml.jpeg)
