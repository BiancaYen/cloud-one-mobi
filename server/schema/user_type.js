const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        surname: { type: GraphQLString },
        profileImage: { type: GraphQLString }
    })
});

module.exports = UserType;
