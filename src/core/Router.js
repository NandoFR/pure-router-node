import { uris } from "../routes.js"
export const Router = (req,res) => {
    req.params = {}
    req.body = {}
   

    let url = req.url
    let uriKeys = Object.keys(uris)
    if(url[url.length -1] === '/'){
        url = url.slice(0,-1)
    }
    let urlFiltered = url.split('/').filter(v => !!v);
    let finalUrl = '';
    uriKeys.forEach((element,index) => {
        let filter = element.split('/').filter(v => !!v)

        const result = filter.every((el,i) => {

            if(uris[uriKeys[index]][1] !== req.method){
                return false
            }
            if(urlFiltered.length !== filter.length){
                return false
            }
            if(!urlFiltered[i]){
                return false
            }
            if(el.includes(':')){
                Object.assign(req.params, {[el.split(':')[1]]: urlFiltered[i]})
                urlFiltered[i] = el
            }
            if(el === urlFiltered[i]){
                return true
            }
        })
        if(result){
            finalUrl = element
        }
    })
    if(!finalUrl){
        res.writeHead(404, {'Content-Type': 'application/json'})
        return res.end(JSON.stringify({
            error: true
        }))
    }


    uris[finalUrl][0](req,res)

}
