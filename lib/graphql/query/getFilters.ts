import {gql} from "@apollo/client";

const GET_FILTERS = gql`
    query Categories {
        brands(limit: -1) {
            id
            name
        }
        models(limit: -1) {
            id
            name
            brand {
                id
                name
            }
        }
        categories(limit: -1) {
            id
            name
        }
    }
`;

export default GET_FILTERS;
