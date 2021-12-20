import type {NextPage} from 'next'
import {gql} from '@apollo/client';
import client from '../lib/apollo';
import PartsList from "../components/PartsList";
import {IPartsProps} from "../types";

const Parts: NextPage<IPartsProps> = ({parts}) => {
    return (
        <PartsList parts={parts}/>
    )
}

export default Parts;

export async function getServerSideProps() {
    const {data} = await client.query({
        query: gql`
        query Parts {
   parts(filter: {status: {_eq: "published"}}, limit: 10) {
     body {
      id
      name
    }
    article
    category {
      id
      name
    }
    code
    description
    engine_type {
      id
      name
    }
    engine_volume
    fuel {
      id
      name
    }
    id
    model {
      id
      name
      code
      brand {
        code
        id
        name
      }
    }
    price
    version
    year
    files {
      id
    }
  }
}
      `,
    });

    return {
        props: {
            parts: data.parts,
        },
    };
}
