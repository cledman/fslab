const api = require('../api')

const novaForm = async(req, res) =>{
    const categorias = await api.list('categorias')
    res.render('publicacoes/nova', { categorias })
}

const nova = async(req,res) =>{
    await api.create('publicacoes/' + req.body.categoria, {
     titulo: req.body.titulo,
     conteudo: req.body.conteudo
 })

 res.redirect('/publicacoes')
}

const list = async(req,res) =>{
    const publicacoes =await  api.list('publicacoes') //publicacoes ali é a Key da função list do API
    res.render('publicacoes/index', { publicacoes }) 
}

const excluir = async(req, res)=>{
    await api.apagar('publicacoes', req.params.id)
    res.redirect('/publicacoes')
}

const editarForm =  async(req, res) =>{
    const categoria =await api.get('categorias', req.params.id)
    res.render('categorias/editar', {
        categoria
    })
}

const editar =  async(req,res) =>{
    await api.update('categorias', req.params.id, {
     categoria: req.body.categoria
 })
 res.redirect('/categorias')
}

module.exports = {
    novaForm, nova, 
    list, excluir,
    editarForm, editar
}