import {gql} from "@apollo/client";

const GET_PART = gql`
    query Part($id: ID!) {
        parts_by_id(id: $id) {
            id
            status
            category {
                id
                name
            }
            description
            model {
                brand {
                    id
                    name
                    code
                }
                id
                name
                code
            }
            price
            year
        }
    }
`;

export default GET_PART;
