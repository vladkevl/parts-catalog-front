import {NextPage} from "next";
import {Main, MainCard, MainGrid} from "../styles/style";
import Link from "next/link";
import type { IPartsProps } from '../types';

const PartsList: NextPage<IPartsProps> = (props) => {
    return (
        <Main>
            <MainGrid>
                {props.parts.map((part: any) => (
                    <Link key={part.id} href={`/part/${part.id}`}>
                        <MainCard>
                            <h3>{part.category.name}</h3>
                            <p>
                                {part.price}
                            </p>
                        </MainCard>
                    </Link>
                ))}
            </MainGrid>
        </Main>
    )
}

export default PartsList;
