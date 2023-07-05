import express, {json} from 'express';
import index from './routes/index.js';
import db from './config/dbConnect.js'
import apis from './routes/api.js';

const app = express(); // esta variavel recebe o express, 

app.use(json());
app.use("/", index);
app.use("/apis", apis);

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco é feita com sucesso')
});


export default app;
