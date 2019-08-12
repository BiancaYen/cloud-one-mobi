const graphql = require('graphql');

const {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} = graphql;

const mongoose = require('mongoose');

const Printer = mongoose.model('printer');
const User = mongoose.model('user');

const PrinterType = require('./printer_type');
const UserType = require('./user_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPrinter: {
            type: PrinterType,
            args: {
                active: { type: GraphQLBoolean },
                ip: { type: GraphQLString },
                name: { type: GraphQLString },
                users: { type: new GraphQLList(GraphQLID) }
            },
            resolve(parentValue, args) {
                return (new Printer(args)).save();
            }
        },
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                surname: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return (new User(args)).save();
            }
        },
        deletePrinter: {
            type: PrinterType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, { id }) {
                return Printer.remove({ _id: id });
            }
        },
        editPrinter: {
            type: PrinterType,
            args: {
                id: { type: GraphQLID },
                active: { type: GraphQLBoolean },
                ip: { type: GraphQLString },
                name: { type: GraphQLString },
                users: { type: new GraphQLList(GraphQLID) }
            },
            resolve(parentValue, args) {
                return Printer.updateOne(args, (err, res) => {
                    console.log(err, res);
                });
            }
        }
    }
});

module.exports = mutation;
