import graphqlTag from 'graphql-tag';

const getPrinters = graphqlTag`
    {
        printers {
            id
            active
            ip
            name
            users {
                name
            }
        }
    }
`;

export default getPrinters;
