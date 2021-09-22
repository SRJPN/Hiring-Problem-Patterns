const { Run } = require("./lib");

var books = '10101'

var patterns = [
    /1[.*]?0[.*]?1/,
    /0[.*]?1[.*]?0/
]

patterns = ['101', '010']

console.log(Run(books, patterns));