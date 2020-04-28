var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "users.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY,
            first_name text, 
            last_name text, 
            email text, 
            gender text, 
            ip_address text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
               
            
            }
        });  
        db.run(`CREATE TABLE user_stat (
            user_id INTEGER,
            date date, 
            page_views INTEGER, 
            clicks INTEGER
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
               
            
            }
        });  
    }
});


module.exports = db
