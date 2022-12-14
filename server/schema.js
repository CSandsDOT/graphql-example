const {authors, books} = require('./data')

const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLList, 
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')

    const RootQueryType = new GraphQLObjectType({
        name: "rootQuery",
        description: "Root query type",
        fields: () => ({
            book: {
                type: BookType,
                description: "Book with specified ID",
                args: {id: { type: GraphQLInt }},
                resolve: (parent, args) => books.find(book => book.id === args.id)
            },
            books: {
                type: new GraphQLList(BookType),
                description: "List of all books",
                resolve: () => books
            },
            author: {
                type: AuthorType,
                description: "Author with specified ID",
                args: { id: { type: GraphQLInt}},
                resolve: (parent, args) => authors.find(author => author.id === args.id)
            },
            authors: {
                type: new GraphQLList(AuthorType),
                description: "List of all authors",
                resolve: () => authors
            }
        })
    })

    const RootMutationType = new GraphQLObjectType({
        name: "RootMutationType",
        description: "Root Mutation Type",
        fields: () =>({
            addBook: {
                type: BookType,
                description: "Add a book to the database",
                args: { 
                    name: { type: GraphQLNonNull(GraphQLString)  },
                    authorId: { type: GraphQLNonNull(GraphQLInt) }
                },
                resolve: (parent, args) => {
                    const book = {id: books.length + 1, name: args.name, authorId: args.authorId }
                    books.push(book)
                    return book
                }
            },
            addAuthor: {
                type: AuthorType,
                description: "Add an author to the database",
                args: { 
                    name: { type: GraphQLNonNull(GraphQLString)  },
                },
                resolve: (parent, args) => {
                    const author = {id: authors.length + 1, name: args.name }
                    authors.push(author)
                    return author
                }
            }
        })
    })

    const AuthorType = new GraphQLObjectType({
        name: 'Author',
        description: 'This is the author of one or more books',
        fields: () =>({
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
            books: { 
                type: GraphQLList(BookType),
                resolve: (author) => {
                    return books.filter(book => book.authorId === author.id)
                }
            }
        })
    })

    const BookType = new GraphQLObjectType({
        name: 'Book',
        description: 'This is a book',
        fields: () =>({
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
            authorId: { type: GraphQLNonNull(GraphQLInt) },
            author: { type: AuthorType,
                resolve: (book) =>{
                    return authors.find(author => author.id === book.authorId)
                }
            }
        })
    }) 

    module.exports = { RootQueryType, RootMutationType }