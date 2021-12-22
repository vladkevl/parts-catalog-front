import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Head from 'next/head';
import {addApolloState, initializeApollo} from '../../lib/apollo';
import {ParsedUrlQuery} from "querystring";
import {Main, MainGrid, MainCard} from "../../styles/style";
import type {IPartProps} from '../../types';
import GET_PART from "../../lib/graphql/query/getPart";

const Part: NextPage<IPartProps> = ({part}) => {
    return (
        <>
            <Head>
                <title>{part.category.name} к {part.model.brand.name} {part.model.name} {part.year} года</title>
                <meta name="description"
                      content={`${part.category.name} к ${part.model.brand.name} ${part.model.name} ${part.year} года`}/>
            </Head>
            <Main>
                <MainGrid>
                    <MainCard key={part.id}>
                        <h3>{part.category.name}</h3>
                        <p>
                            {part.price}
                        </p>
                    </MainCard>
                </MainGrid>
            </Main>
        </>
    )
}

export default Part;

interface IParams extends ParsedUrlQuery {
    id: string | undefined;
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const {id} = context.params as IParams;

    if (!id) {
        throw new Error('Parameter is invalid')
    }

    try {
        const apolloClient = initializeApollo();

        const {data} = await apolloClient.query({
            query: GET_PART,
            variables: {
                id: id
            }
        })

        return addApolloState(apolloClient, {
            props: {
                part: data.parts_by_id
            },
        })
    } catch (err) {
        return {
            notFound: true,
        }
    }
}
