import {LoadMoreContainer} from "../styles/style";
import React from "react";
import {NextPage} from "next";
import {ILoadMoreProps} from "../types";

const LoadMore: NextPage<ILoadMoreProps> = (props) => {
    const {onLoadMoreEnabled, onLoadMore, loadingMoreParts} = props;

    return (
        <LoadMoreContainer>
            {onLoadMoreEnabled && (
                <button onClick={() => onLoadMore()} disabled={loadingMoreParts}>
                    {loadingMoreParts ? 'Загрузка...' : 'Показать ещё'}
                </button>
            )}
        </LoadMoreContainer>
    )
}

export default LoadMore;
