const readline = require('readline-sync')
const books = require('./database.js')

//console.log(books)

const appInit = readline.question('Deseja buscar um livro? S/N')

if (appInit.toLocaleUpperCase() == 'S') {
  console.log('Categorias:')
  console.log('/Ficção', '/Ficção Histórica', '/Fantasia', '/Culinária')
  const categoryInput = readline.question('Informe a categoria desejada:')
  const result = books.filter(book => book.category === categoryInput)
  console.table(result)
} else {
  const orderedBooks = books.sort((a,b) => a.pages - b.pages )
  console.log('Esses são todos livros disponíveis:')
  console.table(orderedBooks)

}