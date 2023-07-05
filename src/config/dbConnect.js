import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:240240@cluster0.u3lgwcm.mongodb.net/senac2"); 
//A função connect guarda a string de conexão dentro dos parenteses

let db = mongoose.connection;
//Agora criamos um avariável que guarda a ação conectar nosso usuário com o mongoDB.

export default db;