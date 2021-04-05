//call the required packages
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

//CREATE EXPRESS APP
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES WILL GO HERE
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log("Server started on port 3000"));
