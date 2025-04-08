// Funções que lidam com produto

const getFullName = async(codeId, productName) => {

    console.log("\n");
    console.log("product: " + codeId + " --- " + productName);
    return codeId + "--" + productName;
}

const getProductLabel = async(productName) => {
    console.log("Product: " + productName);
}    

module.exports = {
    // exportando funções
    getFullName,
    getProductLabel,
}