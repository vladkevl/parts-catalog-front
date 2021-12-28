import {gql} from "@apollo/client";

const GET_PARTS = gql`
    query Parts($filter: parts_filter!, $limit: Int = 8, $offset: Int = 0) {
        categories(limit: -1) {
            id
            name
        }
        parts_aggregated(filter: $filter) {
            count {
                id
            }
        }
        parts(filter: $filter, limit: $limit, offset: $offset) {
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
