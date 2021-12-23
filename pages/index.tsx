import {useQuery, NetworkStatus} from '@apollo/client';
import PartsList from "../components/PartsList";
import GET_PARTS from "../lib/graphql/query/getAllParts";
import React from 'react';

const Parts = () => {
    const limit = 10;

    const {loading, error, data, fetchMore, networkStatus} = useQuery(GET_PARTS, {
        variables: {
            limit: limit,
            offset: 0
        },
        notifyOnNetworkStatusChange: true,
    });

    const loadingMoreParts = networkStatus === NetworkStatus.fetchMore

    if (loading && !loadingMoreParts) return null;
    if (error) return `Error! ${error}`;

    const areMoreParts = data.parts.length < data.parts_aggregated[0].count.id;

    return (
        <PartsList parts={data.parts || []} onLoadMoreEnabled={areMoreParts} loadingMoreParts={loadingMoreParts}
                   onLoadMore={() =>
                       fetchMore({
                           variables: {
                               limit: limit,
                               offset: data.parts.length
                           }
                       })
                   }/>
    )
}

export default Parts;
