import {Controller} from '../core/Controller.js'

export class UserController extends Controller {

    findAll(req,res) {
        return super.response(res,200,'Users')
    }

    findOne(req,res) {
        return super.response(res,200,'User1')
    }
    create(req,res) {
        req.on('data',(chunk) => {
            let body = super.getBody(chunk)
            return super.response(res, 200, {
                body
            })
        })
    }
}