import http from 'http'
import { Router } from './core/Router.js'

const port = 3000

const server = http.createServer((req,res) => Router(req,res))

server.listen(port)