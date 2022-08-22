const Author = require('./models/Author.model')
const Book = require('./models/Book.model')

const resolvers = {
    Query: {
        getAuthors: async () => {
            return await Author.find()
        },
        getAuthorById: async (parent, args) => {
            return await Author.findById(args.id)
        },
        getAuthorByName:  async (parent, args) => {
            return await Author.filter(author => author.name === args.name)
        },
        getBooks:  async (parent, args) => {
            return await Book.findById(args.id)
        },
        getBookById: async (parent, args) => {
            return await Book.findById(args.id)
        },
        getBookByName:   async (parent, args) => {
            return await Book.filter(author => author.name === args.name)
        },
    },
    Mutation: {
        addAuthor: async (parent, args, context, info) => {
            const author = new Author({ name: args.name })
            await author.save()
            return author
        },
        deleteAuthor: async (parent, args, context, info) => {
            await Author.findByIdAndDelete(args.id)
            return `Author ${args.id} has been deleted.`
        },
        updateAuthor: async (parent, args, context, info) => {
            const author = await Author.findByIdAndUpdate(args.id, { name: args.name })
            return author
        },
        addBook: async (parent, args, context, info) => {
            const book = new Book({ name: args.name, authorId: args.authorId })
            book.save()
        },
        deleteBook: async (parent, args, context, info) => {
            await Book.findByIdAndDelete(args.id)
            return `Book ${args.id} has been deleted.`
        },
        updateBook: async (parent, args, context, info) => {
            const book = await Book.findByIdAndUpdate(args.id, { name: args.name, authorId: args.authorId })
            return book
        }
    }
}

module.exports = resolvers 

/* const { 
    GraphQLSchema, 
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
*/