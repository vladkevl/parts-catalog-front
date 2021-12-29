import {useQuery, NetworkStatus} from "@apollo/client";
import PartsList from "../components/PartsList";
import GET_PARTS from "../lib/graphql/query/getAllParts";
import LoadMore from "../components/LoadMore";
import React, {PropsWithChildren} from "react";
import {IPartsProps} from "../types";

const Parts = (props: PropsWithChildren<IPartsProps>) => {
    const {filter} = props;

    const limit = 10;

    const {loading, error, data, fetchMore, networkStatus, refetch} = useQuery(GET_PARTS, {
        variables: {
            limit: limit,
            offset: 0,
            filter: filter
        },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache',
        nextFetchPolicy: 'network-only'
    });

    const loadingMoreParts = networkStatus === NetworkStatus.fetchMore

    if (loading && !loadingMoreParts) return null;
    if (error) return null;

    const areMoreParts = data.parts.length < data.parts_aggregated[0].count.id;

    return (
        <>
            <PartsList parts={data.parts || []}/>
            <LoadMore onLoadMoreEnabled={areMoreParts} loadingMoreParts={loadingMoreParts}
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
