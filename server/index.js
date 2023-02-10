import express from 'express';
import fileUpload from 'express-fileupload';
import postsImages from './routes/uploadImage/upload.image.js';
import { PORT } from './config.js';
import { connectionDB } from './database.js';

const app = express();
connectionDB();



app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))



app.use(postsImages);


app.listen(PORT);
console.log("Server is running in port", PORT);