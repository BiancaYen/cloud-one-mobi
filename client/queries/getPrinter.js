import graphqlTag from 'graphql-tag';

const getPrinter = graphqlTag`
    query getPrinter($id: ID!) {
        printer(id:$id) {
            id
            active
            ip
            name
            users {
                id
            }
        }
    }
`;

export default getPrinter;
