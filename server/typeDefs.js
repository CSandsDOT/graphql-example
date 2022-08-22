const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Author {
        id: ID
        name: String
    }

    type Book {
        id: ID
        name: String
        authorId: Int
    }

    type Query : {
        getAuthors: [Author]
        getAuthorById(id: ID): Author
        getAuthorByName: Author
        getBooks: [Book]
        getBookById: Book
        getBookByName: Book
    }
    
    type Mutation: {
        addAuthor(name: String): Author
        updateAuthor(id: ID, name: String): Author
        deleteAuthor(id: ID): String
        addBook(name: String, authorId: Int): Book
        updateBook(id: ID, name: String, authorId: Int): Book
        deleteBook(id: ID): String
    }
    `;
module.exports = typeDefs;

/* 
const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLList, 
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')

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
    }) */