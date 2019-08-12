import graphqlTag from 'graphql-tag';

const getPrinters = graphqlTag`
    {
        users {
            id
            name
        }
    }
`;

export default getPrinters;
