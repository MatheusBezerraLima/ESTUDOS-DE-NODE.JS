const {getFullName, getProductLabel} = require("./services/products")
const conf = require("./services/config")
const dataBase = require("./services/database")


const main = async() => {

    console.log("Ola meu nome é system")

    getFullName('1', 'teclado')

    // p.getFullName("448", "ipad")
    // p.getFullName("449", "mouse")
    // p.getFullName("499", "tv")

    // p.getProductLabel("Tvzinha")

    // console.log(conf.devArea.production)
    // console.log(conf.client.device)

    dataBase.connectToDatabase('MyDb')
    dataBase.disconnectDatabase('MyDb')    
}

main()