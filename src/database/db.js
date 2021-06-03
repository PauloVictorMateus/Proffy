const Database = require('sqlite-async')
Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
    // criar as tabelas do banco de dados
    db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            
        );   
    `)
}