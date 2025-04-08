// Exports default

exports.connectToDatabase = async(dataName) =>{
    console.log("Se conectando ao banco" + dataName);
}

exports.disconnectDatabase = async(dataName) =>{
    console.log("Se desconectando do banco" + dataName);
}
