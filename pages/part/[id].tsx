import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head';
import {gql} from '@apollo/client';
import client from '../../lib/apollo';
import {ParsedUrlQuery} from "querystring";
import {Main, MainGrid, MainCard} from "../../styles/style";
import type { IPartProps } from '../../types';

const Part: NextPage<IPartProps> = ({part}) => {
    return (
        <>
            <Head>
                <title>{part.category.name} к {part.model.brand.name} {part.model.name} {part.year} года</title>
                <meta name="description" content={`${part.category.name} к ${part.model.brand.name} ${part.model.name} ${part.year} года`}/>
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
    id: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params as IParams;
    const {data} = await client.query({
        query: gql`
        query Part {
   parts_by_id(id: "${id}") {
    id
    status
    category {
      id
      name
    }
    description
    model {
      brand {
        id
        name
        code
      }
      id
      name
      code
    }
    price
    year
  }
}
      `,
    });

    return {
        props: {
            part: data.parts_by_id,
        },
    };
}
