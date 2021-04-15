module.exports = app =>{
    const livros = require("../controllers/livros.controller");
    const locatarios = require("../controllers/locatarios.controller");

    var router = require("express").Router();

    // incluir novo livro
    router.post("/livros",livros.create);
    // Retorna todos os livros
    router.get('/livros',livros.findAll);
    // Retorna os livros de um autor específico
    router.get("/livros/:autor",livros.findByAutor);
    //Atualiza status do livro 
    router.put("/livros/:id", livros.update);

    // incluir novo locatário
    router.post("/locatarios",locatarios.create);
    // Retorna todos os locatários
    router.get('/locatarios',locatarios.findAll);
    // Deletar os locatários pelo id
    router.delete('/locatarios/:id',locatarios.delete);
    // Deletar todos os locatários
    router.delete('/locatarios',locatarios.deleteAll);

    app.use('/api/',router);
}