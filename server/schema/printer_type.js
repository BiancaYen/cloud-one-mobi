const mongoose = require('mongoose');
const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const UserType = require('./user_type');

const Printer = mongoose.model('printer');

const PrinterType = new GraphQLObjectType({
    name: 'Printer',
    fields: () => ({
        id: { type: GraphQLID },
        active: { type: GraphQLBoolean },
        ip: { type: GraphQLString },
        name: { type: GraphQLString },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue) {
                return Printer.findUsers(parentValue.id);
            }
        }
    })
});

module.exports = PrinterType;
