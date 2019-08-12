import graphqlTag from 'graphql-tag';

const addPrinter = graphqlTag`
    mutation addPrinter ($active: Boolean, $ip: String, $name: String, $users: [ID]) {
        addPrinter (active: $active, ip: $ip, name: $name, users: $users) {
            id
            active
            ip
            name
        }
    }
`;

export default addPrinter;
