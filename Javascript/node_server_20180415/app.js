import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express();
const router = express.Router();

var connection = mysql.createConnection({
	host: 'localhost', // db ip address
	port: 3306, // db port number
	user: 'root', // db id
	password: '',
	database:'tasman'
});

connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }else{
        console.log("연결에 성공하였습니다.");
    }
});

// app 은 express, .use 는 express 안 함수.
// listen 전에 위치해야함.
app.use(bodyParser.json()) // data body parsing / 들어오는건 json  으로만 받겠다
app.use(bodyParser.urlencoded({extended:true})) // uri 깨짐 방지 (한글 등..)
app.use(cors())
app.listen(3002, ()=>console.log('Server started'));

// get 방식에 /users 로 들어왔을 때 
app.get('/users', (req, res) => {
	const query = connection.query('SELECT * FROM todo', (err,rows) =>{
		if(err) throw err;
		const todo = rows.length !== 0 ? rows : {message: 'No data selected'}
		res.json(todo);
	});
})

app.post('/users', (req, res) => {
	const insertTodo = {
		idtodo: req.body.idtodo,
		name : req.body.name
	}

	//console.log(req.body.name + typeof(req.body.name))
	
	const query = connection.query("INSERT INTO todo (idtodo, name ) VALUES ('" + req.body.idtodo + "', '"+ req.body.name + "')" , (err,rows) =>{
		if(err) throw err;
		res.json(insertTodo);
	});
})



