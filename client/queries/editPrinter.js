import graphqlTag from 'graphql-tag';

const editPrinter = graphqlTag`
    mutation editPrinter ($id: ID, $active: Boolean, $ip: String, $name: String, $users: [ID]) {
        editPrinter (id: $id, active: $active, ip: $ip, name: $name, users: $users) {
            id
            active
            ip
            name
        }
    }
`;

export default editPrinter;
