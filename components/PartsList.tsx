import {NextPage} from "next";
import {MainCard} from "../styles/style";
import Link from "next/link";
import type {IPart, IPartsProps} from '../types';
import React from "react";

const PartsList: NextPage<IPartsProps> = (props) => {
    const {parts} = props;

    return (
        <>
            {parts.map((part: IPart) => (
                <Link key={part.id} href={`/part/${part.id}`}>
                    <MainCard>
                        <h3>{part.category.name} к {part.model.brand.name} {part.model.name}, {part.year} года
                            выпуска</h3>
                        <p>
                            Цена: {part.price} USD
                        </p>
                    </MainCard>
                </Link>
            ))}
        </>
    )
}

export default PartsList;
