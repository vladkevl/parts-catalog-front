import type {NextPage} from 'next'
import {useQuery} from '@apollo/client';
import PartsList from "../components/PartsList";
import GET_PARTS from "../lib/graphql/query/getAllParts";

const Parts = () => {
    const { loading, error, data } = useQuery(GET_PARTS);

    if (loading) return null;
    if (error) return `Error! ${error}`;
    return (
        <PartsList parts={data.parts}/>
    )
}

export default Parts;
