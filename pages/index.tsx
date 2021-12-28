import {useQuery, NetworkStatus} from '@apollo/client';
import PartsList from "../components/PartsList";
import GET_PARTS from "../lib/graphql/query/getAllParts";
import React, {useState} from 'react';
import Filter from "../components/Filter";
import LoadMore from "../components/LoadMore";

const Parts = () => {
    const limit = 10;
    const [filter, setFilter] = useState({
        status: {_eq: 'published'},
    });

    const {loading, error, data, fetchMore, networkStatus, refetch} = useQuery(GET_PARTS, {
        variables: {
            limit: limit,
            offset: 0,
            filter: filter
        },
        notifyOnNetworkStatusChange: true,
    });

    const loadingParts = networkStatus === NetworkStatus.fetchMore

    if (loading && !loadingParts) return null;
    if (error) return `Error! ${error}`;

    const areMoreParts = data.parts.length < data.parts_aggregated[0].count.id;

    return (
        <>
            <Filter filter={filter} setFilter={setFilter} categories={data.categories || []} refetch={refetch}/>
            <PartsList parts={data.parts || []}/>
            <LoadMore onLoadMoreEnabled={areMoreParts} loadingMoreParts={loadingParts}
                      onLoadMore={() =>
                          fetchMore({
                              variables: {
                                  limit: limit,
                                  offset: data.parts.length,
                                  filter: filter
                              }
                          })
                      }/>
        </>
    )
}

export default Parts;
