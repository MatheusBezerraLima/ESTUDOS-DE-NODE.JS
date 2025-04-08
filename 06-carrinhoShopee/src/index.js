import createItem from "./services/item.js";

import * as cartService from "./services/cart.js"

const myCart = []

console.log("\n👋 Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)
const item3 = await createItem("Bolsa Diesel", 99.99, 2)
const item4 = await createItem("Mouse gamer", 299.99, 1)


// Adicionando dois itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)
await cartService.addItem(myCart, item4)

// Diminui a quantidade de um item no carrinho
await cartService.removeItem(myCart, item1)

await cartService.addQuantityItem(myCart, item2)

// Calculando o total do carrinho
await cartService.calculateTotal(myCart)

// Listando os itens do carrinho
await cartService.displayCart(myCart)

// Deletando um item do carrinho
await cartService.deleteItem(myCart, item2.name)


