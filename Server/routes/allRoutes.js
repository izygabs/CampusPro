/*
Post('/signup') to create new user
Post('/login') to login into dashboard
Post('/uploadProperties') to upload properties
Post('/uploadItems') to upload items
Put('/property/:id') to update property
Put('/item/:id') to update item
Delete('/property/:id') to delete property
Delete('/item/:id') to delete item
Get('/allProperties') to get all properties
Get('/allItems') to get all items
Get('/property/:id') to get a property by id
Get('/item/:id') to get an item by id
*/

const route = express.Router();

route.post("/signUp");

module.exports = route;
