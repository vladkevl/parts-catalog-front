import {useQuery, NetworkStatus} from "@apollo/client";
import PartsList from "../components/PartsList";
import GET_PARTS from "../lib/graphql/query/getAllParts";
import Filter from "../components/Filter";
import LoadMore from "../components/LoadMore";

const Parts = () => {
    const limit = 10;

    let filter = {
        status: {_eq: 'published'},
    }

    const {loading, error, data, fetchMore, networkStatus, refetch} = useQuery(GET_PARTS, {
        variables: {
            limit: limit,
            offset: 0,
            filter: filter
        },
        notifyOnNetworkStatusChange: true,
    });

    const loadingMoreParts = networkStatus === NetworkStatus.fetchMore

    if (loading && !loadingMoreParts) return null;
    if (error) return `Error! ${error}`;

    const areMoreParts = data.parts.length < data.parts_aggregated[0].count.id;

    return (
        <>
            <Filter filter={filter} categories={data.categories || []} refetch={refetch}/>
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
