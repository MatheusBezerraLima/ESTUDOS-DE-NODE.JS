async function connectToDatabase(user, password){
    if(user===process.env.USERDATABASE && password===process.env.PASSWORDDATABASE){
        console.log("Conectado com o banco de dados!");
        
    }else{
        console.log("Falha na conexão com o banco :(");
    }
}

export default connectToDatabase;
