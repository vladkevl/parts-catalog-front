import '../styles/globals.css'
import type {AppProps} from 'next/app';
import Layout from "../components/Layout";
import {useApollo} from '../lib/apollo';
import {ApolloClient, ApolloProvider, NormalizedCacheObject} from "@apollo/client";

export const PartCatalog = ({Component, pageProps}: AppProps) => {
    const client: ApolloClient<NormalizedCacheObject> = useApollo(pageProps);
    return <ApolloProvider client={client}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
}

export default PartCatalog;
