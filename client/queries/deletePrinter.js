import graphqlTag from 'graphql-tag';

const deletePrinter = graphqlTag`
    mutation deletePrinter ($id: ID) {
        deletePrinter (id: $id) {
            id
        }
    }
`;

export default deletePrinter;
