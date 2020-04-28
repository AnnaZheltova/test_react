var express = require("express");
var fs = require("fs");
const path = require("path");
var app = express();
var md5 = require("md5")
var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const db_name = path.join(__dirname, "users.db");

app.use(express.static(__dirname + "/public"));
// получение списка данных
app.get("/api/users", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    res.send(users);
    let db = new sqlite3.Database(db_name, (err) => {
        if (err) {
            // Cannot open database
            console.error(err.message)
            throw err
        } else {
            console.log('Connected to the SQLite database.')
            db.serialize(function () {
                db.run(`CREATE TABLE IF NOT EXISTS user (
                    id INTEGER PRIMARY KEY,
                    first_name text,
                    last_name text,
                    email email,
                    gender text,
                    ip_address text
                )`);
                var insert = 'INSERT INTO user (id,first_name,last_name, email, gender, ip_address) VALUES (?,?,?,?,?,?)'

                for (var i = 0; i < users.length; i++) {
                    db.run(insert, [users[i].id, users[i].first_name, users[i].last_name, users[i].email, users[i].gender, users[i].ip_address])
                };
            })
        }
    });


});
app.get("/api/users_statistic", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    var content = fs.readFileSync("users_statistic.json", "utf8");
    var users = JSON.parse(content);
    res.send(users);
    let db = new sqlite3.Database(db_name, (err) => {
        if (err) {
            // Cannot open database
            console.error(err.message)
            throw err
        } else {
            console.log('Connected to the SQLite database.')
            db.serialize(function () {
                db.run(`CREATE TABLE IF NOT EXISTS user_stat (
                    user_id INTEGER ,
                    date DATE,
                    page_views INTEGER,
                    clicks INTEGER
                )`);
                var insert = 'INSERT INTO user_stat (user_id, date, page_views, clicks) VALUES (?,?,?,?)'

                for (var i = 0; i < users.length; i++) {
                    db.run(insert, [users[i].user_id, users[i].date, users[i].page_views, users[i].clicks])
                };
            }
            );


        }
    });

});
// получение одного пользователя по id
app.get("/api/users_statistic/:id", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    var id = req.params.id; // получаем id
    var content = fs.readFileSync("users_statistic.json", "utf8");
    var users = JSON.parse(content);
    var user = [];
    // находим в массиве пользователя по id
    for (var i = 0; i < users.length; i++) {
        if (users[i].user_id == id) {
            user.push(users[i]);
        }
    }
    // отправляем пользователя
    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send();
    }
});
app.listen(8000, function () {
    console.log("Сервер ожидает подключения...");
});
