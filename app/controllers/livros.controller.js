const db = require("../models");

Livro = db.livros;


const Op = db.sequelize.Op; // redução de código

exports.create = (req,res)=>{
    //Validate Request
    if(!req.body.nome){
        res.status(400).send({
            message: "Nome do livro não pode ser vazio!",
        });
        return;
    }
    if(!req.body.autor){
        res.status(400).send({
            message: "Autor não pode ser vazio!",
        })
        return;
        }
        if(!req.body.status){
            res.status(400).send({
                message: "Status do livro não pode ser vazio!",
            })
            return;
        }

    // incluir livro
    const livro = {
        nome: req.body.nome,
        autor: req.body.autor,
        sinopse:req.body.sinopse,
        createdAt:req.body.createdAt,
        updatedAt:req.body.createAt,
        status: req.body.status ? req.body.status : false,
    };
    Livro.create(livro)
    .then((data) =>{
        res.send(data);
    })
    .catch((err) =>{
        res.status(500).send({
            message: err.message || "Erro interno ao criar o livro",
        });
    });
};
  
exports.findAll = (req,res) => {
  Livro.findAll()
  .then((data)=>{
      res.send(data);
  })
  .catch((err)=>{
      res.status(500).send({
          message:
          err.message || "Erro interno ao buscar os livros"
      });
  });
};

exports.findByAutor = (req,res) =>{
    Livro.findAll({
      where: {
        autor:{
          [Sequelize.Op.like]: `%${req.params.autor}%` 
        }
      }
    })
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "Erro ao buscar o livro por autor"
        });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;

  Livro.update(
    {status: req.body.status},
    {where: {id : id}}
  )
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Livro atualizado"
      });
    } else {
      res.send({
        message: `Não foi possível atulizar o livro de id: ${id}, livro não encontrado ou body vazio`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Erro interno ao atualizar o livro de id: ${id}`
    })
  })
}

exports.deleteAll = (req, res) => {
  const id = req.params.id;

  Livro.destroy({where: {},
  truncate:false})
  .then(nums=>{
    res.send({message: `${nums} locatário deletado com sucesso`});
  })
  .catch(err=>{
    res.status(500).send({
      message:
      err.message || "Erro ao deletar todos os locatários"
    });
  });
};