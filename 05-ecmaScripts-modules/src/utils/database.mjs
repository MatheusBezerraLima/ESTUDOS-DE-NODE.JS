
const databaseType = {
    userType: "admin",
    typeData: "datalocal",    
}

const connectToDatabase = async(dataName) => {
    console.log("Connectado ao banco " + dataName);
}

const disconnectToDatabase = async(dataName) => {
    console.log("Desconetado do banco " + dataName);
}

// Exportando uma função no padrão ESM
export default connectToDatabase;

// Exportando multiplas funções no padrão ESM
export {
    connectToDatabase,
    disconnectToDatabase,
    databaseType,
}