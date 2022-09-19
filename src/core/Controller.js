
export class Controller {
    response(res,status,data = {}){
        res.writeHead(status, {'Content-Type': 'application/json'})
        return res.end(JSON.stringify(data))
    }
    getBody(chunk){
        return JSON.parse(Buffer.concat([chunk]).toString())
    }
}