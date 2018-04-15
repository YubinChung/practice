import express from 'express';
import mysql from 'mysql';

const app = express();
const router = express.Router();
const connection = mysql.createConnection({
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


// get 방식에 /users 로 들어왔을 때 
router.get('/users', (req, res) => {
	const query = connection.query('SELECT * FROM users', (err,rows) =>{
		if(err) throw err;
		const users = rows.length !== 0 ? rows : {message: 'No data selected'}
		res.json(users);
	});
})


export default router;

