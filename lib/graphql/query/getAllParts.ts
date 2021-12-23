import {gql} from "@apollo/client";

const GET_PARTS = gql`
    query Parts($limit: Int = 8, $offset: Int = 0) {
        parts_aggregated {
            count {
                id
            }
        }
        parts(filter: {status: {_eq: "published"}}, limit: $limit, offset: $offset) {
            body {
                id
                name
            }
            article
            category {
                id
                name
            }
            code
            description
            engine_type {
                id
                name
            }
            engine_volume
            fuel {
                id
                name
            }
            id
            model {
                id
                name
                code
                brand {
                    code
                    id
                    name
                }
            }
            price
            version
            year
            files {
                id
            }
        }
    }
`;

export default GET_PARTS;
