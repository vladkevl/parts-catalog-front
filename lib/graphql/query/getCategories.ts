import {gql} from "@apollo/client";

const GET_CATEGORIES = gql`
    query Categories {
        categories(limit: -1) {
            id
            name
        }
    }
`;

export default GET_CATEGORIES;
