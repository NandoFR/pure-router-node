import {UserController} from './user/UserController.js';

export const uris = {
    '/users': [new UserController().findAll, 'GET'],
    '/user/:id': [new UserController().findOne, 'GET'],
    '/user/create': [new UserController().create, 'POST'],
}
