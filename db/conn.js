const Sequelize = require('sequelize');

const sequelize = new Sequelize('toughts2', 'root', '',{
    dialect: 'sqlite',
    storage: './db/toughts2.db'
    
});

try{
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
}catch(err){
    console.log('nao conseguimos conectar: ' + err)
}

module.exports = sequelize
