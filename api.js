const axios = require('axios')
const baseUrl = 'https://como-fazer-2a603.firebaseio.com/'

const list = async(key) =>{
    const content = await axios.get(baseUrl+key+'.json')
    if(content.data){
        const objetos = Object
                                .keys(content.data)
                                .map( key =>{
                                    return {
                                        id: key,
                                        ...content.data[key] 
                                    }
                                })
        return objetos
    }
    return [] //se não tiver o content.data, retorna um vetor vazio.
}

const apagar = async(key, id) =>{
    await axios.delete(baseUrl + key + '/' + id + '.json')
    return true
}


const get = async(key, id) =>{
    const content = await axios.get(`${baseUrl}/${key}/${id}.json`)// aqui fez como template string só pra exemplificar, mas pode usar como fizemos no "apagar"
    return {
            id: id,
            ...content.data
        }
  
}

const update = async(key,id, data) =>{
    await axios.put(`${baseUrl}/${key}/${id}.json`, data)    
    return true
}

const create = async(key, data) =>{
    await axios.post(`${baseUrl}/${key}.json`, data)
    return true
}


module.exports = {
    list, apagar, get, update, create
}