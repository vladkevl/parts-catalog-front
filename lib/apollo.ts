import {ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject} from "@apollo/client";
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';
import {useMemo} from "react";
import type { AppProps } from 'next/app'

// export const graphqlClient = () => new ApolloClient({
//     ssrMode: typeof window === 'undefined', // set to true for SSR
//     link: new HttpLink({
//         uri: 'https://api.parts.itspec.by/graphql',
//     }),
//     cache: new InMemoryCache(),
// });

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient  = (initialState = {}) => {
    const isDev = process.env.NODE_ENV !== 'production';
    const url = isDev ? 'https://api.parts.itspec.by' : '';

    const ssrMode = typeof window === 'undefined';
    const link = new HttpLink({
        uri: `${url}/graphql`,
        fetch,
    });
    const cache = new InMemoryCache().restore(initialState);

    const client = new ApolloClient({
        ssrMode,
        link,
        cache,
    });

    return client;
};

export const initializeApollo = (initialState = null) => {
    const _apolloClient = apolloClient ?? createApolloClient();
    if (initialState) {
        const existingCache = _apolloClient.extract();
        const data = merge(initialState, existingCache, {
            arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter((d) =>
                    sourceArray.every((s) => !isEqual(d, s))
                ),
            ],
        })
        _apolloClient.cache.restore(data);
    }
    if (typeof window === 'undefined') return _apolloClient;
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;

}

export const addApolloState = (client: ApolloClient<NormalizedCacheObject>, pageProps: AppProps['pageProps']) => {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    }
    return pageProps;
}

export const useApollo = (pageProps: AppProps['pageProps']) => {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = useMemo(() => initializeApollo(state), [state]);
    return store;
}
