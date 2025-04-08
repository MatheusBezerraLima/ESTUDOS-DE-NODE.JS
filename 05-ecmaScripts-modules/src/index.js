// Importando fragmentos no padrão ESM 
// import connectToDatabas from "./utils/database.mjs";

// Importando tudo de um arquivo no padrão ESM
import * as database from "./utils/database.mjs"

import { getDataFromApi } from './utils/api.mjs'


database.connectToDatabase('my-database')
database.disconnectToDatabase('my-database')
getDataFromApi()