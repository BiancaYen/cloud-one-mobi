const mongoose = require('mongoose');
const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const PrinterType = require('./printer_type');
const UserType = require('./user_type');

const Printer = mongoose.model('printer');
const User = mongoose.model('user');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        printers: {
            type: new GraphQLList(PrinterType),
            resolve() {
                return Printer.find({});
            }
        },
        printer: {
            type: PrinterType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return Printer.findById(id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return User.find({});
            }
        },
        user: {
            type: PrinterType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return User.findById(id);
            }
        }
    })
});

module.exports = RootQuery;
